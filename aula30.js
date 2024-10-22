const dc1=document.getElementById('dc1')
const dc2=document.getElementById('dc1')
const dc3=document.getElementById('dc1')
const dc4=document.getElementById('dc1')
const dc5=document.getElementById('dc1')
const dc6=document.getElementById('dc1')

const arrayElements = [dc1,dc2,dc3,dc4,dc5,dc6]

console.log(dc1);
console.log(dc1.id);
console.log(dc1.innerHTML);
dc1.innerHTML='Python Rules';

// for(d of arrayElements)
//     d.innerHTML = 'Python Rules'

arrayElements.map((e)=>{
    console.log(e);
    e.innerHTML = 'Python Rules'
})



