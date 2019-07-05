var fs = require("fs");

fs.readFile("en_GB.txt",'utf8',(err,data)=>{

	if(err){
		console.log(err.message)
		}
	
	var wd=[]

	obj ={}

	var wa=data.split('\n')
	console.log(wa.length)

	wa.forEach((val)=>{
		let key = val.toLowerCase();
		// wd.push({key:val.toLowerCase()})
		obj[val] = val.toLowerCase()
	})

	// console.log(obj.length)
	fs.writeFile("en_GB.json",JSON.stringify(obj,undefined,1),(err)=>{
		if(err){
		console.log(err)}
	})
	console.log(data.length)
	
});





