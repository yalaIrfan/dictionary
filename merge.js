var fs = require("fs");



fs.readFile("english3.txt",'utf8',(err,allwords)=>{
	if(err){
		console.log("1",err.message);
        }
    fs.readFile("usa2.txt","utf8",(err,uswords)=>{
        if(err){
            console.log("2",err.message);
        }
        fs.readFile("ukenglish.txt","utf8",(err,ukwords)=>{
            if(err){
                console.log("3",err.message);
            }
            let obj = {}
            allwo=allwords+'\n'+uswords+'\n'+ukwords
        	var all=allwords.split('\n')
        	var us=uswords.split('\n')
            var uk=ukwords.split('\n')
            var allwomm=allwo.split('\n')
            
            console.log(all.length,us.length,uk.length)

            // all.forEach((val)=>{
            //     let key = val.toLowerCase();
            //     obj[val] = val
            // })
            // us.forEach((val)=>{
            //     let key = val.toLowerCase();
            //     obj[val] = val
            // })
            // uk.forEach((val)=>{
            //     let key = val.toLowerCase();
            //     obj[val] = val
            // })

            allwomm.forEach((val)=>{
                let key = val.toLowerCase();
                obj[val] = val
            })
            // console.log(JSON.stringify(obj))
            fs.writeFile("allwo.json",JSON.stringify(obj,undefined,1),(err)=>{
                if(err){
                    console.log(err.message)
                }
            });
        });
    });
});