const generate = () => {
	const rng = document.querySelector('.generate')
	const color = document.querySelector('.color')
	const container = document.querySelector('.container')
	rng.addEventListener('click', () => {
		let n = (Math.random() * 0xfffff * 1000000).toString(16)
		let col = '#' + n.slice(0, 6)
		color.innerHTML = col
		container.style.backgroundColor = col
	})
}
generate()
