const quantidadePersonagens = 4;
const quantidadeMaximaDePersonagens = 671;
const containerPersonagens = document.getElementById("container-personagens")

containerPersonagens.innerHTML = `
	<section id="card-personagem">
		<img>
		<h2></h2>
	</section>
`.repeat(quantidadePersonagens);

const cardDoPersonagem = document.querySelectorAll("#container-personagens > #card-personagem");

gerarIdAleatorioParaPersonagem = () => {
	return Math.floor(Math.random() * quantidadeMaximaDePersonagens) + 1;
};

gerarAtributosPersonagens = () => {
	return fetch(
		`https://rickandmortyapi.com/api/character/${gerarIdAleatorioParaPersonagem()},${gerarIdAleatorioParaPersonagem()},${gerarIdAleatorioParaPersonagem()},${gerarIdAleatorioParaPersonagem()}`,
		{
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-type': 'application/json',
			},
		},
	)
		.then((response) => response.json())
		.then((data) => {
			for (let i = 0; i < 4; i++) {
				cardDoPersonagem[i].querySelector("img").src = data[i].image;
				cardDoPersonagem[i].querySelector("h2").textContent = data[i].name;
			}
		});
};

window.addEventListener('carregar', () => {
	gerarAtributosPersonagens();
})
document.onload = gerarAtributosPersonagens();