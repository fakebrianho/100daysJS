import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const [counter, setCounter] = useState(0)
	function subtract() {
		setCounter((counter) => counter - 1)
	}
	function add() {
		setCounter((counter) => counter + 1)
	}
	function reset() {
		setCounter(0)
	}
	return (
		<>
			<main>
				<section className='container'>
					<h1>Counter App</h1>
					<section>
						<span>{counter}</span>
					</section>
					<div className='divider'></div>
					<footer>
						<button className='subtract' onClick={subtract}>
							Subtract
						</button>
						<button className='reset' onClick={reset}>
							Reset
						</button>
						<button className='add' onClick={add}>
							Add
						</button>
					</footer>
				</section>
			</main>
		</>
	)
}
