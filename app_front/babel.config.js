module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "node": "10"
                }
            }
        ]
    ],
    plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-syntax-dynamic-import"
    ]
};