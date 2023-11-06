
const { resolveAny } = require('dns');
const http = require('http');

http.createServer( ( req, res )=> {

    // res.writeHead(200, { 'Content-Type': 'text/plain'});



    res.write('Hola Mundo');
    res.end();

})
.listen( 8080 );

console.log('Chacho es trolo', 8080);
