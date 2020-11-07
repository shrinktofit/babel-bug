const babel = require('@babel/core');
const presetEnv = require('@babel/preset-env');
const fs = require('fs-extra');
(async () => {
    const result = await babel.transformFileAsync(String.raw`light.ts`, {
        presets: [
            [presetEnv, {
                modules: 'systemjs',
            }],
            // [require('@cocos/babel-preset-cc')],
            [require('@babel/preset-typescript')],
        ],
        plugins: [
            [require('@babel/plugin-proposal-class-properties')],
        ],
    });
    console.log(result.code);
})();
