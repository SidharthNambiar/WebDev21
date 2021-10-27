//My code below
console.log("connected")


const btnv2 = document.querySelector('#v2');
const h1 = document.querySelector('h1');
const btnv3 = document.querySelector('#v3')
const btn4 = document.querySelector('#tands')


btnv2.onclick = function(){
    console.log("you clicked button v2")
}

function scream(){
    console.log("AAHHHHHH! It hurts!")
}


btnv2.onmouseenter = scream;

h1.onclick = function(){
    alert("I'm not a button")
}

btnv3.addEventListener('mouseup', function(){
    console.log("you clicked v3")
})

function twist(){
    console.log("TWIST")
}

function shout(){
    console.log("SHOUT")
}

btn4.onclick = shout;
btn4.onclick = twist;

btn4.addEventListener('click', shout, {once: true})
btn4.addEventListener('click', twist)





























//original code below
//*******************

// const btn = document.querySelector('#v2');

// btn.onclick = function () {
//     console.log("YOU CLICKED ME!")
//     console.log("I HOPE IT WORKED!!")
// }

// function scream() {
//     console.log("AAAAAHHHHH");
//     console.log("STOP TOUCHING ME!")
// }

// btn.onmouseenter = scream;


// document.querySelector('h1').onclick = () => {
//     alert('you clicked the h1!')
// }


// const btn3 = document.querySelector('#v3');
// btn3.addEventListener('click', function () {
//     alert("CLICKED!");
// })

// function twist() {
//     console.log("TWIST!")
// }
// function shout() {
//     console.log("SHOUT!")
// }

// const tasButton = document.querySelector('#tas');

// // tasButton.onclick = twist;
// // tasButton.onclick = shout;

// tasButton.addEventListener('click', twist)
// tasButton.addEventListener('click', shout)


