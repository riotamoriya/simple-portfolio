import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'


import { StaticImage } from "gatsby-plugin-image"

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>

      <StaticImage src="../images/logo.png" alt="Logo" className={styles.logo} />
      <span className={styles.navigationItem}>Moriya Ryota</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/project/" activeClassName="active">
          Project
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
