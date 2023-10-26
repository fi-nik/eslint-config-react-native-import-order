# eslint-config-react-native-import-order
Eslint config used for customizing import order in react native projects

In order to use this config, eslnt needs to extend it like:

module.exports = {
  root: true,
  extends: [..., '@fi-nik/eslint-config-react-native-import-order'],
  ...
};
