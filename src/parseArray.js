import lookup from "./lookup"
import renderTemplate from "./renderTemaplate"
/* 
    处理数组，结合renderTemplate实现递归
    token["#",student,Array]
    递归rendertmp函数，调用次数由data决定
     students:[
                {"name":"小米","hobbies":["游泳","健身"]},
                {"name":"小红","hobbies":["足球","篮球","羽毛球"]},
                {"name":"小的","hobbies":["吃饭","睡觉"]},
            ]
        需要递归3次，数组长度为3 ，而不是看token数组的长度
*/

export default function parseArray(token , data){
    //1、拿到data
    //lookup查对象的属性，到没有为止
    //token[1]是studend和itemxxx，读取与data中一样的对象，取出数组
    var v = lookup(data,token[1])   

    //交给render的resultStr连接在一起
    var resultStr = "";
    //遍历v数组,不做后面是布尔值的情况
    
    for (let index = 0; index < v.length; index++) {
        //递归renderTemplate，触发这个函数,v[index]是一行当前一次渲染的数据，都是独立渲染的数据，而不是整体三次
        //这里要补充一个"."属性,替换成当前项

        //非常要注意.属性和...拆数组对应的index
         resultStr += renderTemplate(token[2],{
             //这个小对象是v[index]的展开,填加.属性，并且拆包v[index]
             ...v[index],
             //补充.属性
             ".":v[index],
         })
        
    }
     console.log(resultStr)
     return resultStr
}