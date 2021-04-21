import Scanner from './Scanner'
import nestTokens from "./nestTokens"

export default function parseTemplateTokens(templateStr) {
    var tokens = [];

    //创建扫描器
    var scanner = new Scanner(templateStr);
    //扫描器工作
    var words
    while (!scanner.eos()) {
        //收集开始标记之前的所有文字
        words = scanner.scanUtil("{{")
        if (words != "") {//因为空字符串也会返回scanner，因此判断是否为空
            //智能判断去掉空格
            //标签中空格保留
            let isInJJH = false; //isInJJH：true在标签内，false为不在
            var _words = "";
            for (let i = 0; i < words.length; i++) {
                //判断是否在标签里
                if (words[i] == "<") {
                    isInJJH = true
                } else if (words[i] == ">") {
                    isInJJH = false
                }
                //如果不是空格斌接上
                if (!/\s/.test(words[i])) {
                    _words += words[i]

                } else {
                    if (isInJJH) {
                        //是空格情况,只有不在标签内，拼接上
                        //这里要空格" "，而不是空""
                        _words += " ";
                    }

                }

            }
            console.log(_words)
            //放入数组中的第一次0-{{的字符
            tokens.push(['text', _words.replace()])
        }
        scanner.scan("{{")
        words = scanner.scanUtil("}}")
        //收集标记中出现的文字
        if (words != "") {
            //标记中间的内容,判断首字符
            if (words[0] == "#") {
                //放入数组中三类#、/、text 将text文芬分类放入数组

                //存起来,从下标为1开始存
                tokens.push(["#", words.substring(1)])
            } else if (words[0] == "/") {
                tokens.push(["/", words.substring(1)])
            } else {
                tokens.push(["name", words])
            }
        }
        scanner.scan("}}")
    }

    return nestTokens(tokens)
}