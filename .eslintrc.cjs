module.exports = {
	env: {
		es2022: true,
		node: true
	},
	extends: 'standard-with-typescript',
	overrides: [
		{
			env: {
				node: true
			},
			files: [
				'.eslintrc.{js,cjs}'
			],
			parserOptions: {
				sourceType: 'script'
			}
		}
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksVoidReturn: false
			}
		],
		'@typescript-eslint/naming-convention': 'warn',
		'@typescript-eslint/space-before-function-paren': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'warn',
		'@typescript-eslint/prefer-nullish-coalescing': 'error',
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/explicit-function-return-type': 'warn',
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_'
			}
		],
		indent: [
			'warn',
			'tab'
		],
		quotes: [
			'warn',
			'single'
		],
		'space-before-function-paren': 'off',
		'no-useless-constructor': 'off',
		'no-unused-vars': 'warn',
		'no-use-before-define': 'off',
		'no-tabs': 'off'
	}
}
