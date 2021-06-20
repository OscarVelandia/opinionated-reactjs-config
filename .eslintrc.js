module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'prettier',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/typescript',
    'plugin:prettier/recommended', // Make sure this is always the last configuration in the extends array. This will display prettier errors as ESLint errors.
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'import/prefer-default-export': 'off',
    // Necessary to work with Redux toolkit (because it use Immer)
    'no-param-reassign': ['error', { props: false }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // Necessary to work with TS
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    // Is better set default props in props destructuring because are visible when hover component with ctrl
    'react/require-default-props': 'off',
    // Gives errors incorrectly because components are imported in an index to use resolvers
    'import/no-cycle': 'off',
    // This project doesn't use prop-types
    'react/prop-types': 'off',
    // Redux reducers doesn't need return and this rule expect always a return
    'consistent-return': 'off',
    // has conflict with the typescript same rule
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    // Personal preferences
    'import/extensions': 'off',
    // Use the typescript rule instead of no-use-before-define to fix bug with React import
    'no-use-before-define': 'off',
    // Use "function" instead of "arrow function expression" when the invocation is before the function definition
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: {}, // this loads <rootDir>/tsconfig.json to eslint
    },
  },
};
