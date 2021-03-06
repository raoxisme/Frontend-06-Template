学习笔记

## 为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？
first-letter和first-line都作用于块级元
- first-letter:作用于第一行的首字符 --> 一开始就可以确定, 操作布局时性能开销小
- first-line：作用于第一行的所有字符 --> 得等到布局(layout)完成即计算出每个节点的位置之后才能确定, 要对其重新布局排版消耗性能大.
考虑到性能开销, first-letter 可以设置 float 之类的，而 first-line 导致重排的话又会进入新一轮的 layout计算.

## 爬虫W3C的CSS Standard & Draft
Array.prototype.slice.call(document.querySelector("#container").children).filter(e => e.getAttribute("data-tag").match(/css/)).map( e => ({name: e.children[1].innerText, url: e.children[1].children[0].href}))

## CSS选择器
简单选择器  
- *通用选择器  
- div svg|a 类型选择器
- .cls
- #id
- [attr=value]
- :hover
- ::before

复合选择器  
- <简单选择器><简单选择器><简单选择器>  :与关系
- * 或者 div 必须写在最前面            :伪元素最后

复杂选择器  
- <复合选择器><sp><复合选择器> :加空格,表达子孙
- <复合选择器>">"<复合选择器>  :直接子孙
- <复合选择器>"~"<复合选择器>  :邻居
- <复合选择器>"+"<复合选择器>  :
- <复合选择器>"||"<复合选择器> :表字段
逗号是或关系

## 优先级
CSS 优先规则 1： 最近的祖先样式比其他祖先样式优先级高
CSS 优先规则 2："直接样式"比"祖先样式"优先级高。
CSS 优先规则 3：优先级关系：内联样式 > ID 选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 标签选择器 = 伪元素选择器
CSS 优先规则 4：计算选择符中 ID 选择器的个数（a），计算选择符中类选择器、属性选择器以及伪类选择器的个数之和（b），计算选择符中标签选择器和伪元素选择器的个数之和（c）。 
