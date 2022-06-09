const webpackNodeExternals = require('webpack-node-externals');

require('@steroidsjs/webpack').config({
    port: 9991,
    // serverPath: using default value - node_modules/@steroidsjs/ssr/index.ts
    // applicationPath: using default value - src/Application.tsx
    // initActionPath: using default value - src/shared/Layout/Layout.tsx
    ssr: {
        externals: [
            webpackNodeExternals({
                allowlist: [/\.(?!(?:tsx?|jsx?|json)$).{1,5}$/i, /^lodash/, /^@steroidsjs/],
            })
        ],
        module: {
            rules: {
                ts: {
                    exclude: /\.\/node_modules\/(?!steroidsjs\/core\/).*/,
                },
            },
        },
    },
});
