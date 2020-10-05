const input = document.getElementById("inputField");
const output = document.getElementById("output");

function translateRna(x){
    if(x === "g"){return("c");}
    else if(x === "c"){return("g");}
    else if(x === "t"){return("a");}
    else if(x === "a"){return("u");}
    else {return("x");}
}

function convertToRna(str){
    const lower = str.toLowerCase();
    const letters = lower.split("");
    const RNA = letters.map(translateRna);

    return(RNA.join(""));
   

}

function readAndDisplay(){
    const userinput = input.value;
    const nucleoids =  convertToRna(userinput);
    // const output = nucleoids.join("");

    output.innerHTML = nucleoids;
}

input.addEventListener("input",readAndDisplay);