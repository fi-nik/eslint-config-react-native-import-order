module.exports = {
  plugins: ["simple-import-sort", "unused-imports"],
  rules: {
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // `react` related packages come first, internal packages, side effect imports, parent imports, put '..' last, other relative imports, put same-folder imports and '.' last
          [
            "^\\u0000",
            "^react$",
            "^react-native$|^react-native/.*",
            "(^react).+",
            "^@?\\w",
            "^(domains)(/.*|$)",
            "^(shared)(/.*|$)",
            "^\\.\\./?",
            "^./(?=.\\*/)(?!/?$)",
            "^.(?!/?$)",
            "^./?$",
            "styles$",
          ],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
  },
};
