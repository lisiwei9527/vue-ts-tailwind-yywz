/* eslint-env node */
require('@rushstack/eslint-  patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
    // 若项目不支持ts,就把下一行注释掉
    '@vue/eslint-config-typescript/recommended'
  ],
  env: {
    'vue/setup-compiler-macros': true
  },
  rules: {
     'prettier/prettier':[
      'warn',
      {
        singleQuote:true,     //使用单引号
        semi: false,          //结尾不使用分号
        printWidth:80,        //宽度80字符
        trailingComma:'none', //不加对象|数组最后逗号
        endOfLine:'auto'      //换行符号不限制(win mac不一致)
      }
    ],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index']      //忽略index.vue文件的命名规范,因为.vue文件要求驼峰命名
      }
    ],
    // 支持对 Props 解构
    'vue/no-setup-props-destructure': ['off'],
    'vue/no-mutating-props': ['off']
  }
}