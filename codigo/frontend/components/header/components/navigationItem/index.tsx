import React from 'react'

import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link';

type Props = {
  icon: string;
  text: string;
  imageAlt?: string;
  url: string;
  active?: boolean;
}

const NavigationItem: React.FC<Props> = (props: Props) => {
  return (
    <Link href={props.url}>
      <div className={`${styles.navigationItem} ${props.active && styles.active}`}>
        <div className={styles.iconContainer}>
          <Image className={styles.icon} width={0} height={0} sizes='100%' src={props.icon} alt={props.imageAlt || 'Header icone'} />
        </div>
        <p className={styles.text}>{props.text}</p>
      </div>
    </Link>
  )
}

export default NavigationItem