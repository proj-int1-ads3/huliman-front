const container = document.querySelector(".container");

const loginTela = document.querySelector("#login-tela");
const homeTela = document.querySelector("#home-tela");

const loginImg = document.querySelector("#login-img");
const loginComecar = document.querySelector("#login-comecar");
const loginSair = document.querySelector("#login-sair");

const fecharJogo = () => {
	console.log("saiu");
};

const reiniciarJogo = () => {
	console.log("reiniciou");
	homeTela.style.display = "none";
	loginTela.style.display = "flex";
};

const proximaTela = () => {
	console.log("comecou");
	loginTela.style.display = "none";
	homeTela.style.display = "flex";

	setTimeout(reiniciarJogo, 5000);
};

loginSair.addEventListener("click", fecharJogo);
loginComecar.addEventListener("click", proximaTela);
