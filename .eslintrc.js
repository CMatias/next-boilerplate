module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  "plugins": [
    "react",
    "react-hooks"
  ],
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "linebreak-style": ["error", "unix"],
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off", // TODO: Remove this
    "no-unused-vars": "warn",
    "comma-dangle": ["error", "never"],
    "no-debugger": "error",
    "prettier/prettier": [
      "error", {
        "semi": true,
        "singleQuote": true,
        "trailingComma": "none",
        "tabs": false
    }]
  }
};
