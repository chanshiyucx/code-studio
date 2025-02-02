const config = {
  printWidth: 80,
  useTabs: false,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  endOfLine: 'lf',
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  pluginSearchDirs: false,
  importOrder: [
    '<TYPES>',
    '<TYPES>^[.]',
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderParserPlugins: [
    'typescript',
    'jsx',
    'classProperties',
    'decorators-legacy',
  ],
  importOrderTypeScriptVersion: '5.0.0',
  tailwindFunctions: ['clsx'],
}

export default config
