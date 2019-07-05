var fs = require("fs");

fs.readFile("med.json",'utf8',(err,data)=>{

	if(err){
		console.log(err.message)
		}
	
	var wd=''
    // console.log(typeof data)
    for(let w in JSON.parse(data)){
        // console.log(data[w])
        wd = wd+w+'\n'
    }

    // console.log(obj.length)
    
	fs.writeFile("med_uniq.txt",wd,(err)=>{
		if(err){
		console.log(err)}
	})
	console.log(wd.length)
	
});





