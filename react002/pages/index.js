import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const [number, setNumber] = useState(0)
	const styles = {
		zIndex: -1,
		objectFit: 'cover',
	}
	const app = useRef()
	const selector = useRef()
	useLayoutEffect(() => {
		//
		let ctx = gsap.context(() => {
			let tl = gsap.timeline()
			tl.to('.background', { opacity: 0.7, duration: 1 })
			tl.to('.myStuff', { opacity: 1, duration: 1 })
			// gsap.to('.myStuff', { opacity: 1, duration: 2 })
		}, app)
		return () => ctx.revert()
	}, [])

	function generate() {
		setNumber((number) => (number = Math.floor(Math.random() * 100)))
	}
	return (
		<>
			<main ref={app}>
				<section className='myStuff' ref={selector}>
					<h1>Random Number Generator</h1>
					<div className='number'>{number}</div>
					<button onClick={generate}>Generate Number</button>
				</section>
				<Image
					style={styles}
					className='background'
					src='/bigbg2.png'
					fill
					alt=''
				></Image>
			</main>
		</>
	)
}
