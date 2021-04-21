export default function lookup(dataObj, keyName) {
    //功能可以在dataObj对象中，用点符号keyName属性
    // console.log(dataObj,keyName)

    //1、判断keyName中有没有.，但是又不能是“.”本身,单独的点没有对应的值
    //要的是"a.b.c"，而不是"."
    if (keyName.indexOf(".") != -1 && keyName != ".") {
        //如果是.本身，拆的就是空数组
        let keys = keyName.split(".")
        let tmp = dataObj
        let result = keys.reduce((pre,item, index) => {
            pre = pre[item]
            return pre
        },tmp)
        return result
    }
    return dataObj[keyName]
}