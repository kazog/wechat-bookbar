/**
 * User: Meng
 * Date: 2022-04
 * 首页
 */
import { queryBooks, queryHotBooks } from "../../modules/api/index";

Page({
    data: {
        itemList: [],
    },

    onLoad: async function (options) {

        const res = await queryBooks({
            pageNum: 1,
            pageSize: 10,
            keyword: ''
        })
    },

    onReady: function () {

    },

    onShow: function () {

    },

    onHide: function () {

    },

    onUnload: function () {

    },

    onPullDownRefresh: function () {

    },

    onReachBottom: function () {

    },

    onShareAppMessage: function () {

    }
})