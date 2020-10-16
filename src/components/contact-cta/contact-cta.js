import React from "react"
import styles from "./contact-cta.module.scss"
import { Link } from "gatsby"
const ContactCta = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contactGrid}>
        <h1>Interested in working with us?</h1>
        <Link to="/contact" className={styles.getInTouch}>
          GET IN TOUCH
        </Link>
      </div>
    </section>
  )
}

export default ContactCta
