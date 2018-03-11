module.exports = {
  "plugins": [
    "html"
  ],
  "env": {
    "browser": true,
    "node":    false,
    "es6":     true
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2017
  },
  "extends": "eslint:recommended",
  "rules": {
    "indent":                [ "warn", 2        ],
    "linebreak-style":       [ "warn", "unix"   ],
    "no-console":            [ "off", {allow: ["warn", "error"]} ],
    "no-constant-condition": [ "warn", {checkLoops: false}],
    "no-unused-vars":        [ "warn", {vars: "local"} ],
    "quotes":                [ "off",  "double" ],
    "semi":                  [ "warn", "always" ]
  }
};
