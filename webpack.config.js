const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack');
const exec = require('child_process').exec;

const routeApp = './src';

module.exports = () => {
    return {
        entry: {
            index: `${routeApp}/main.ts`
        },
        output: {
            path: path.resolve(__dirname, 'www'),
            filename: 'bundle.js',
        },
        module: {
            rules: [{
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: '/node_modules/'
            },
            ]
        },
        devServer: {
            contentBase: path.resolve(__dirname, `./${routeApp}`),
            port: 4300,
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: `${routeApp}/index.html`
            }),
            new CopyWebpackPlugin([{
                    from: `${routeApp}/manifest.json`,
                    to: 'manifest.json'
                }
            ]),
            {
                apply: (compiler) => {
                    compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
                        exec('npx cap sync', (err, stdout, stderr) => {
                            if (stdout) process.stdout.write(stdout);
                            if (stderr) process.stderr.write(stderr);
                        });
                    });
                }
            }
        ]
    };
}