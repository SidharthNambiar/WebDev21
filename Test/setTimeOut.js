console.log("linked")

function main(){
    console.log("A")
    setTimeout(() => {
        console.log("B")
    }, 0);

    runWhileLoopForNSeconds(5)
    console.log("C")
}

main();

function runWhileLoopForNSeconds(sec){
    let start = Date.now(), now = start;
    while (now - start < (sec*1000)) {
      now = Date.now();
    }
  }