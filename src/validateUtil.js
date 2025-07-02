/**
 * 判断值是否为空(null、undefined、空字符串、空数组等)
 * @param {*} val
 * @returns
 */
export function isEmpty(val) {
  if (typeof val === "boolean") {
    return false;
  }
  if (typeof val === "number") {
    return false;
  }
  if (val instanceof Array) {
    if (val.length === 0) {
      return true;
    }
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === "{}") {
      return true;
    }
  } else {
    if (
      val === "null" ||
      val === null ||
      val === "undefined" ||
      val === undefined ||
      val === ""
    ) {
      return true;
    }
    return false;
  }
  return false;
}

/**
 * 判断是否为 nuIl
 * @param {*} val
 * @returns
 */
export function isNull(val) {
  return !val || val === null;
}

/**
 * 判断是否为 undefined
 * @param {*} val
 * @returns
 */
export function isUndefined(val) {
  return typeof val === "undefined";
}

/**
 * 判断是否为布尔类型
 * @param {*} val
 * @returns
 */
export function isBoolean(val) {
  return typeof val === "boolean";
}
/**
 * 判断是否为数字，排除 NaN
 * @param {*} val
 * @returns
 */
export function isNumber(val) {
  return !isNaN(val) && /^[0-9]+$/.test(val);
}

/**
 * 判断是否为整数
 * @param {*} val
 * @returns
 */
export function isInteger(val) {
  return Number.isInteger(val);
}

/**
 * 判断是否为浮点数
 * @param {*} val
 * @returns
 */
export function isFloat(val) {
  return typeof val === "number" && !Number.isInteger(val);
}

/**
 * 判断是否为字符串
 * @param {*} val
 * @returns
 */
export function isString(val) {
  return typeof val === "string";
}

/**
 * 判断是否为数组
 * @param {*} val
 * @returns
 */
export function isArray(val) {
  return Array.isArray(val);
}

/**
 * 判断是否为数组
 * @param {*} val
 * @returns
 */
export function isObject(val) {
  return typeof val === "object" && val !== null && !Array.isArray(val);
}

/**
 * 判断是否为正数
 * @param {number} val
 * @returns
 */
export function isPositive(val) {
  return typeof val === "number" && !isNaN(val) && val > 0;
}

/**
 * 判断是否为负数
 * @param {number} val
 * @returns
 */
export function isNegative(val) {
  return typeof val === "number" && !isNaN(val) && val < 0;
}

/**
 * 判断数值是否在某范围之间(包含边界)
 * @param {number} val
 * @returns
 */
export function isBetween(val, min, max) {
  return typeof val === "number" && !isNaN(val) && val >= min && val <= max;
}

/**
 * 判断是否为某个数的倍数
 * @param {number} val
 * @param {*} base
 * @returns
 */
export function isMultipleOf(val, base) {
  return typeof val === "number" && !isNaN(val) && val % base === 0;
}

/**
 * 判断是否为有效邮箱
 * @param {string} val
 * @returns
 */
export function isEmail(val) {
  const emailRegex =
    /^([a-zA-Z]|[0-9])(\w|\-|\.)+@[a-zA-Z0-9\-]+\.([a-zA-Z]{2,4})$/;
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(val);
}

/**
 * 判断是否为手机号码(可自定义区域规则,考虑参数是否增加区域)
 * @param {string} val
 * @returns
 */
export function isPhone(val) {
  const phoneRegex = /^\+?(\d{1,3})?[-. (]?\d{3}[-. )]?\d{3}[-. ]?\d{4,5}$/g;
  return phoneRegex.test(val);
}

/**
 * 手机号码
 * @param {*} s
 */
export function isMobile(val) {
  return /^1[0-9]{10}$/.test(val)
}

/**
 * 是否为中文
 * @param {string} val
 * @returns
 */
export function isChinese(val) {
  const chineseRegex = /^[\u4e00-\u9fa5]+$/;
  return chineseRegex.test(val);
}

/**
 * 是否为英文字母
 * @param {string} val
 * @returns
 */
export function isEnglish(val) {
  const englishRegex = /^[a-zA-Z]+$/;
  return englishRegex.test(val);
}

/**
 * 是否为字母 + 数字组成
 * @param {string} val
 * @returns
 */
export function isAlphaNumeric(val) {
  const alphaNumericRegex = /^[0-9a-zA-Z]+$/;
  return alphaNumericRegex.test(val);
}

/**
 * 是否为全大写
 * @param {string} val
 * @returns
 */
export function isUpperCase(val) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * 是否为全小写
 * @param {string} val
 * @returns
 */
export function isLowerCase(val) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * 是否为强密码(可自定义规则，目前是8位长度+大小写字母+数字+特殊符号)
 * @param {string} val 待校验的密码
 * @param {Object} [options] 自定义规则选项
 * @param {number} [options.minLength=8] 最小长度
 * @param {boolean} [options.requireUppercase=true] 需要大写字母
 * @param {boolean} [options.requireLowercase=true] 需要小写字母
 * @param {boolean} [options.requireNumber=true] 需要数字
 * @param {boolean} [options.requireSpecialChar=true] 需要特殊符号
 * @param {string} [options.specialChars='!@#$%^&*()_+~`|}{[]:;?><,./-='] 特殊符号集合
 * @returns {boolean} 是否符合强密码规则
 */
export function isStrongPassword(val, options = {}) {
  // 合并默认选项和用户选项
  const {
    minLength = 8,
    requireUppercase = true,
    requireLowercase = true,
    requireNumber = true,
    requireSpecialChar = true,
    specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  } = options;

  // 1. 检查长度
  if (val.length < minLength) {
    return false;
  }
  // 2. 检查是否包含大写字母
  if (requireUppercase && !/[A-Z]/.test(val)) {
    return false;
  }
  // 3. 检查是否包含小写字母
  if (requireLowercase && !/[a-z]/.test(val)) {
    return false;
  }
  // 4. 检查是否包含数字
  if (requireNumber && !/[0-9]/.test(val)) {
    return false;
  }
  // 5. 检查是否包含特殊符号
  if (requireSpecialChar) {
    // 转义特殊字符用于正则表达式
    const escapedSpecialChars = specialChars.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );
    const specialRegex = new RegExp(`[${escapedSpecialChars}]`);
    if (!specialRegex.test(val)) {
      return false;
    }
  }
  return true;
}



/**
 * 判断是否为有效 URL
 * @param {string} val 要检查的字符串
 * @param {Object} [options] 配置选项
 * @param {boolean} [options.requireProtocol=true] 是否要求包含协议（如 http://）
 * @param {boolean} [options.allowLocalhost=true] 是否允许 localhost 地址
 * @param {boolean} [options.allowIP=true] 是否允许 IP 地址
 * @param {string[]} [options.allowedProtocols=['http','https','ftp']] 允许的协议列表
 * @returns {boolean} 是否为有效的 URL
 */
export function isURL(val, options = {}) {
  // 合并默认选项
  const {
    requireProtocol = true,
    allowLocalhost = true,
    allowIP = true,
    allowedProtocols = ['http', 'https', 'ftp']
  } = options;
  // 空值检查
  if (typeof val !== 'string' || !val.trim()) return false;
  try {
    // 使用 URL 构造函数解析
    const url = new URL(val);
    // 1. 检查协议
    const protocol = url.protocol.replace(':', '');
    if (!allowedProtocols.includes(protocol)) return false;
    // 2. 检查是否要求协议
    if (requireProtocol && !val.includes('://')) return false;
    // 3. 检查主机名有效性
    const hostname = url.hostname;
    // 允许 localhost
    if (hostname === 'localhost' && allowLocalhost) return true;
    // 允许 IP 地址
    const ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (ipRegex.test(hostname) && allowIP) return true;
    // 4. 检查域名格式
    const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    if (!domainRegex.test(hostname)) return false;
    // 5. 检查特殊字符（空格等）
    if (/[\s<>]/.test(val)) return false;
    return true;
  } catch (e) {
    // 6. 尝试添加协议后验证
    if (!requireProtocol) {
      try {
        const urlWithProtocol = new URL('http://' + val);
        return isURL(urlWithProtocol.href, {
          ...options,
          requireProtocol: true
        });
      } catch (e2) {
        return false;
      }
    }
    return false;
  }
}

export function isValidUrl(val) {
  const urlRegex =
    /^(https?:\/\/)?([\w.]+)\/?([\w\-.]*)\/?(\?[\w=&]*)?(#[\w\-]*)?$/;
  return urlRegex.test(val);
}

/**
 * 判断是否为 IPv4 地址
 * @param {string} val 
 * @returns 
 */
export function isIPv4(val) {
  const ipv4Regex =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return ipv4Regex.test(val);
}

/**
 * 判断是否为 IPv6 地址
 * @param {string} val 
 * @returns 
 */
export function isIPv6(val) {
  const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  return ipv6Regex.test(val);
}

/**
 * 判断是否为域名
 * @param {string} val 
 * @returns 
 */
export function isDomain(val) {
  const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return domainRegex.test(val);
}

/**
 * 判断是否为 MAC 地址
 * @param {string} val 
 * @returns 
 */
export function isMacAddress(val) {
  const macAddressRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
  return macAddressRegex.test(val);
}
