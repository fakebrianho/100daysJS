import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const [color, generateColor] = useState('Color')
	const cont = useRef()
	const dr1 = useRef()
	const dr2 = useRef()
	const app = useRef()
	const styles = {
		zIndex: -1,
		objectFit: 'cover',
	}
	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			let tl = gsap.timeline()
			tl.to('.background', { opacity: 1, duration: 1 })
			tl.to('.content', { opacity: 1, duration: 1 })
			//
		}, app)
		return () => ctx.revert()
	}, [])
	function generate() {
		let n = (Math.random() * 0xfffff * 1000000).toString(16)
		let col = '#' + n.slice(0, 6)
		cont.current.style.backgroundColor = col
		dr1.current.style.background = col
		dr2.current.style.background = col
		dr1.current.style.setProperty('--back_color', col)
		dr2.current.style.setProperty('--back_color', col)
		generateColor(col)
	}
	return (
		<>
			<main ref={app} styles={styles} className='container'>
				<section className='content' ref={cont}>
					<h1>Random Hex Color Generator</h1>
					<div className='color'></div>
					<div className='divider'></div>
					<div className='button' onClick={generate}>
						<div className='button__line'></div>
						<div className='button__line'></div>
						<span className='button__text'>Generate! {color}</span>
						<div ref={dr1} className='button__drow1'></div>
						<div ref={dr2} className='button__drow2'></div>
					</div>
				</section>
				<Image
					style={styles}
					className='background'
					src='/bg2.png'
					fill
					alt=''
				></Image>
			</main>
		</>
	)
}
