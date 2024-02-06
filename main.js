let div=document.querySelectorAll("div")
let btn=document.querySelectorAll("a")
let data=[]
let flag=true
div.forEach((elem)=>{ 
    [...elem.children].forEach((element)=>{
        if(element.dataset.p==="p"){
            data.push(element.innerText)
            element.innerText=element.innerText.substring("0","100")
          }
    })
})
btn.forEach((element,index)=>{
    element.addEventListener("click",function(e){
        if (element.previousElementSibling.dataset.p="p"){
            e.preventDefault(e)
            if (flag===true) {
                element.previousElementSibling.innerText=data[index]
                flag=false
            }
            else{
                element.previousElementSibling.innerText=element.previousElementSibling.innerText.substring("0","100")
                flag=true
            }
        }
    })
})
console.log(data);