import React from 'react'
import styles from './styles.module.scss'

type Props = {
  type: 'default' | 'secundary' | 'terceary' | 'cancel',
  text: string,
  size: 'small' | 'medium' | 'large',
  disabled?: boolean
  onClick?: any
}

const Button = (props: Props) => {
  return (
    <div className={styles.dellButton}>
      <button className={`${props.type && styles[props.type]} ${styles[props.size]}`} disabled={props.disabled} onClick={(e: any) => props.onClick(e)}>{props.text}</button>
    </div>
  )
}

export default Button