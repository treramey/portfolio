/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
	arrowParens: "always",
	printWidth: 100,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: "all",

	importOrder: [
		"^server-only|client-only$",
		"^react$",
		"^next(/.*)?$",
		"<THIRD_PARTY_MODULES>",
		"^@/components/(.*)$",
		"^@/(.*)$",
		"^[./]",
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	//importOrderMergeDuplicateImports: true,
	//importOrderCombineTypeAndValueImports: true,

	plugins: [
		"@trivago/prettier-plugin-sort-imports",
		"prettier-plugin-tailwindcss",
	],
};

export default config;
