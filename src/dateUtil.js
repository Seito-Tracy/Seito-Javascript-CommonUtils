// dateUtils.js 日期工具
/**
 * 将 Date 或时间戳格式化为指定格式字符串
 * @param {*} date
 * @param {*} format
 * @returns
 */
export function formatDate(date, format) {
  const d = new Date(date);
  format = (format || 'YYYY-MM-DD hh:mm:ss');
  if(d && d !== 'Invalid Date'){
    let month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    const hour = d.getHours().toString().padStart(2, '0');
    const minute = d.getMinutes().toString().padStart(2, '0');
    const second = d.getSeconds().toString().padStart(2, '0');
    const milliseconds = d.getMilliseconds().toString().padStart(3, '0');

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return format.replace('YYYY', year)
      .replace('MM', month)
      .replace('DD', day)
      .replace('hh', hour)
      .replace('mm', minute)
      .replace('ss', second)
      .replace('sss', milliseconds);
  }
}

/**
 * 转换当前时间
 */
export function formatNow(format = 'YYYY-MM-DD HH:mm:ss') {
  return formatDate(new Date(), format);
}

/**
 * 将字符串格式转化为Date对象
 * @param {*} dateString
 * @param {*} format
 * @returns
 */
export function parseDate(dateString, format = 'YYYY-MM-DD') {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }
  return formatDate(date, format);
}

/**
 * 将Date转换成时间戳
 * @param {*} value
 * @returns
 */
export function toTimestamp(value) {
  if (!(value instanceof Date)) return NaN;
  return value.getTime();   //Math.floor(date.getTime() / 1000); // 将毫秒转换为秒并取整
}

/**
 * 传入date对象，指定增加某单位某些数量后，返回推迟的时间，单位可传入年、月、日、时、分钟、秒、毫秒。
 * 如查看目前时间增加10分钟:addTime(new Date0),MINUTES,10)
 * @param {*} date
 * @param {*} unit
 * @param {*} amount
 * @returns
 */
export function addTime(date, unit, amount) {
  const d = new Date(date);
  switch (unit) {
    case 'YEARS':
      d.setFullYear(d.getFullYear() + amount);
      break;
    case 'MONTHS':
      d.setMonth(d.getMonth() + amount);
      break;
    case 'DAYS':
      d.setDate(d.getDate() + amount);
      break;
    case 'HOURS':
      d.setHours(d.getHours() + amount);
      break;
    case 'MINUTES':
      d.setMinutes(d.getMinutes() + amount);
      break;
    case 'SECONDS':
      d.setSeconds(d.getSeconds() + amount);
      break;
    case 'MILLISECONDS':
      d.setMilliseconds(d.getMilliseconds() + amount);
      break;
    default:
      throw new Error('Invalid time unit');
  }
  return d;
}

/**
 * 传入date对象，指定减少某单位某些数量后，返回推迟的时间，
 * 单位可传入年、月、日、时、分钟、秒、毫秒
 * @param {*} date
 * @param {*} unit
 * @param {*} amount
 * @returns
 */
export function subTime(date, unit, amount) {
  return addTime(date, unit, -amount);
}

/**
 * 传入date对象，指定增加某单位某些数量后，返回相差的时间，单位可指定年、月、日、时、分钟、秒、毫秒如。
 * 查看两个日期相差多少小时:diffTime(date1,date2,HOURS)
 * @param {*} date1
 * @param {*} date2
 * @param {*} unit
 * @returns
 */
export function diffTime(date1, date2, unit) {
  const diff = (date2 - date1) / 1000; // difference in seconds
  switch (unit) {
    case 'SECONDS':
      return Math.abs(diff);
    case 'MINUTES':
      return Math.abs(diff / 60);
    case 'HOURS':
      return Math.abs(diff / 3600);
    case 'DAYS':
      return Math.abs(diff / 86400);
    default:
      throw new Error('Invalid time unit');
  }
}

/**
 * 计算两天之间相差的天数
 * @param {*} date1 
 * @param {*} date2 
 * @returns 
 */
export function diffDay(date1, date2){
  return Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
}

/**
 * 判断是否为合法日期
 * @param {*} value
 * @returns true/false
 */
export function isValidDate(value) {
  const date = new Date(value);
  return !isNaN(date.getTime());
}

/**
 * 判断两个时间是否为同一天
 * @param {*} date1 String
 * @param {*} date2 String
 * @returns true/false
 */
export function isSameDay(date1, date2) {
  const day1 = new Date(date1);
  const day2 = new Date(date2);
  day1.setHours(0, 0, 0, 0);
  day2.setHours(0, 0, 0, 0);
  return day1.getTime() === day2.getTime();
}

/**
 * 判断是否是今天
 * @param {*} date
 * @returns  true/false
 */
export function isToday(date) {
  const today = new Date();
  return isSameDay(today, date);
}

/**
 * 判断是否为周六/日
 * @param {*} date
 * @returns true/false
 */
export function isWeekend(date) {
  const day = new Date(date).getDay();
  return day === 0 || day === 6; // 0 for Sunday, 6 for Saturday
}

/**
 * 判断 d1 是否早于 d2
 * @param {*} d1  Date
 * @param {*} d2  Date
 * @returns true/false
 */
export function isBefore(d1, d2) {
  return d1.getTime() < d2.getTime();
}

/**
 * 判断 d1 是否晚于 d2
 * @param {*} d1
 * @param {*} d2
 * @returns true/false
 */
export function isAfter(d1, d2) {
  return d1.getTime() > d2.getTime();
}

/**
 * 获取某天的开始时间(00:00:00)
 * @param {*} date
 * @returns 2025-06-30 00:00:00
 */
export function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return formatDate(d);
}

/**
 * 获取某天的结束时间(23:59:59)
 * @param {*} date
 * @returns 2025-06-30 23:59:59
 */
export function endOfDay(date) {
  const d = new Date(date);
  d.setHours(23, 59, 59, 999);
  return formatDate(d);
}

/**
 * 获取所在月份的第一天
 * @param {*} date
 * @returns 2025-06-01 00:00:00
 */
export function startOfMonth(date) {
  const d = new Date(date);
  d.setDate(1);
  d.setHours(0, 0, 0, 0);
  return formatDate(d);
}

/**
 * 获取所在月份的最后一天
 * @param {*} date
 * @returns 2025-06-30 23:59:59
 */
export function endOfMonth(date) {
  const d = new Date(date);
  const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0);
  lastDay.setHours(23, 59, 59, 999);
  return formatDate(lastDay);
}

/**
 * 获取指定的date有几天
 * @param {*} date
 * @returns
 */
export function daysInMonth(date) {
  const d = new Date(date);
  return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
}
