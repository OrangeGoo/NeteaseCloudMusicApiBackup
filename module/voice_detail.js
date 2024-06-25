const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    id: query.id,
  }
  return request(
    'POST',
    `https://interface.music.163.com/weapi/voice/workbench/voice/detail`,
    data,
    createOption(query, 'weapi'),
  )
}
