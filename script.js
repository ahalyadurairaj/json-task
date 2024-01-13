var btn= document.querySelectorAll('.btn1');



var obj =[{
   username:"aathil",
   profession:"developer",
   distination:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  
},
{
   username:"mathi",
   profession:"backend developer",
   distination:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
},{
    username:"makesh",
   profession:"Froentend developer",
   distination:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
}]


btn.forEach((x,index)=>{
    x.addEventListener('click',()=>{
        window.open("index2.html","_blank");

        let string = JSON.stringify(obj[index]);
        localStorage.setItem("uname",string);
       
    })
  
})

let str_obj=localStorage.getItem("uname")

let store=JSON.parse(str_obj)

console.log(str_obj);