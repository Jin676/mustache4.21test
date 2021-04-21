/* 
函数的功能让tokens变成dom字符串
*/
import lookup from "./lookup"
import parseArray from "./parseArray"
export default function renderTemplate(tokens,data){
    
    var resultStr = "";
    // 遍历tokens
    for (let index = 0; index < tokens.length; index++) {
        const token = tokens[index];
        
        //看类型
        if(token[0] == "text"){
            //结果字符串
            resultStr += token[1]
         }else if(token[0] == "name"){
             //坑：如果对象嵌套a.b.c的形式data[token]中括号形式解决不了，需要封装lookup一下
            resultStr += lookup(data,token[1])
         } else if (token[0] == "#"){
            resultStr +=parseArray(token,data)
         }
        }
        console.log(resultStr)
    // console.log(resultStr)
    return resultStr
}