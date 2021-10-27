const input = document.querySelector("input");
const h1 = document.querySelector("h1");
const originalText = h1.innerText;



input.addEventListener("input", function (e) {
    if(input.value === ''){
        h1.innerText = originalText;
    }
    else{
        h1.innerText = input.value;

    }
});

