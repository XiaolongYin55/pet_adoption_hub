module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "vue/multi-word-component-names": "off",
    'vue/comment-directive': 'off', // 关闭不必要的注释规则报错
    'no-unused-vars': 'off',        // 可选：关闭未使用变量的警告
    'no-undef': 'off'               // 可选：关闭未定义变量的报错（适合 setup script）
  }
};
