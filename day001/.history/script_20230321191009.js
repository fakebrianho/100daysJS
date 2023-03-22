const counter = () => {
	const sub = document.querySelector('.subtract')
	const reset = document.querySelector('.reset')
	const add = document.querySelector('.add')
	const counter = document.querySelector('.count')
	let count = 0
	function update() {
		counter.innerHTML = count
	}

	sub.addEventListener('click', () => {
		count--
		update()
	})

	add.addEventListener('click', () => {
		count++
		update()
	})

	reset.addEventListener('click', () => {
		count = 0
		update()
	})
}

counter()
