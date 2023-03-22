const counter = () => {
	const sub = document.querySelector('.subtract')
	const reset = document.querySelector('.reset')
	const add = document.querySelector('.add')
	let count = 0

	sub.addEventListener('click', () => {
		count--
	})

	add.addEventListener('click', () => {
		count++
	})

	reset.addEventListener('click', () => {
		count = 0
	})
}
