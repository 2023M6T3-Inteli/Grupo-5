import React from 'react'

import styles from './styles.module.scss'
import CloseIcon from '@mui/icons-material/Close'

type Props = {
  title?: string;
  closeModal?: Function;
  content: any;
  type?: 'warning';
  size?: 'small' | 'medium' | 'large';
}

const Modal: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.modal}>
      <div className={`${styles.container} ${props.size && styles[props.size]}`}>
        {
          props.title && <h2 className={styles.title}>{props.title}</h2>
        }
        {
          props.closeModal &&
          <div className={styles.closeIcon} onClick={() => props.closeModal && props.closeModal()}>
            <CloseIcon />
          </div>
        }

        <div className={`${styles.content} ${props.closeModal && styles.contentWithClose} `}>
          {
            props.content
          }
        </div>
      </div>
    </div>
  )
}

export default Modal