//Contagem

let numeroAlunos = 10;

for(let contador = 0; contador < numeroAlunos; contador++){
    
//identificar quano for 0 e avisar

    if(contador == 0) {
        console.log("O numero é ZERO")
    } 
//identificar quando for par e avisar    
    
    else if(contador % 2 == 0) {
        console.log(`O numero ${contador} é PAR`)

    } 
 //identificar quando for impar e avisar   
    
    else if(contador % 2 == 1){
        console.log(`O numero ${contador} é IMPAR`)
    }
}
