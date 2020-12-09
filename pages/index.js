import React from 'react';

import styles from '../styles/Home.module.css'
import DbCardStyleAa from '../templates/dbcard/style_aa.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <DbCardStyleAa name="Yash Gohel" cta="CALL ME" tel="tel:917698094485" no="917698094485" name="Yash Gohel" subtitle="Full Stack Designer"></DbCardStyleAa>
    </div>
  )
}