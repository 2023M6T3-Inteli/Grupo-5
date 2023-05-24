import React from 'react'
import styles from './styles.module.scss'

type Props = {
  close: Function;
}

const CreateProject: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.container}></div>
  )
}

export default CreateProject