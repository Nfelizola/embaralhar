// função para embaralhar a ordem inicial do array
function shuffle2(array){
    var shuffled = array
    .map(value =>({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    return array=shuffled;
}

// metodo alterando cada item da 
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  function botao1click(){
    var arr = [0,2,4,6,8,9,14,0,2,4,6,14,0,13,14,'ZAMBERITO', 'FELIZOLA'];
    console.log("array inicial "+ arr);
   // suffle 
    console.log("array embaralhado: " + (neworder = shuffle(arr)));
    console.log ("Primeira Carta será : "+neworder[0]);
    console.log ("e a nova posição do FELIZOLA é: "+ (neworder.findIndex(element => element ==='FELIZOLA')+1));
    console.log("Ordem Original: " +arr);
  }
 