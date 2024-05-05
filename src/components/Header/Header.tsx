import React from "react";
import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <header> 
        <div className={styles.header}>
          <span> Hello world!</span>
        </div>
      </header>
    </>
  )
}