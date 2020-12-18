const http = require('http')

http.createServer((request, response) => {
    let body = []

    request.on('error', error => {
        console.error(error)

    }).on('data', chunk => {
        console.log(chunk)
        body.push(chunk.toString())//chunk原来Buffer类型

    }).on('end', () => {
        
        body = (Buffer.concat([ Buffer.from(body.toString()) ])).toString();
        console.log("body:", body);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(" Hello World\n");
    })
}).listen(8088)

console.log('server started');