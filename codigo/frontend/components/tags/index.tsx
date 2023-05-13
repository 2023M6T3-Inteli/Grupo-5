import React from "react";
import styles from './styles.module.scss'

export const Tags = (props) => {
    return (
        <div className={styles.tagComponent}>
            <div className={styles.tagContent}>
                {props.text}
            </div>
        </div>
    );
}
