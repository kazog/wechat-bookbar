/**
 * Author: Meng
 * Date: 2022-04
 * Desc: 获取账号信息
 */
const cloud = require("wx-server-sdk");

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });
const db = cloud.database();
// const $ = db.command.aggregate;

exports.main = async (event, context) => {
  const openId = cloud.getWXContext().OPENID;
  const info = db.collection("account").where({ openId }).get();
  return {code: 0, data: info};
};
