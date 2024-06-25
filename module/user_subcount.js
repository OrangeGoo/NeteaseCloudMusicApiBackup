// 收藏计数

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/weapi/subcount`,
    {},
    createOption(query, 'weapi'),
  )
}
