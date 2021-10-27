

const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

btn.addEventListener('click', function(){
    const newColor = randomColor();
    

    h1.innerText = newColor;
    document.body.style.backgroundColor = newColor;

})

const randomColor = () =>{

    const color1 = Math.floor(Math.random()*255)+1;
    const color2 = Math.floor(Math.random()*255)+1;
    const color3 = Math.floor(Math.random()*255)+1;
    return `rgb(${color1},${color2},${color3})`;

}




































// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');

// button.addEventListener('click', function () {
//     const newColor = makeRandColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// })

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }

