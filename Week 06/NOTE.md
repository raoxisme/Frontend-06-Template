## 学习笔记
产生式： 在计算机中指 Tiger 编译器将源程序经过词法分析（Lexical Analysis）和语法分析（Syntax Analysis）后得到的一系列符合文法规则（Backus-Naur Form，BNF）的语句

巴科斯诺尔范式：即巴科斯范式（英语：Backus Normal Form，缩写为 BNF）是一种用于表示上下文无关文法的语言，上下文无关文法描述了一类形式语言。它是由约翰·巴科斯（John Backus）和彼得·诺尔（Peter Naur）首先引入的用来描述计算机语言语法的符号集。

终结符： 最终在代码中出现的字符（ https://zh.wikipedia.org/wiki/ 終結符與非終結符)

## 练习：BNF表示带括号的四则混合运算
<Expression> ::=
<AdditiveExpression><EOF>

<AdditiveExpression> ::= 
<MultiplicativeExpression>
|<AdditiveExpression>"+"<MultiplicativeExpression>
|<AdditiveExpression>"-"<MultiplicativeExpression>
|<AdditiveExpression>"+"<BracketExpression>
|<AdditiveExpression>"-"<BracketExpression>

<MultiplicativeExpression> ::= 
<Number>
|<MultiplicativeExpression><*><Number>
|<MultiplicativeExpression></><Number>
|<MultiplicativeExpression><*><BracketExpression>
|<MultiplicativeExpression></><BracketExpression>

<BracketExpression> ::=  
<Number>|"("<AdditiveExpression>")"

