const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    userTaskId: query.userTaskId,
    depositCode: query.depositCode || '0',
  }
  return request(
    'POST',
    `https://music.163.com/api/usertool/task/point/receive`,
    data,
    createOption(query, 'weapi'),
  )
}
