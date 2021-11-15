var fs=require("fs");
/*fs.writeFile("Mycode.txt","My code from Nodejs ${'hi chaitanya'}", function(err){
    if(err) throw err;
    console.log('file is created')
})*/
/*fs.appendFile("Mycode.text","This is new line 1",(err)=>{
    if(err) throw err;
    console.log('message is printed')
})*/

fs.readFile(`db.json`,`utf-8`,(err,data)=>{
    if(err) throw err;
    console.log(data)
})

