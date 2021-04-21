## mustache和tokens
    tokens：将字符串拼合成数组

## 尾巴和指针
   
## 实现tokens (tokens在js中数组形式展示模板字符串)
    tokens=[] ，scanUtil返回值字符串以数组形式push
    调用scanner.scanUtil和scan
    1、创建一个work将字符串返回值赋值给work
    2、scanUtil{{ 判断work != ""， tokens.push(['text',words])
    3、scanUtil}} 判断work != ""， tokens.push(['name',words])  
    4、进一步判断work[0]=== “#”,“\”的情况 tokens.push(["#",words.substring(1)])//words.substring(1)从1开始push到最后
    return tokens

    遗留问题：token没有嵌套
## tokens嵌套    
    # - /之间的内容放到一个大数组中当做大数组的子项
    1、遍历传入的tokens
    2、创建一个数组sections=[]收集，switch循环判断三种情况(#、/、default)下的sections的入栈、出栈
    3、入栈后下面的所有项要成为入栈项的下面元素
    4、创建收集器，收集token数据到栈和最终数据中，
    坑： 收集器 = token[2]= []
    5、弹出时候：收集器 =如果栈还由数据= 栈顶数据   数据弹完了： 收集器=最终数据 
## 模板字符串和data结合
    1、创建一个str="" 串联数据
    2、传入tokens和data
    3、tokens遍历token[0]为text时候 resultStr += token[1]，tokens遍历token[0]为name时候 resultStr += lookup(data,token[1])
  //坑：如果对象嵌套a.b.c的形式data[token]中括号形式解决不了，需要封装lookup一下    
### 封装lookup，处理数据字符串'a.b.c'类型和a[b]，这两种
    1、lookup(data数据,字符串"属性"),字符串属性和data中属性要有对上的value
## 封装递归函数
    遇到#时候递归处理
    1、传入token和data
    2、处理下token和data，v=lookup(data,token[1])
    3、遍历数组，resultStr+=拼值
    4、注意:"."和v[index]需要循环递归，{".":v[index],...v[index]}，少一个会报错