
四则混合运算语法树LL分析
<AdditiveExpression> ::= 
<Number>
|<MultiplicativeExpression><*><Number>
|<MultiplicativeExpression></><Number>
|<AdditiveExpression><+><MultiplicativeExpression>
|<AdditiveExpression><-><MultiplicativeExpression>

主要思想：从左往右，不断识别并折叠，最后汇总到根节点