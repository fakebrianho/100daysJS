const counter = () => {
	const sub = document.querySelector('.subtract')
	const reset = document.querySelector('.reset')
	const add = document.querySelector('.add')
	let count = 0

	function subtract(count) {
		return count - 1
	}

	function reset() {
		return 0
	}

	function add(count) {
		return count + 1
	}

	sub.addEventListener('click', () => {})
}
