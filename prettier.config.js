module.exports = {
    semi: false,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
    useTabs: false,
    overrides: [
        {
            files: '*.md',
            options: {
                printWidth: 70,
                useTabs: false,
                trailingComma: 'none',
                proseWrap: 'never',
            },
        },
    ],
}
