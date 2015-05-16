var http= require('http');
var fs= require('fs');


//404 Responce
function sentOnResponce(response){
    response.writeHead(200,{"Context-Type":"text/plain"});
    response.write("WebPage NOT Found");
    response.end();

}
//User Request
function onRequest(request,response){
    if( request.method == 'GET' && request.url=='/'){
        console.log('Request Made');
        response.writeHead(200,{"Context-Type":"text/html"});
        fs.createReadStream("./public/stylesheets/index.html").pipe(response);

    }else{
        sentOnResponce(response);
    }
}

http.createServer(onRequest).listen(8080);
console.log('Server is running');