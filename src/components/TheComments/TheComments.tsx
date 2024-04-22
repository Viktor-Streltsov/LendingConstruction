'use client'

import React from 'react'
import Slider from 'react-slick'
import './TheSliderComments.scss'

const TheComments = () => {
	const settings = {
		className: 'center',
		centerMode: true,
		infinite: true,
		centerPadding: '60px',
		slidesToShow: 3,
		speed: 500
	}

	return (
		<div className='slider-comments'>
			<Slider {...settings}>
				<div>
					<h4>
						What Our Client Says
					</h4>
					<p>
						I am very satisfied with the services. Their team is very professional and efficient in completing our
						project on time and at a very affordable cost. The quality of their work is very good and I highly recommend
						this company for any construction project.
					</p>
					<span>
						Tom DeLonge
					</span>
					<span>CEO, Lexmark</span>
					<div></div>
				</div>
				<div>
					<h4>
						What Our Client Says
					</h4>
					<p>
						I am very satisfied with the services. Their team is very professional and efficient in completing our
						project on time and at a very affordable cost. The quality of their work is very good and I highly recommend
						this company for any construction project.
					</p>
					<span>
						Tom DeLonge
					</span>
					<span>CEO, Lexmark</span>
					<div></div>
				</div>
				<div>
					<h4>
						What Our Client Says
					</h4>
					<p>
						I am very satisfied with the services. Their team is very professional and efficient in completing our
						project on time and at a very affordable cost. The quality of their work is very good and I highly recommend
						this company for any construction project.
					</p>
					<span>
						Tom DeLonge
					</span>
					<span>CEO, Lexmark</span>
					<div></div>
				</div>
			</Slider>
		</div>
	)
}

export default TheComments