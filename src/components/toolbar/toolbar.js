"use strict";

Component({
    options: {
        multipleSlots: true,
        addGlobalClass: true
    },
    properties: {
        extClass: {
            type: String,
            value: ''
        },
        title: {
            type: String,
            value: '默认标题'
        },
        background: {
            type: String,
            value: 'white'
        },
        color: {
            type: String,
            value: '#232323'
        },
        back: {
            type: Boolean,
            value: true
        },
        loading: {
            type: Boolean,
            value: false
        },
        animated: {
            type: Boolean,
            value: true
        },
        show: {
            type: Boolean,
            value: true,
            observer: '_showChange'
        },
        delta: {
            type: Number,
            value: 1
        }
    },
    data: {
        displayStyle: ''
    },
    attached: function attached() {
        var _this = this;

        var isSupport = !!wx.getMenuButtonBoundingClientRect;
        var rect = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null;
        wx.getSystemInfo({
            success: function success(res) {
                var ios = !!(res.system.toLowerCase().search('ios') + 1);
                _this.setData({
                    ios: ios,
                    statusBarHeight: res.statusBarHeight,
                    innerWidth: isSupport ? 'width:' + rect.left + 'px' : '',
                    innerPaddingRight: isSupport ? 'padding-right:' + (res.windowWidth - rect.left) + 'px' : '',
                    leftWidth: isSupport ? 'width:' + (res.windowWidth - rect.left) + 'px' : ''
                });
            }
        });
    },

    methods: {
        _showChange: function _showChange(show) {
            var animated = this.data.animated;
            var displayStyle = '';
            if (animated) {
                displayStyle = 'opacity: ' + (show ? '1' : '0') + ';-webkit-transition:opacity 0.5s;transition:opacity 0.5s;';
            } else {
                displayStyle = 'display: ' + (show ? '' : 'none');
            }
            this.setData({
                displayStyle: displayStyle
            });
        },
        back: function back() {
            var data = this.data;
            wx.navigateBack({
                delta: data.delta
            });
            this.triggerEvent('back', {
                delta: data.delta
            }, {});
        }
    }
});