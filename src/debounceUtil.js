/**
 * 防抖动
 * @param {*} func 函数 触发的方法
 * @param {*} delay 防抖时延，单位为ms
 * @returns
 * 使用:handleInput: debounce(function () {}, 300),
 */
export function debounce(func, delay) {
  let timer = null;
  return function () {
    if (timer) clearTimeout(timer);
    timer = null;
    let self = this;
    let args = arguments;
    timer = setTimeout(() => {
      func.apply(self, args);
    }, delay);
  };
}

/**
 * 节流
 * @param {*} fn 
 * @param {*} delay 
 * @returns 
 */
export function throttle(fn, delay) {
  let timer = null;
  let timeStamp = new Date();
  return function () {
    if (timer) clearTimeout(timer);
    timer = null;
    let context = this; //获取函数所在作用域this
    let args = arguments; //取得传入参数
    if (new Date() - timeStamp > delay) {
      timeStamp = new Date();
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    }
  };
}
