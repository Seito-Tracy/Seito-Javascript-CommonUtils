import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/common-utils.esm.js',
      format: 'esm',        // ES 模块
      sourcemap: true
    },
    {
      file: 'dist/common-utils.umd.js',
      format: 'umd',        // 通用模块
      name: 'CommonUtil',   // 全局变量名
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    terser() // 代码压缩
  ]
};