const generate = () => {
	const rng = document.querySelector('.generate')
	const number = document.querySelector('.number')
	rng.addEventListener('click', () => {
		number.innerHTML = Math.floor(Math.random() * 100)
	})
}
