/**
 * Create By: Meng
 * Create Date: 2022-03
 */

App({
  consts: {
    windowWidth: 414,
    screenHeight: 736,
    windowHeight: 688,
    height: 716,
    statusBarHeight: 20,
    bottomBarHeight: 18,
    system: "",
    wifiEnabled: false,
    batteryLevel: 100,
  },
  onLaunch: function () {
    this._initSystem();

    if (!wx.cloud) {
      console.error("请使用 2.2.3 或以上的基础库以使用云能力");
    } else {
      wx.cloud.init({
        // env: 'my-env-id', // 此处请填入环境 ID, 如不填则使用默认环境（第一个创建的环境）
        traceUser: true,
      });
    }
  },
  onShow: function (options) {},
  // 获取系统信息
  _initSystem: function () {
    wx.getSystemInfo({
      success: (res) => {
        const bottomBarHeight = res.screenHeight - res.safeArea.bottom;
        let consts = {
            windowWidth: res.windowWidth,
            screenHeight: res.screenHeight,
            windowHeight: res.windowHeight,
            height: res.safeArea.height,
            statusBarHeight: res.statusBarHeight,
            bottomBarHeight: bottomBarHeight,
            system: res.system,
            wifiEnabled: res.wifiEnabled,
            batteryLevel: res.batteryLevel
        };    
        this.consts = consts;
      },
    });
  },
  onHide: function () {},
  onError: function () {},
  onPageNotFound: function () {},
});
