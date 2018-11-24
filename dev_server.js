const express = require('express');
const { resolve } = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware'); //

const PORT = process.env.PORT || 3000; //enviroment variable (process.env.PORT) if someone gives it to use. otherwise use 3000
const app = express();
const config = require('./webpack.config');
const compiler = webpack(config); //this will build the bundle file. similar to (run npm bundle)

//contentBase is where everything is being ran from.
//publicpath is also dist folder. '/' means same folder?
app.use(webpackDevMiddleware(compiler, {
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true
}))

app.get('*', (req, res)=>{
    res.sendFile(resolve(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, ()=>{
    console.log('\nDev Server Running on PORT:', PORT, '\n');
});
