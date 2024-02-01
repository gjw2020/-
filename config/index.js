const CONFIG = {
  // ================================基础配置 - 无需修改================================
  // 和风天气API
  HEFENG_API_KEY: "6ab01632e2b44936b4951d8019007eab",

  // ================================高级配置 - 需要修改================================

  // 微信公众号的appID
  APP_ID: "wx9d51a5e6cb6356e7",

  // 微信公众号的appsecret
  APP_SECRET: "248b671cae5e68e297ec8d1f1f960a07",

  // 微信公众号的模板ID
  TEMPLATE_ID: "Y-VKUjfF-_k7NTL8OzFm7wHvuxOzGMqvrAPH1CEpW1Y",

  // 天行API的key
  TXApiKey: "fb2c0a5478c5852f53e78c086b7159f3",

  // 用户列表 可配置多个用户
  user: [
    {
      // 男(女)朋友的名字（或昵称或网名）
      userName: "小冉冉吖",
      // 用户列表的`微信号`
      userId: "o0rXa6P8AQMtDolNFpLOrOzQVvrM",
      // 星座
      star: "白羊座",
      // 生日 - 格式：08-22
      birthday: "04-01",
      // 城市 - 格式：支持省市县区
      city: "汤阴县",
    },{
      // 男(女)朋友的名字（或昵称或网名）
      userName: "小郭",
      // 用户列表的`微信号`
      userId: "o0rXa6BpVpzcOuPCj5_J0WYqVj8E",
      // 星座
      star: "双鱼座",
      // 生日 - 格式：08-22
      birthday: "03-05",
      // 城市 - 格式：支持省市县区
      city: "建阳",
    },
  ],

  // 计划旅游日 - 格式：2022-05-20
  tourism: "2022-12-12",

  // 恋爱纪念日 - 格式：2022-05-20
  loveDay: "2023-05-20",

  // ================================功能配置 - 可选修改================================

  // 默认全部开启，关闭可以加快响应速度
  // true 开启，false 关闭
  plugins: {
    // 天气预报
    weather: true,
    // 天气接口 默认接口1，可选接口1、2，接口2暂时无法使用
    weatherType: 1,
    // 星座运势
    star: true,
    // 土味情话
    saylove: false,
    // 健康小提示
    healthtip: false,
    // 毒鸡汤
    duJiTang: false,
    // 早安心语
    zaoAn: true,
    // 晚安心语
    wanAn: false,
    // 彩虹屁
    caiHongPi: false,
  },
};

module.exports = {
  CONFIG,
};
