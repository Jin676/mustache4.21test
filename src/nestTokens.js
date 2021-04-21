// 函数的功能折叠tokens, 将#和/之间的tokens整合起来，作为他的下标为3的项
export default function nestTokens(tokens) {

    //将tokens传进来进行处理，在返回处理好的折叠后的数组
    var nestedTokens = []

    //栈的结构，栈顶(靠近端口的，最新进入的)的tokens数组中当前操作的tokens小数组
    var sections = [];
    
    //收集器指向变化，遇到#，收集器收集完毕后，指向#的栈顶的下表为2的数组
    var collector = nestedTokens;

    //第一步进行遍历，判断开头#
    for (let index = 0; index < tokens.length; index++) {
        //获取每一项 token还是数组
        let token = tokens[index]
        switch (token[0]) {
            case "#":
                collector.push(token);
                sections.push(token);
                
                //收集器换人,收集器变成栈顶的数据，跟nestedTokens切断关系
                //sections:[1,2 collector[token]],然后停止等着弹出,default中一直往collector中一直存数据
                //第二次进来时候，collector[token]中又添加了第二次压栈的内容
               
                collector = token[2] = []
                break;
            case "/":
                //出栈,section_pop弹出来的是加工好的数组
                
                let section_pop =  sections.pop()
         
                //改变收集器为栈顶，索引为2的数组
                //如果没有数据，nestedTokens赋值给collector，如果有数据栈顶数据给他
                //如果有东西肯定是栈顶那一项，没有则是nestedTokens,最终指向nestedTokens

                // console.log(nestedTokens)
                collector = sections.length>0?sections[sections.length-1][2]:nestedTokens
                break;
            default:
                //没有碰到##//的数据push到收集器中
                collector.push(token)
        }
    }

    return nestedTokens
}