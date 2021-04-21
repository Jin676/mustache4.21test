const path = require("path");

module.exports = {
    mode:"development", //开发模式
    entry:"./src/index.js",
    output:{
        filename: "bundle.js"
        //publicPath这里也可以写，publicPath是打包路径，output是输出的文件
    },
    devServer: {
        //www根目录
        contentBase: path.join(__dirname,"www"),
        //不压缩
        compress:false,
        port:8080,
        // 虚拟打包路径，因此bundle.js文件并没有真正的生成
        publicPath:"/xuni/"
    }
}