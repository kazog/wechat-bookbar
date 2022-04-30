/**
 * Author: Meng
 * Date: 2022-04
 * Desc: 登录云函数
 */
const cloud = require("wx-server-sdk");

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const db = cloud.database();

// 创建集合云函数入口函数
exports.main = async (event, context) => {
  try {
    const data = {};
    await db.createCollection("account");
    await db.collection("account").add({ data });
    return {
      success: true,
    };
  } catch (e) {
    // 这里catch到的是该collection已经存在，从业务逻辑上来说是运行成功的，所以catch返回success给前端，避免工具在前端抛出异常
    return {
      success: true,
      data: "create collection success",
    };
  }
};
