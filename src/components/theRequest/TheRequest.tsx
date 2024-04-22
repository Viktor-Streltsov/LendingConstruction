import React from 'react'
import styles from './TheRequest.module.scss'

const TheRequest = () => {
	return (
		<>
			<h2 className={styles.nameRequest}>Leading Way In Building & Civil Construction</h2>
			<div className={styles.blockInfoForm}>
				<div className={styles.blockForm}>
					<h3 className={styles.nameForm}>Request A Quote</h3>
					<p className={styles.textForm}>
						Complete control over products allow us to our customers the best quality
						prices and services. We take great pride in everything that we do in Jhontraktor
					</p>
					<form className={styles.form}>
						<input className={styles.inputForm} type='text' placeholder='Name' />
						<input className={styles.inputForm} type='email' placeholder='Email' />
						<input className={styles.inputForm} type='number' placeholder='Phone' />
						<input className={styles.inputForm} type='text' placeholder='Name' />
						<textarea className={styles.textareaForm} placeholder='Additional Details!' />
						<button className={styles.submit} type='button'>Submit Request</button>
					</form>
				</div>
				<div className={styles.blockInfo}>
					<h3 className={styles.nameInfo}>Contact Info</h3>
					<ul className={styles.listContact}>
						<li>
							<h4 className={styles.nameList}>Our Location</h4>
							<span className={styles.infoText}>18 Office Park Building 21th Floor Unit C. Jl. TB Simatupang Kav. 18, Jakarta Selatan ,12520</span>
						</li>
						<li>
							<h4 className={styles.nameList}>Quick Contact</h4>
							<span className={styles.infoText}>Email : contact@jhontraktor.com</span>
							<span className={styles.infoText}>Call Us : (+62) 877-2469-7246</span>
						</li>
						<li>
							<h4 className={styles.nameList}>Opening Hours</h4>
							<span className={styles.infoText}>Monday - Friday</span>
							<span className={styles.infoText}>09:00 AM - 06:00 PM</span>
						</li>
					</ul>
					<p className={styles.textContact}>Do You Have Any Question, Just Contact Us To Get Help!</p>
					<button className={styles.btnContacts}>Contact Us</button>
				</div>
			</div>
		</>
	)
}

export default TheRequest