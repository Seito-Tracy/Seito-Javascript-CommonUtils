/**
 * 判断字符串 str 是否包含子字符串 substr(区分大小写)
 * @param {*} str 
 * @param {*} substr 
 * @returns 
 */
export function contains(str, substr) {
  return str.includes(substr);
}

/**
 * 忽略大小写地判断是否包含子串
 * @param {*} str 
 * @param {*} substr 
 * @returns 
 */
export function containsIgnoreCase(str, substr) {
  return str.toLowerCase().includes(substr.toLowerCase());
}

/**
 * 判断字符串是否以 prefix 开头
 * @param {*} str 
 * @param {*} prefix 
 * @returns 
 */
export function startsWith(str, prefix) {
  return str.startsWith(prefix);
}

/**
 * 判断字符串是否以 suffix 结尾
 * @param {*} str 
 * @param {*} suffix 
 * @returns 
 */
export function endsWith(str, suffix) {
  return str.endsWith(suffix);
}

/**
 * 判断字符串中是否包含数组中的任意单词(常用于敏感词)
 * @param {*} str 
 * @param {*} words 
 * @returns 
 */
export function containsWords(str, words=[]) {
  return words.some((word) => str.includes(word));
}

/**
 * 判断字符串中是否包含中文字符
 * @param {*} str 
 * @returns 
 */
export function containsChinese(str) {
  const regex = /[\u4e00-\u9fa5]/;
  return regex.test(str);
}

/**
 * 判断字符串中是否包含数字
 * @param {*} str 
 * @returns 
 */
export function containsNumber(str) {
  const regex = /\d/;
  return regex.test(str);
}

/**
 * 判断是否包含特殊字符，如 !@#$%^&*等
 * @param {*} str 
 * @returns 
 */
export function containsSpecialChar(str) {
  const regex = /[^a-zA-Z0-9]/;
  return regex.test(str);
}

/**
 * 改为全大写
 * @param {*} str 
 * @returns 
 */
export function allToUpperCase(str) {
  return str.toUpperCase();
}

/**
 * 改为全小写
 * @param {*} str 
 * @returns 
 */
export function allToLowerCase(str) {
  return str.toLowerCase();
}

/**
 * 首字母大写：将一个字符串的首字母转换为大写，其余字母转换为小写
 * @param {*} str
 * @returns
 */
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * 在前缀补充值直到符合指定长度(例如补0)
 * @param {string} str  需要补充的原始值
 * @param {string} value  例如补0
 * @param {number} length  长度
 * @returns 
 */
export function fillPrefix(str, value, length) {
  return str.padStart(length, value);
}

/**
 * 在后缀补充值直到符合指定长度
 * @param {string} str 
 * @param {string} value 
 * @param {number} length 
 * @returns 
 */
export function fillSuffix(str, value, length) {
  return str.padEnd(length, value);
}

/**
 * 判断是否为空字符串或 null/undefined
 * @param {*} str 
 * @returns 
 */
export function isEmpty(str) {
  return !str || str.trim() === "";
}

/**
 * 判断是否为空或只包含空格字符
 * @param {string} str 
 * @returns 
 */
export function isBlank(str) {
  return !str || str.trim() === "";
}

/**
 * 转为驼峰命名:"hello_world"→"helloWorld"
 * @param {string} str 
 * @returns 
 */
export function toCamelCase(str) {
  return str.replace(/([-_][a-z])/g, ($1) =>
    $1.toUpperCase().replace("-", "").replace("_", "")
  );
}

/**
 * 转为下划线命名:"helloWorld"→"hello_world”
 * @param {*} str 
 * @returns 
 */
export function toSnakeCase(str) {
  return str.replace(/([A-Z])/g, "_$1").toLowerCase();
}

/**
 * 转义 HTML 标签，如 <→ &lt;
 * @param {*} str 
 * @returns 
 */
export function escapeHTML(str) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
  };
  return str.replace(/[&<>"'/]/g, (m) => map[m]);
}

/**
 * 反转 HTML 实体为标签
 * @param {*} str 
 * @returns 
 */
export function unescapeHTML(str) {
  const map = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#x27;": "'",
    "&#x2F;": "/",
  };
  return str.replace(/&(amp|lt|gt|quot|#x27|#x2F);/g, (m) => map[m]);
}

/**
 * 编码为 base64
 * @param {string} str 
 * @returns 
 */
export function base64Encode(str) {
  return btoa(str);
}

/**
 * 解码 base64 字符串
 * @param {*} str 
 * @returns 
 */
export function base64Decode(str) {
  return atob(str);
}

/**
 * 移除换行符(\n、\r)
 * @param {*} str 
 * @returns 
 */
export function removeLineBreaks(str) {
  return str.replace(/\n|\r/g, "");
}

/**
 * 将多个空格压缩为一个空格
 * @param {*} str 
 * @returns 
 */
export function removeExtraSpaces(str) {
  return str.replace(/\s+/g, " ");
}

/**
 * 替换模板字符串，如"Hello {name}'中的 {name}
 * @param {*} str 
 * @param {*} dataObj 
 * @returns 
 */
export function templateReplace(str, dataObj) {
  return str.replace(/\$\{(\w+)\}/g, (match, name) => dataObj[name] || match);
}

/**
 * 输入字符串，转化为true或者false。1,TRUE,true,True,T需要界定为true。
 * @param {*} val 
 * @returns 
 */
export function getBool(val) {
  return val === true || val === "true";
}

/**
 * 清除右边多余的空格，"123   "->"123'
 * @param {*} val 
 * @returns 
 */
export function rtrim(val) {
  return val.replace(/\s+$/, "");
}

/**
 * 清除左边多余的空格，'   123'->'123'
 * @param {*} val 
 * @returns 
 */
export function ltrim(val) {
  return val.replace(/^\s+/, "");
}

/**
 * 反向字符串
 * @param {*} str
 * @returns
 */
export function reverseString(str) {
  return str.split("").reverse().join("");
}