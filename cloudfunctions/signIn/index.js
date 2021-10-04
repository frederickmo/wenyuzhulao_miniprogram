// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'env1-6g7sav9181c12f16',
  traceUser: true
})

// 云函数入口函数
exports.main = async (event, context) => {
  //检测用户openID是否正确获取
  const wxContext = cloud.getWXContext();
  console.log("Successfully getting user's info ...");
  console.log(wxContext);

  if (wxContext.OPENID == undefined) {
    //返回执行结果
    var result = {}
    result.errCode = 1
    result.errMsg = '未能获取用户的openID，请退出小程序重试'
    var data = {}
    result.data = data
    return result
  }
  //校验所需参数是否正确
  if (event.avatarUrl == undefined) {
    var result = {}
    result.errCode = 2
    result.errMsg = '用户头像数据未上传，请重试'
    var data = {}
    result.data = data
    return result
  }
  if (event.gender == undefined) {
    var result = {}
    result.errCode = 2
    result.errMsg = '用户性别数据未上传，请重试'
    var data = {}
    result.data = data
    return result
  }
  const db = cloud.database();
  //根据openID获取用户信息
  var user;
  await db.collection('user')
  .where({
    openid: wxContext.OPENID
  })
  .get()
  .then((res) => {
    console.log("Successufully getting user info ...")
    console.log(res.data)

    user = res.data[0]
  })

  //如果获取信息失败（用户未注册），则新增用户信息
  if (user == undefined) {
    //新增该用户信息
    to_add_data = {
      nickName: event.nickName,
      avatarUrl: event.avatarUrl,
      gender: event.gender,
      openid: wxContext.OPENID,
      signInTime: new Date()
    }
    console.log('A new user is created.')
    console.log(to_add_data)

    var add_result = {}
    await db.collection('user')
    .add({
      data: to_add_data
    })
    .then((res) => {
      console.log('Successfully adding a new user.')
      console.log(res)
      add_result = res._id
    })
  }

  //如果获取成功，则保存最新数据
  else {
    await db.collection('user')
    .where({
      openid: wxContext.OPENID
    })
    .update({
      data: {
        avatarUrl: event.avatarUrl,
        gender: event.gender,
        nickName: event.nickName
      }
    })
    .then((res) => {
      console.log("Successfully updating user's info.")
      console.log(res)
    })
  }

  //查询用户最新信息，返回给前端
  await db.collection('user')
  .where({
    openid: wxContext.OPENID
  })
  .field({
    nickName: true,
    avatarUrl: true,
    gender: true,
    signInTime: true
  })
  .get()
  .then((res) => {
    console.log('Successfully getting user\'s latest info.')
    console.log(res.data)
    user = res.data[0]
  })

  var result = {}
  if (add_result) {
    result.errCode = 0
    result.errMsg = '新增用户成功！'
  }
  else {
    result.errCode = 0
    result.errMsg = '该用户已注册，信息已更新！'
  }
  var data = {}
  data.user = user
  result.data = data
  return result
}