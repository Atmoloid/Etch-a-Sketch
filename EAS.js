document.addEventListener("DOMContentLoaded",function(){
    createSquare(16);
    
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