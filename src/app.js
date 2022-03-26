/**
 * Create By: Meng
 * Create Date: 2022-03
 */

App({
  consts: {

  },
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env: 'my-env-id', // 此处请填入环境 ID, 如不填则使用默认环境（第一个创建的环境）
        traceUser: true,
      });
    }
  },
  onShow: function(options) {

  },
  onHide: function() {

  },
  onError: function() {

  },
  onPageNotFound: function() {

  }
});
