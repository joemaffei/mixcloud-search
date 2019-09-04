module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended"],
  env: {
    browser: true,
    jest: true,
    es6: true
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
