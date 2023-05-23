import React from 'react'

import styles from './styles.module.scss'
import CloseIcon from '@mui/icons-material/Close'

type Props = {
  closeArrow?: boolean;
  closeModal: Function;
  content: any;
  type?: 'warning';
  size?: 'small' | 'medium' | 'large';
}

const Modal: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.modal}>
      <div className={`${styles.container} ${props.size && styles[props.size]}`}>
        {
          props.closeArrow &&
          <div className={styles.backIcon} onClick={() => props.closeModal()}>
            <CloseIcon />
          </div>
        }

        {
          props.content
        }
      </div>
    </div>
  )
}

export default Modal