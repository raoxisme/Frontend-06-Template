### 分行（准备数据）
根据主轴尺寸，把元素进行分行
若设置了no-wrap，则强行分配进第一行

### 计算主轴（计算位置）
找到所有flex元素（只支持flex）
把主轴方向的剩余尺寸按比例分配给这些元素
若剩余空间为负数，所有flex元素为0，等比压缩剩余元素

### 计算交叉轴（计算位置）
根据每一行中最大元素尺寸计算行高
根据行高flex-align和item-align，确定元素具体位置

#### 绘制单个元素（利用images库绘制）
使用npm的images包，绘制在一个viewport上
与绘制相关的属性：background-color、border、background-image 等等

### 绘制dom（利用images库绘制）  
递归调用子元素的绘制方法完成Dom树的绘制
实际浏览器中，文字绘制是难点，需要字体库；还会对一些图层做compositing