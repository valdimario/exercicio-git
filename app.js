alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 3000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao n.s
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //se chute for igual a numero secreto
    if (chute == numeroSecreto) {
        break;
       
    } else {
        if(chute > numeroSecreto){
    alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}
    let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

   // if (tentativas > 1) {
    //    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`); //template string se faz com crase e com ${}
   // } else {
    //    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`); //template string se faz com crase e com ${}
