//npm install consistent-hashing
//npm install mathjs

var ConsistentHashing = require('consistent-hashing');
var cons = new ConsistentHashing(["node1", "node2", "node3", "node4", "node5", "node6", "node7", "node8", "node9", "node10"]);

var nodes = {};

//生成随机字符串
function randomString(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNOPQRSTWXYZabcdefhijkmnoprstwxyz01223456789';   
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

//插入到节点
const TOTAL_VALUE = 10000 * 100;
for (let i = 0; i < TOTAL_VALUE; i++) {
    key_c = randomString(32)
    // console.log( key_c )
    
    var node = cons.getNode(key_c);

    if (nodes[node]) {
        nodes[node].push(key_c);
    } else {
        nodes[node] = [];
        nodes[node].push(key_c);
    }
}

//统计KV 数据在服务器上分布数量的标准差，以评估算法的存储负载不均衡性
distribution = []
for (let i = 1; i <= 10 ; i++) {
    // console.log( nodes['node' + i].length  );
    distribution.push(nodes['node' + i].length )
}

var math = require('mathjs');
console.log('std:', math.std( distribution )   )
console.log('variance:', math.variance( distribution )   )
console.log('mean:',math.mean( distribution )   )

