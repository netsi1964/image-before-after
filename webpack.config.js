const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /src\/.+\.html/,
                exclude: /node_modules/,
                loader: 'html-loader'
            },
            {
                test: /css$/i,
                use: [
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                    },
                  }
                ],
              }
        ]
    },
   
};