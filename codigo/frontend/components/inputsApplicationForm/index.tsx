import React from "react";
import { useState, useEffect } from "react";
import styles from './styles.module.scss';

type InputProps = {
    className?: string;
    placeholder: string;
    type: any;
    size?: 'small' | 'medium' | 'large';
    value?: any;
    onChange?: Function;
}

export const InputsApplicationForm = (props: InputProps) => {
    const [value, setValue] = useState('')

    const changeValue = (value: any) => {
        setValue(value)
        if (props.onChange) {
            props.onChange(value)
        }
    }

    useEffect(() => {
        setValue(props.value)
    }, [props.value])

    return (
        <div className={styles.inputsApplicationForm}>
            <input
                type={props.type}
                placeholder={'' + props.placeholder}
                className={''}
                value={value}
            />
        </div>

    )
}

