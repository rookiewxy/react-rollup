/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2022-06-29 17:11:11
 * @LastEditors: wxy
 * @LastEditTime: 2022-06-29 17:11:17
 */
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'

// babel配置
const babelOptions = {
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  exclude: "**/node_modules/**"
}

export default {
    input: './src/index',
    output: [
      {
        dir: 'dist',
        format: 'cjs', // 通过esm格式输出
      }
    ],
    plugins:[
      postcss({
        plugins: []
      }),
      babel(babelOptions)
    ]
  }