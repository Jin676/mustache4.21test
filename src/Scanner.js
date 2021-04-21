/* 
    扫描器类
*/

export default class Scanner{
    constructor(templateStr){
        this.templateStr = templateStr
        //指针
        this.pos = 0;
        //尾巴，一开始就是模板字符串原文
        this.tail = templateStr;
    }
    // 封装2方法，1、寻找到指定标记，并且把走的字返回并且收集路过的所有文字
    //2、跳过标记
    scan(tag){
        if(this.tail.indexOf(tag) == 0){
            //tag{{有多长就后移多少位
            this.pos += tag.length;
            //尾巴也要移动,从当前标记移动
            this.tail = this.templateStr.substring(this.pos)
        }
    }
    //扫描到{{}}为止,走标记内部跳过标记
    //stopTag是停止的标记
    scanUtil(stopTag){
        //记录执行笨方法pos的值,在循环外部写，否则值pos固定
        const pos_backup = this.pos; //0 8 xx 跳过了{{在scan中加过了
        //indexOf返回下标为0，则是代表找到了，并且index为0
        //stopTag可以看成{
                                            //this.pos < this.templateStr.length不加容易死循环，防止找不到最后死循环
        while(!this.eos() && this.tail.indexOf(stopTag) != 0 ){    
                this.pos++;
                //tail不变永远不能满足，因此tail要变化
                //substr抽取指定下标的字符串
                //substr从this.pos截取到最后，赋值给tail
                this.tail = this.templateStr.substr(this.pos);//传入的是number,截取的是pos(包括pos)后面的所有字符串
            }
            //返回的是：  pos_backup是{{后或者前的起始位置  
            return this.templateStr.substring(pos_backup,this.pos)
    }

    //指针到头了吗返回布尔值
    eos(){
        return this.pos >= this.templateStr.length
    }
}