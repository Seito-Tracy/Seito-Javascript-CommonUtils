/**
 *arrayUtils.js 数组工具
 */

/**
 * 判断数组是否为空数组
 * @param {*} arr
 */
export function isEmpty(arr) {
  return Array.isArray(arr) && arr.length === 0;
}

/**
 * deep copy 一个数组
 * @param {*} arr
 * @returns
 */
export function clone(arr) {
  return JSON.parse(JSON.stringify(arr));
}

/**
 * 手动过滤掉数组的 null/undefined，无效值
 * @param {*} arr
 * @returns
 */
export function compact(arr) {
  return (arr || []).filter(Boolean);
}

/**
 * 将数组按照大小拆分成若干段
 * @param {*} arr
 * @param {*} size
 * @returns
 */
export function chunk(arr, size) {
  if (!arr || size <= 0) return [];
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

/**
 * 将对象数组转换为指定字段的值组成的新数组(如提取 id)
 * @param {*} arr
 * @param {*} key
 * @returns
 */
export function mapBy(arr, key) {
  return (arr || []).map((item) => item[key]);
}

/**
 * 按 key 匹配找到对象:手动写 arr.find(x => x[key] === val)
 * @param {*} arr
 * @param {*} key
 * @param {*} val
 * @returns
 */
export function findBy(arr, key, val) {
  return (arr || []).find((item) => item[key] === val);
}

/**
 * 查找对象在数组中的素引:手动写 arr,find(x => x[key]=== val)
 * @param {*} arr
 * @param {*} key
 * @param {*} val
 * @returns
 */
export function indexOfKey(arr, key, val) {
  const index = (arr || []).findIndex((item) => item[key] === val);
  return index !== -1 ? index : null;
}

/**
 * 判断数组中是否存在某个对象(按 key 对比)
 * @param {*} arr
 * @param {*} obj
 * @param {*} key
 * @returns
 */
export function containsObject(arr, obj, key) {
  return (arr || []).some((item) => item[key] === obj[key]);
}

/**
 * 获取数组长度，确保null 安全不报错。
 * @param {*} arr
 * @returns
 */
export function count(arr) {
  return arr ? arr.length : 0;
}

/**
 * 统计数组中每个 key 值出现的次数
 * @param {*} arr
 * @param {*} key
 * @returns
 */
export function countBy(arr, key) {
  return arr.reduce((counts, item) => {
    if (!counts[item[key]]) {
      counts[item[key]] = 0;
    }
    counts[item[key]] += 1;
    return counts;
  }, {});
}

/**
 * 统计数组中某个key的总和
 * @param {*} arr
 * @param {*} key
 * @returns
 */
export function sum(arr, key) {
  return (arr || []).reduce((total, item) => {
    const value = parseFloat(item[key]);
    return total + (isNaN(value) ? 0 : value);
  }, 0);
}

/**
 * 统计数组中某个key的均值
 * @param {*} arr
 * @param {*} key
 * @returns
 */
export function average(arr, key) {
  const total = sum(arr, key);
  return total / count(arr);
}

/**
 * 移除某个index的元素（不修改原数组）
 * @param {*} arr
 * @param {*} index
 * @returns
 */
export function removeAt(arr, index) {
  return arr.filter((item, idx) => idx !== index);
}

/**
 * 移除某个index的元素（修改原数组）
 * @param {*} arr
 * @param {*} index
 * @returns
 */
export function removeAtNewArr(arr, index) {
  arr.splice(index,1)
  return arr;
}

/**
 * 移除=某个值的元素
 * @param {*} arr
 * @param {*} val
 * @returns
 */
export function removeValue(arr, val) {
  return arr.filter((item) => item !== val);
}

/**
 * 移除key=某个值的元素
 * @param {*} arr
 * @param {*} key
 * @param {*} val
 * @returns
 */
export function removeByKey(arr, key, val) {
  return arr.filter((item) => item[key] !== val);
}

/**
 * 在某个地方插入val元素
 * @param {*} arr
 * @param {*} index
 * @param {*} val
 * @returns
 */
export function insertAt(arr, index, val) {
  if (!arr) return;
  const newArr = JSON.parse(JSON.stringify(arr));
  newArr.splice(index, 0, val);
  return newArr;
}

/**
 * 替代index为val元素（不修改原数组）
 * @param {*} arr
 * @param {*} index
 * @param {*} val
 * @returns
 */
export function replaceAt(arr, index, val) {
  if (!arr || index >= arr.length || index < 0) {
    return;
  }
  return [...arr.slice(0, index), val, ...arr.slice(index + 1)];
}

/**
 * 替换指定位置的元素（修改原数组）
 * @param {Array} arr
 * @param {number} index
 * @param {*} val
 * @returns {*} 被替换的元素
 */
export function replaceAtNew(arr, index, val) {
  if (!arr || index < 0 || index >= arr.length) return;
  arr[index] = val;
  return arr;
}

/**
 * 找出arr1,arr2中不相同的元素，返回不相同的元素数组
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
export function diff(arr1, arr2) {
  const newArr = [];
  arr1.forEach((item) => {
    if (!arr2.includes(item)) {
      newArr.push(item);
    }
  });
  arr2.forEach((item) => {
    if (!arr1.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
}
