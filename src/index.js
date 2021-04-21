import Scanner from "./Scanner"
import parseTemplateTokens from "./parseTemplateTokens"
import renderTemaplate from "./renderTemaplate" 
window.TemplateEngine = {
    // 渲染方法
    render(templateStr, data) {
        //调用parseTemplateTokens让模板字符串，变为tokens数组
      var tokens =  parseTemplateTokens(templateStr)
        //调用renderTemaplate函数，让tokens数组变为dom字符串
        var domStr = renderTemaplate(tokens,data)

        return domStr    
    }
}