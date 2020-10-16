import React from "react"
import styles from "./hero.module.scss"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "illustrations/7.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}>
        <div className={styles.heroLeft}>
          <h1>Dream big , we will handle the rest.</h1>
          <p>
            We are Sealms a digital agency from Dunedin , New Zealand. We are
            specialised in handcrafting custum websites and mobile apps for
            small and medium size businesses.
          </p>
          <Link to="/services">
            <button className={styles.button}>EXPLORE MORE</button>
          </Link>
        </div>
        <div className={styles.heroRight}>
          <Img
            className={styles.headerImage}
            objectFit="cover"
            fluid={data.placeholderImage.childImageSharp.fluid}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
