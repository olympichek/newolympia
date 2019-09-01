module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "entry",
                "targets": "> 2%, not dead",
                "corejs": 3
            }
        ]
    ],
    plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-syntax-dynamic-import"
    ]
};