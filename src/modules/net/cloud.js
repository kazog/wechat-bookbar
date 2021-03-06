/**
 * Create By: Meng
 * Date: 2022-03
 * 网络配置项
 */

/** 
 * options = {
 *  url: '',
 *  config: { env: ‘云环境’ },
 *  data: {type: 'path' }
 * }
 */
export function query({ url, data = {}, config, loading, toast } = {}) {
  if (loading) {
    wx.showLoading({
      title: "加载中...",
    });
  }
  if (!config) {
    config = { env: "gift03-0grbbyvi246a9c3f" };
  }
  const options = { name: url, data, config };
  // 云函数处理
  return new Promise((resolve) => {
    wx.cloud
      .callFunction(options)
      .then((res) => {
        _printLog(options, res);
        const result = res.result;
        if (result) {
          resolve(result);
        } else {
          resolve({
            code: -100101,
            message: "抱歉,网络拥挤,请稍后再试！",
            data: null,
          });
        }
        wx.hideLoading();
      })
      .catch((err) => {
        _printLog(options, err);
        resolve({
          code: -100102,
          message: "服务升级中,请稍候！",
          data: null,
        });
        wx.hideLoading();
      });
  });
}

export function uploads(files, path) {
  return Promise.all(
    files.map((e) => {
      return upload(e, path);
    })
  );
}
// 上传文件
export function upload(file, path) {
  wx.showLoading({
    title: "上传中...",
  });

  return new Promise((resolve) => {
    wx.cloud.uploadFile({
      // 指定上传到的云路径
      cloudPath: `user/${path}/${Date.now()}.jpg`,
      // 指定要上传的文件的小程序临时文件路径
      filePath: file,
      // config: {
      //   env: this.data.envId
      // },
      // 成功回调
      success: (res) => {
        _printLog("=========》上传成功", res);
        wx.hideLoading();
        if (res.errMsg.indexOf(":ok") > -1) {
          resolve({
            status: true,
            data: res.fileID,
          });
        } else {
          resolve({
            status: false,
            data: null,
          });
        }
      },
      fail: (err) => {
        console.log(err);
        wx.hideLoading();
        resolve({
          status: false,
          data: null,
        });
      },
    });
  });
}

// 解析手机号
async function parsePhone(cloudID) {
  let that = this;
  // 云函数获取手机号
  let { errMsg, result } = await wx.cloud.callFunction({
    name: "getInfo",
    data: {
      weRunData: wx.cloud.CloudID(e), // CloudID
      obj: {
        shareInfo: wx.cloud.CloudID(e), // CloudID
      },
    },
  });
  console.log(result);
  // 判断是否获取到数据
  if (errMsg.indexOf(":ok") > -1) {
    let runData = result.event.weRunData.data;
    if (runData) {
      console.log(runData);
    }
  } else {
    // 获取失败
    that.toast("抱歉，微信授权失败");
  }
}

function _printLog(tag, res) {
  console.log("=========> cloud: ", tag);
  console.log(res);
}
