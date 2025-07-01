/**
 * 是否开发环境(通常读取 process.env.NODE_ENV ==='development')
 */
export function isDev() {
  return process.env.NODE_ENV === "development";
}

/**
 * 是否生产环境(通常读取 process.env.NODE_ENV ==='production')
 */
export function isProd() {
  return process.env.NODE_ENV === "production";
}

/**
 * 获取当前环境(返回'development')
 */
export function getEnv() {
  return process.env.NODE_ENV || "development";
}

/**
 * 是否运行在 Web 浏览器中
 */
export function isWeb() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

/**
 * 是否为移动端(i0S/Android/小程序等)
 */
export function isMobile() {
  // React Native环境
  if (isReactNative()) return true;
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  // 常见的移动端设备User-Agent关键字
  const mobileRegex =
    /android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptopol|mini|mobi|palm|phone|iPhone|iPad|iPod|pie|tablet|up\sPHONE|up\.browser/i;
  // 判断User-Agent是否包含上述关键字
  return mobileRegex.test(userAgent);
}

/**
 * 是否为 React Native 环境(通过全局变量判断)
 */
export function isReactNative() {
  try {
    // 检测标准 React Native 环境
    if (typeof navigator !== 'undefined' && navigator.product === "ReactNative") {
      return true;
    }
    // 检测 React DevTools 扩展
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
      return true;
    }
    // 安全检测 React Native 的全局桥接对象
    if (typeof global !== "undefined" && global.__fbBatchedBridge) {
      return true;
    }
    // 检测 Hermes 引擎（React Native 的默认引擎）
    if (typeof global?.HermesInternal === 'object') {
      return true;
    }
    // 检测 React Native 特有的原生模块代理
    if (typeof global?.nativeModuleProxy?.nativeFlushQueueImmediate === 'function') {
      return true;
    }
  } catch (e) {
    // 忽略所有错误，安全返回 false
    return false;
  }
  return false;
}

/**
 * 是否为 Vue 项目 (通过 Vue 构造函数或环境判断)
 */
export function isVue() {
  try {
    // Vue 2.x
    if (typeof Vue !== "undefined") return true;
    // Vue 3.x
    if (typeof window !== "undefined" && window && window.__VUE__) return true;
    // 通过模块系统检查
    if (typeof require !== "undefined") {
      try {
        const vue = require("vue");
        return !!vue.version;
      } catch (e) {
        return false;
      }
    }
  } catch (e) {
    return false;
  }
  return false;
}
