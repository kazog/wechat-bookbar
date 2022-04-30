/**
 * Author: Meng
 * Date: 2022-04
 * Desc: 登录云函数
 */

const info = require("./info/info");
const login = require("./login/login");
const password = require("./password/password");
const register = require("./register/register");

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case "info":
      return await info.main(event, context);
    case "login":
      return await login.main(event, context);
    case "password":
      return await password.main(event, context);
    case "register":
      return await register.main(event, context);
  }

  return {
    code: 100910,
    message: "环境未找到，参数有误！",
    data: null,
  };
};
