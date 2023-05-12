import React from "react";
import styles from './styles.module.scss'
import { type } from "os";


type Options = {
    value: string;
    label: string;
}

type Props = {
    text?: string;
    options: string[];
}
export const SelectRoleInterest = (props: Props) => {
    return (
        <div className={styles.selectRoleInterest}>
            <select className={styles.roleInterest}>
                {props.options && props.options.map((option, index) => (
                    <option value={option} key={index}>{option}</option>
                ))}
            </select>

        </div>
    )
}


