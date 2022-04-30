/**
 * Author: Meng
 * Date: 2022-04
 * Desc: 登录云函数
 */
const cloud = require("wx-server-sdk");
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });
const db = cloud.database();
const $ = db.command.aggregate;

exports.main = async (event, context) => {
  const wxc = cloud.getWXContext();
  const openId = wxc.OPENID;
  const data = db.collection("account").where({ openId }).get();
  if (!data || !data.uid) {
    try {
      const uid = openId.substring(3, 9) + Date.now() / 3600;
      const name = openId.substring(9, 16);
      data = {
        uid,
        openId,
        name,
        nickname: name,
        role: 0,
        level: 0,
        phone: "",
        icon: "",
        city: "",
        about: "",
        age: 1,
        sex: 0,
        tag: 0,
        day: 0,
      };
      await db.collection("account").add({ data});
    } catch (e) {}
  }
  return {
    code: 0,
    message: "",
    data: {
      openId: wxc.OPENID,
      unionId: wxc.UNIONID,
      data,
    },
  };
};
