/**
 * Create By: Meng
 * Date: 2022-03
 */

import { request } from '../net/index'

// 登录
export function login(data = {}) {
    return request({
        url: '',
        method: 'POST',
        // host: 'auth',
        data
    })
}