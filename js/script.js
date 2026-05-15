// //COmentario em linha

// /*
//     Comentário em bloco
// */

// // VAR NAO PODE SER UTILIZADO.

// // Forma de declaracao de variaveis

// let nome = "Juan";
// let sobrenome = "Souza Marques";
// const idade = 18

// console.log(nome);
// console.log(sobrenome);
// console.log(idade);

// // Exemplo da diferenca entre var e let

// if(true){
//     let nome = "Reinaldo"; 
//     let sobrenome = "Marques"
//     const idade = 44

//     console.log(nome)
//     console.log (sobrenome)
//     console.log (idade)
// }

//Tipos de dados:
// const nome = "Alê";
// console.log(typeof nome);
// const idade = 20;
// console.log(typeof idade);
// const numeroDecimal = 20.345678910111;
// console.log(typeof numeroDecimal);
// const estaAprovado = true;
// console.log(typeof estaAprovado);
// const sobrenome = undefined;
// console.log(typeof sobrenome);
// let naoDeclarada;
// console.log(typeof naoDeclarada);
// const corSelecionada = null;
// console.log(typeof corSelecionada);
// const objeto = {};
// console.log(typeof objeto);
// const array = [];
// console.log(typeof array);
// const objeto2 = {nome: "Alê", sobrenome: "C. de Jesus"};
// console.log(typeof objeto2);
// const array2 = ["Alê", "C. de Jesus", 20, true];
// console.log(typeof array2);
// const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// //Tipagem no JS é dinâmica
// let variavel;
// console.log("Valor: " + variavel);
// console.log("Tipo: " + typeof variavel);

// variavel = "Alê";
// console.log("Valor: " + variavel);
// console.log("Tipo: " + typeof variavel);

// variavel = true;
// console.log("Valor: " + variavel);
// console.log("Tipo: " + typeof variavel);

// //Como declaramos um objeto em javaScript
// const objeto1 = {
//     nome: "Juan",
//     sobrenome: "Marques",
//     idade: 18,
//     estaAprovado: true
// };
// console.log(objeto1);
// console.log(typeof objeto1);

// Lição de Casa:
// Crie um objeto que seja semelhante aos dados do formulário de login
// Imprmir os dados do objeto no console.

//Declarando um objeto espelhado ao formulario de login 
  
// //Imprimindo os dados do objeto:
// console.log(perfil);

// // //Imprimindo um único dado do objeto: 
// console.log(usuario.nome);

// //Alterar um unico dado do objeto:
// usuario.nome = "Antonio das alfaces";
// //Imprimindo um unico dado do objeto:
// console.log(usuario.nome);

// let nome = "Joaquim dos tomates"
// //Alterar um unico dado do objeto:
// usuario.nome = nome
// //Imprimindo um único dado do objeto:
// console.log(usuario.nome)

// const subTitH2 = document.getElementById("teste");
// //Imprimindo o elemento capturado:
// console.log(subTitH2);

// //Vamos escrever no H2
// //subTitH2.textContent = "Novo valor"
// // subTitH2.innerHTML = "<p>Titulo</p>"

// const perfil = {
//     email: "email@email.com",
//     senha: "12345678",
//     nome: "Jose das Couves",
//     idade: 33,
//     avatar:"./img/avatar/img-avatar-01.jpg"
// }

// // Capturando elemento do avatar
// const imgAvatar = document.getElementById("Avatar-user")

// //Preenchendo o avatar com os dados do objeto usúario:
// imgAvatar.src = usuario.avatar;
// imgAvatar.width = "100%";
// imgAvatar.alt = usuario.nome; 

//Para casa 

//Recuperar os dados do form e armazenar em um objeto e imprimir assim que o botão Entrar for clicado
 //Conhecendo as strings
  //O que são STRINGS?

// let frase = "Estou seguro, agora, utilizo um anti-virus pago!!";
// console.log(frase);

// //Contando os caractéres da string.
// console.log(frase.length);

// //Realizando a leitura dinâmica de uma string.
// for (let x = 0; x < frase.length; x++) {
    
//     if(frase[x].toLocaleLowerCase() === "e"){
//         console.log(`A letra "e" está na posição ${x} da frase`);
//     }

// }


// console.log(usuarios);


// function login(...args){
//     //Contexto da função
//     let resultado = "";
//     resultado = args[0] + args[1] + args[2];
//     console.log(resultado);
//     return resultado;
// }

// console.log(login(7,6,8));

// const login = (...args)=>{
//     //Contexto da função
//     let resultado = "";
//     resultado = args[0] + args[1] + args[2];
//     console.log(resultado);
//     return resultado;
// }

// console.log(login(7,6,8));


// const botaoEntrar = document.getElementById("btnEntrar");

// // botaoEntrar.addEventListener("click", function(){
// //     console.log(this);
// // });

// botaoEntrar.addEventListener("click", ()=>{
//     console.log(this);
// });

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
                //capturar a janela de dialog:

                const modal = document.querySelector("#meuModal");
                modal.showModal();

                //Capturando o botao do dialog para fechar a janela.
                const botaoModal = document.querySelector("#btnFecharmodal")

                //atrelar um evento para o botao de fechamento encerrar a janela de dialog.
                botaoModal.addEventListener("click",()=>{
                    //utilizando o elemento dialog ja capturado para encerrar. 
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