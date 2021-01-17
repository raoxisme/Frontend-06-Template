## DTD与XML namespace
### XML与SGML
- http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd
- http://www.w3.org/1999/xhtml   
任何人不得在访问网页的时候访问DTD（虽然是个url，但是禁止访问。不然网站要瘫痪了）   
&nbsp; 不建议使用，破坏了语义。如果有空格的需求，通过CSS的white-space属性控制   

重要转义符：
- quot 是双引号
- amp 是&符
- lt 是小于号
- gt 是大于号

## 合法元素
- Elemenet: <tagname>...</tagname>
- Text: text
- Comment: <!-- comments -->
- DocumentType: <!Doctype html
- ProcessingInstruction: <?a 1?>
- CDATA: <![CDATA[]]

## 浏览器API
### DOM API
- traversal系列，不建议用
- 节点
    Document：文档根节点   
    DocumentFragment：文档片段   
    DocumentType:文档类型   
    Element：元素型节点    
    CharacterData：字符    
- 导航类操作   
    parentNode , parentElement,  childNodes , children   
    firstChild ,firstElementChild ,  lastChild, lastElementChild   
    nextSibling ,nextElementSibling,  previousSibling, previousElementSibling   
- 操作   
    appendChild,  insertBefore,  removeChild, replaceChild   
- 高级操作   
    compareDocumentPosition: 比较两个节点中关系的函数   
    contains: 检查一个节点是否包含另一个节点的函数   
    isEqualNode: 检查两个节点是否完全相同   
    isSameNode :检查两个节点是否是同一个节点，实际上在JavaScript 中可以用“===”   
    cloneNode: 复制一个节点，如果传入参数true，则会连同子元素做深拷贝   
- Event：冒泡与捕获   

### Range API： var range = new Range()
### CSSOM： document.styleSheets