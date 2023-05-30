import React from 'react'
import styles from './styles.module.scss'
import Modal from '../Modal';


type Props = {
  text: string;
  submitText: string;
  submit: Function;
  cancel: Function;
}

const DeleteConfirm: React.FC<Props> = (props: Props) => {
  return (
    <Modal
      title= "Are you sure?"
      size="small"
      content={
        <div className={styles.container}>
          <h2 className={styles.text}>{props.text}</h2>

          <div className={styles.buttonContainer}>
            <button className={styles.cancel} onClick={() => props.cancel()}>
              Cancel
            </button>
            <button className={styles.submit} onClick={() => props.submit()}>
              {props.submitText}
            </button>
          </div>
        </div>
      }
    />
  );
}

export default DeleteConfirm