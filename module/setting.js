// 设置

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/api/user/setting`,
    data,
    createOption(query, 'weapi'),
  )
}
