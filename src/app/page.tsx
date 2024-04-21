import React from 'react'
import TheFuture from '@/components/theFuture/TheFuture'
import TheYears from '@/components/theYears/TheYears'
import styles from './styles/Home/Home.module.scss'
import TheFeatured from '@/components/theFeatured/TheFeatured'


const Home = () => {
	return (
		<>
			<section className={styles.wrapperFuture}>
				<TheFuture />
			</section>
			<section className={styles.wrapperYears}>
				<TheYears />
			</section>
			<section className={styles.wrapperFeatured}>
				<TheFeatured />
			</section>
			<section></section>
			<section></section>
		</>
	)
}

export default Home