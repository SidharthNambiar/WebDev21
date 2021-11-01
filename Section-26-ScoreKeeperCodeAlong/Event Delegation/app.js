console.log('linked')


const ul = document.querySelector('ul');
const liFour = document.querySelector('#four')

ul.addEventListener('click', (e) =>{

    console.log(`you clicked on ${e.target.innerText}`)


})

// preventing event delegation
liFour.addEventListener('click', (e)=>{
    
    e.stopPropagation();
    console.log("you clicked directly on four")
})
