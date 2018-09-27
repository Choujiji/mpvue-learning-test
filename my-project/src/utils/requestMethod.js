const serverPath = 'https://www.easy-mock.com/mock/5ba9d75e9face31e433357ff/example/'


export function post(url, body) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: serverPath + url,
            data: body,
            method: 'POST',
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                resolve(res.data)
            },
            fail: (ret) => {
                reject(ret)
            }
        })
    })
}

export function get(url) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: serverPath + url,
            method: 'GET',
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                resolve(res.data)
            },
            fail: (ret) => {
                reject(ret)
            }
        })
    })
}

export function getRequest(baseUrl, subUrl) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: baseUrl + subUrl,
            method: 'GET',
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                resolve(res.data)
            },
            fail: (ret) => {
                reject(ret)
            }
        })
    })
}