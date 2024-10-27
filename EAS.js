document.addEventListener("DOMContentLoaded",function(){
    createSquare(16);
    getSize();
    let btn_popup = document.querySelector("#sizes");
    btn_popup.addEventListener("click",function(){
        let size = getSize();
        createSquare(size);
    })
})

        
function createSquare(size){
    let container = document.querySelector('.container');

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for(let i = 0; i < amount; i++){
        let div = document.createElement("div");
        
        container.insertAdjacentElement("beforeend",div);
    }
    
}
function getSize(){
    let imput = prompt("Give me a size between 0 and 100:");
    if( imput == ""){
        return  getSize()
    }
    else if(imput < 0 || imput > 100){
        return getSize()
    }
    else{
        return imput;
    }
}