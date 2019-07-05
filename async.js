console.log("Before",d)

var addAsync = (a,b)=>{

    setTimeout(()=>{
        return (a+b);
    },1000)

    
};


async function add(){
    let a = await addAsync(2,3);
    console.log(a);
}


console.log("After")

add()
var d=33;


