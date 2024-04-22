import React from 'react'
import TheFuture from '@/components/theFuture/TheFuture'
import TheYears from '@/components/theYears/TheYears'
import TheFeatured from '@/components/theFeatured/TheFeatured'
import TheRequest from '@/components/theRequest/TheRequest'
import styles from './styles/Home/Home.module.scss'

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
			<section className={styles.wrapperComments}>
				{/*<TheComments />*/}
			</section>
			<section className={styles.wrapperRequest}>
				<TheRequest />
			</section>
		</>
	)
}

export default Home