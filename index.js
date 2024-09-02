const listaDeDestinos = new Array(
  `Cairo`,
  `Tokyo`,
  `Rio de Janeiro`,
  `Las Vegas`
)

console.log(`Nossos destinos são: ${listaDeDestinos}`);

const idadeComprador = 27;
const menorAcompanhado = true;

if (idadeComprador < 18) {
  console.log(`O comprador é menor de idade. É necessário um maior de idade para efetuar a compra da passagem.`);
  if (menorAcompanhado == true) {
    console.log(`O menor está acompanhado e a compra pode ser realizada.`);
    console.log(`O destino selecionado é ${listaDeDestinos[3]}.`);
  } else {
  console.log(`O menor está desacompanhado. Infelizmente a compra não pode ser realizada sem um maior.`);
  }
} else {
  console.log(`Comprador maior de idade. Podemos prosseguir com a compra.`);
  console.log(`Escolha um destino:`);
  console.log(`${listaDeDestinos}`);
}