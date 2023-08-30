const fs = require("fs");
const http = require("http");

const mysServer = http.createServer((req,res) =>{


    if(req.url=="/"){
        let data = fs.readFileSync('home.html','utf8')
         res.end(data)
         }
         else if(req.url=="/Contract") {
          let data = fs.readFileSync('contract.html','utf8');
          res.end(data);
         }
         else if(req.url=="/About"){
             let data = fs.readFileSync('about.html','utf8');
             res.end(data);
         }


   //   Que 7 --------- File Write Aych---------------
     if(req.url=="/file-write"){
  
     fs.writeFile("demo.txt","hello world",(error) =>{
     if(error){
        res.writeHead(200,{'content-type':'text/html'});
         res.write("file write fail");
              res.end();
     }
    else{
        res.writeHead(200,{'content-type':'text/html'});
         res.write("file write success");
          res.end();
    }
     });
     }
    
 
});

mysServer.listen(3000,()=>{
    console.log("Sever is running on port 3000");
});