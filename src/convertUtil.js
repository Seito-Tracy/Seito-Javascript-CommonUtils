//convertUtil.js 转换工具
/**
 * 将任意值转换成数字，不能转换时返回默认值。
 * 字符串处理和数值转换函数
 * @param {*} val defaultValue=0
 * @returns
 */
export function toNumber(val, defaultValue = 0) {
  const value = Number(val);
  return !isNaN(value) ? value : defaultValue;
}

/**
 * 转换成整数，失败返回默认值
 * @param {*} val
 * @param {*} defaultValue
 * @returns
 */
export function toInt(val, defaultValue = 0) {
  const value = parseInt(val, 10);
  return !isNaN(value) ? value : defaultValue;
}

/**
 * 转换成浮点数，失败返回默认值
 * @param {*} val
 * @param {*} defaultValue
 * @returns
 */
export function toFloat(val, defaultValue = 0.0) {
  const value = parseFloat(val);
  return !isNaN(value) ? value : defaultValue;
}

/**
 * 转换成布尔值，失败返回默认值，(需要支持将字符串'true',false'转换)
 * @param {*} value
 * @param {*} defaultValue
 * @returns
 */
export function toBoolean(value, defaultValue = false) {
  if (typeof value === 'string') {
    value = value.toLowerCase().trim();
    return value === 'true' || value === '1' || value === 'yes';
  }
  return Boolean(value) || defaultValue;
}

/**
 * 转换成字符串，失败返回空字符串
 * @param {*} value
 * @returns
 */
export function toString(value) {
  return value !== null && value !== undefined ? String(value) : '';
}

/**
 * 将值转为数组类型，单个值也转换成单个元素的数组，空值输出为空数组
 * @param {*} value
 * @returns
 */
export function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (value !== null && value !== undefined) {
    return [value];
  }
  return [];
}

/**
 * 将值转为JSON类型，要处理失败转换的情况，返回空JSON Object:}
 * @param {*} value
 * @returns
 */
export function toJson(value) {
  try {
    return JSON.parse(value);
  } catch (e) {
    return {};
  }
}

/**
 * 过滤 NaN 和无穷大，默认返回指定字符串
 * @param {*} value
 * @returns
 */
export function toSafeNumberString(value) {
  if (isNaN(value) || !isFinite(value)) {
    return '';
  }
  return String(value);
}
