function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function formatDay(date) {
  let today = '';
  switch (new Date(date).getDay()) {
    case 0:
      today = '星期日';
      break;
    case 1:
      today = '星期一';
      break;
    case 2: 
      today = '星期二';
      break;
    case 3:
      today = '星期三';
      break;
    case 4:
      today = '星期四';
      break;
    case 5:
      today = '星期五';
      break;
    case 6:
      today = '星期六';
      break;
    default:
      console.log('the date is error');
      break;
  }
  return today;
}

module.exports = {
  formatTime: formatTime,
  formatDay: formatDay
}
