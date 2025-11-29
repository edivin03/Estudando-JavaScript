// 1 - INSERIR DADO NO LOCAL STORAGE
localStorage.setItem("nome", "Edivin Joao");

// 2 - RESTART SEM PERDER O DADO

// 3 - RESGATAR DADO DO LOCAL STORAGE
const nome = localStorage.getItem("nome");
console.log(nome);

// 4 - RESGATRAR DADO QUE NÃO EXISTE
const sobrenome = localStorage.getItem("sobrenome");
console.log(sobrenome); // null

if (!sobrenome) //*Se não houver sobrenome definido (ou se for vazio/nulo/indefinido)
  {
  console.log("Sem Sobrenome!");
}
// 5 - REMOVER DADO DO LOCAL STORAGE
localStorage.removeItem("nome");

// 6 - LIMPAR TODO O LOCAL STORAGE
localStorage.setItem("a", 3)
localStorage.setItem("b", 5)

localStorage.clear();