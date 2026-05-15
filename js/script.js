

// // // Comenterio em linha
// // /*
// // Comentario em bloco
// // */

// // //Forma de declarar de variavel
// // //var nome = "João"; //Deve ser evitado
// // //let sobrenome = "C. de Lima";// Deve ser ultilizado
// // //const idade = 19; //Constante, não pode ser alterada depois de declarada, deve ser ultilizada quando o valor não for alterado

// // //console.log(nome);
// // //console.log(sobrenome);
// // //console.log(idade);      

// // //Exemplo de diferencia entre var, let e const

// // //if(true){
// //     //var nome = "Ana";
// //     //let sobrenome = "C. Cavalcante";
// //    // const idade = 18;
// // //}
// //     //console.log(nome);
// //     //console.log(sobrenome);
// //     // console.log(idade);
    
// // //Tipos de dados:
// // const nome = "João";
// // console.log(typeof nome);
// // const idade = 19;
// // console.log(typeof idade);
// // const numeroDecimal = 20.345678910111;
// // console.log(typeof numeroDecimal);
// // const estaAprovado = true;
// // console.log(typeof estaAprovado);
// // const sobrenome = undefined;
// // console.log(typeof sobrenome);
// // let naoDeclarada;
// // console.log(typeof naoDeclarada);
// // const corSelecionada = null;
// // console.log(typeof corSelecionada);
// // const objeto = {};
// // console.log(typeof objeto);
// // const array = [];
// // console.log(typeof array);
// // const objeto2 = {nome: "Joao", sobrenome: "C. de Lima"};
// // console.log(typeof objeto2);
// // const array2 = ["Joao", "C. de Lima", 19, true];
// // console.log(typeof array2);
// // const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // //Tipagem no JS é dinâmica
// // let variavel;
// // console.log("Valor: " + variavel);
// // console.log("Tipo: " + typeof variavel);

// // variavel = "JV";
// // console.log("Valor: " + variavel);
// // console.log("Tipo: " + typeof variavel);

// // variavel = true;
// // console.log("Valor: " + variavel);
// // console.log("Tipo: " + typeof variavel);

// // //Como declaramos um Objeto em javaScript
// // const objeto1 = {
// //   nome: "JV",
// //   sobrenome: "C. de Lima",
// //   idade: 19,
// //   estaAprovado: true
// //   };
// // console.log(objeto1);
// // console.log(typeof objeto1);

// // //Licao para casa:
// // //Crie um objeto que seja semelhante aos dados do formulario de login, ou seja, com os campos email e senha. Depois imprima o objeto no console.
// // //imprima o tipo do objeto criado no console.

// //Declarando um objeto espelhado ao FORMULÁRIO DE LOGIN

// //Objeto Usuário:

// const usuario = {
//     email: "email@example.com",
//     senha: "123456",
//     name:"João Vitor",
//     idade:19,
//     avatar:"./img/avatar/img-avatar-01.png"
// }

// //Imprimindo os dados do objeto:
// console.log(usuario);
// console.table(usuario);

// //Imprimindo um único dado do objeto:
// console.log(usuario.nome);

// //Alterar um único dado do objeto:
// usuario.nome = "Ana Clara";
// //Imprimindo um único dado do objeto:
// console.log(usuario.nome);

// let nome = "Guilerme";
// //Alterar um único dado do objeto:
// usuario.nome = nome;

// //Imprimindo um único dado do objeto:
// console.log(usuario.nome);

//const subTitH2 = document.getElementById("teste");
//Imprimeindo o elemento capturado:
//console.log(subTitH2);

//Vamos escrever no h2
// subTitH2.textContent = "<p>NOVO TEXTO</p>";
//subTitH2.innerHTML = "<p>novo texto</p>";

// const usuario = {
//      email: "email@example.com",
//      senha: "123456",
//      name:"João Vitor",
//      idade:19,
//      avatar:"./img/avatar/img-avatar-01.png"
// }

// //Capturando o elemento de avatar:
// const imgAvatar = document.getElementById("avatar-user")

// //Preenchendo o avatar com os dados do objeto usuário:
// imgAvatar.src = usuario.avatar;
// imgAvatar.width = 100;
// imgAvatar.alt = usuario.nome;

//Recuperar os dados dos campos do FORM e armazenar em um objeto e imprimir eles assim que o botão Entrar for clicado!!

// conhecendo as strings
// o que sao strings? São cadeias de caracteres, ou seja, textos. Elas são usadas para armazenar e manipular texto em JavaScript. As strings podem ser criadas usando aspas simples (' '), aspas duplas (" ") ou crase (` `) para template literals.

//let nome = "João Vitor";
//let sobrenome = 'C. de Lima';
//let frase = `Meu nome é ${nome} ${sobrenome}`;

//console.log(nome);
//console.log(sobrenome);
//console.log(frase);

//Contando os caractéres da string.
//console.log(frase.length);

//Realizando a leitura dinâmica de uma string.
//for (let x = 0; x < frase.length; x++) {
    
  //  if(frase[x].toLowerCase() === "m"){
    //    console.log(`A letra "M" está na posição ${x} da frase.`);
    //}

//}



//console.log(usuarios);

//function login(...args){
    //Contexto da função
  //  let resultado = "";
    //resultado = args[0] + args[1] + args[2];
    //console.log(resultado);
    //return resultado;
//}
//console.log(login(7,6,8));

// const login = (...args)=>{
//     //Contexto da função
//     let resultado = "";
//     resultado = args[0] + args[1] + args[2];
//     console.log(resultado);
//     return resultado;
// }

// console.log(login(7,6,8));


//const botaoEntrar = document.getElementById("btnEntrar");

// botaoEntrar.addEventListener("click", function(){
//     console.log(this);
// });

//botaoEntrar.addEventListener("click", ()=>{
    // console.log(this);
//});

//Lista de usuários : PSEUDO BANCO
const usuarios = [
  {
    email: "zarak.vultos@exemplo.com",
    senha: "12345",
    nome: "Zarak dos Vultos",
    idade: 42,
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
  },
  { 
    email: "email@example.com",
    senha: "123456",
    nome: "João Vitor",
    idade: 19,
    avatar:"https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
  },
  {
    email: "elara.astral@exemplo.com",
    senha: "12345",
    nome: "Elara Galáxia Astral",
    idade: 27,
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
  },
  {
    email: "mordecai.bruma@exemplo.com",
    senha: "12345",
    nome: "Mordecai da Bruma",
    idade: 51,
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
  },
  {
    email: "thallos.ferro@exemplo.com",
    senha: "12345",
    nome: "Thallos de Ferro",
    idade: 35,
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
  },
  {
    email: "lyra.eco@exemplo.com",
    senha: "12345",
    nome: "Lyra Silvestre Eco",
    idade: 22,
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
  },
  {
    email: "boros.fenda@exemplo.com",
    senha: "12345",
    nome: "Boros da Fenda Profunda",
    idade: 64,
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
  },
  {
    email: "vaelin.nimbus@exemplo.com",
    senha: "12345",
    nome: "Vaelin Nimbus",
    idade: 30,
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
  },
  {
    email: "selene.quartzo@exemplo.com",
    senha: "12345",
    nome: "Selene de Quartzo",
    idade: 29,
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
  },
  {
    email: "kaelthas.sol@exemplo.com",
    senha: "12345",
    nome: "Kaelthas Brilho do Sol",
    idade: 47,
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
  },
  {
    email: "joric.martelo@exemplo.com",
    senha: "12345",
    nome: "Joric Martelo de Pedra",
    idade: 38,
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
  }
];

// usuarios.forEach((u,i,array)=>{
//     console.log(i,u.nome);
// } );


//Capturar o botão de entrar para iniciar a tarefa de login
const botaoEntrar = document.getElementById("btnEntrar");
//Atrelando um evento ao botão de entrar para iniciar a tarefa de validação do login.
botaoEntrar.addEventListener("click", (e)=>{

    //Pegando o evento disparador e controlando o comportamento do alvo(form) para
    //não executar por enquanto este mesmo comportamento padrão através da função preventDefault().
    e.preventDefault();

    //Capturar os campos de email e senha e imprimir seus dados:
    const email = document.querySelector("#idEmail");
    const senha = document.querySelector("#idSenha");
    
    //Vamos guardar os dados oriundos do form em um objeto:
    const dadosForm = {
        email: email.value,
        senha: senha.value
    }

    //Iniciando a validação de fato, colocando a lista de usuários contra o objeto dadosForm:

    let isValid = false;

    if(usuarios.length > 0){

        for (const u of usuarios) {
            if(u.email === dadosForm.email && u.senha === dadosForm.senha){
               
                //Capturar a janela de dialog:
                const modal = document.querySelector("#meuModal");
                modal.showModal();

                //Capturando o botao do dialog para fechar a janela.
                const botaoModal = document.querySelector("#btnFecharModal");
                //Atrelar um evento para o botão de fechamento encerrar a janela de dialog.
                botaoModal.addEventListener("click", ()=>{
                  //utilizando o elemento dialog já capturado para encerrar.
                  modal.close();
                });

                isValid = true;
                break;
            }
        }
 
    }else{
        alert("Ocorreu um problema com as informações do sistema!");
    }

    if (!isValid) {
        alert("Email ou senha incorretos!");
    }
});

//Pra casa
// Incrementar a validação com uma mensagem temporizadora na tela:
// Utilize a função setInterval().
// Onde o usuário recebe a mensagem de Sucesso e que vai ser redirecionado em 5 segundos,
// com um contador rodando.
// Utilize a função window.location.href = destino para redirecionar o usuário!
