// 

Page({
    data: {
        user: {
            avatar: '/images/icon/user_ic.png',
            nickName: '请登录'
        },
        isLogin: true,
        tablist: [{
            value: '收货地址',
            icon: '/images/icon/fankui.png',
            path: '/pages/my/feedback/feedback'
        }, {
            value: '意见反馈',
            icon: '/images/icon/fankui.png',
            path: '/pages/my/feedback/feedback'
        }, {
            value: '分享好友',
            icon: '/images/icon/fenxiang.png',
            path: '/pages/my/share/share'
        }, {
            value: '打赏',
            icon: '/images/icon/send_aid.png',
            path: '/pages/my/aid/aid'
        }, {
            value: '关于',
            icon: '/images/icon/about.png',
            path: '/pages/my/about/about'
        }]
    },

    onLoad: function (options) {

    },

    onReady: function () {

    },

    onShow: function () {
        let that = this;
       
    },

    onPullDownRefresh: function () {

    },

    onPressItem: function (e) {
        let that = this;
        let index = e.currentTarget.dataset.index;
        if (index === 0) {
            if (that.showLogin()) {
                return;
            }
        }

        wx.navigateTo({
            url: that.data.tablist[index].path
        })
    },

    onTabPress: function (e) {
        let that = this;
        let index = e.currentTarget.dataset.index;
        let url = '/pages/my/order/order';
        if (!that.data.isLogin) {
            url = '/pages/my/login/login';
        }
        wx.navigateTo({
            url,
        })
    },

    onInfoPress: function () {
        let that = this;
        let url = '/pages/my/info/info';
        if (!that.data.isLogin) {
            url = '/pages/my/login/login';
        }
        // wx.navigateTo({
        //   url
        // })
    },

    showLogin: function () {
        let that = this;
        if (!that.data.isLogin) {
            wx.showModal({
                title: '请先登录',
                content: '您还未登录请先登录',
                success: (e) => {
                    if (e.confirm) {
                        wx.navigateTo({
                            url: '/pages/my/login/login',
                        })
                    }
                }
            })
            return true;
        }
        return false;
    }
})