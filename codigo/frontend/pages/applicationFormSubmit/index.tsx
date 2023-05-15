import React from "react";
import styles from './styles.module.scss';
import { Col, Row } from "react-styled-flexboxgrid";
import { useState } from "react";
import { test } from "node:test";
import { text } from "node:stream/consumers";
import { SubmitButton } from "@/components/submitButton";
import { string } from "prop-types";
import { SelectRoleInterest } from "@/components/selectRoleInterest"
import { InputsApplicationForm } from "@/components/inputsApplicationForm"


const applicationFormSubmit = () => {

    const rolesInterestOptions = ['python', 'usDesign', 'W3']
    const [whyThisVacancy, setWhyThisVacancy] = useState('')

    const handleInputWhyThisVacancy = (event) => {
        setWhyThisVacancy(event.target.value);
    }

    const alertInput = () => { // integração aqui
        alert(whyThisVacancy)
    }


    return (
        <Col className={styles.applicationFormSubmit}>
            <Col className={styles.modalApplicationFormSubmit}>
                <Col className={styles.contentApplicationFormSubmit}>
                    <div className={styles.pageTitleApplicationFormsubmit}>
                        <h1>Application From</h1>
                    </div>
                    <Col className={styles.formApplicationFormSubmit}>
                        <Col className={styles.selectRoleInterest}>
                            <Col className={styles.selectRoleInterest}>
                                <SelectRoleInterest options={rolesInterestOptions} />
                            </Col>

                        </Col>
                        <Col className={styles.inputWhyThisVacancy}>
                            <InputsApplicationForm
                                // type={''}
                                // size='large'
                                placeholder={''}
                                className={styles.whyThisVacancy}
                                value={whyThisVacancy}
                                onChange={handleInputWhyThisVacancy}
                            />
                            {/* <input type="text" value={whyThisVacancy} onChange={handleInputWhyThisVacancy} /> */}

                        </Col>
                        <Col className={styles.inputSkillDevelop}>

                        </Col>
                    </Col>
                    <Col>
                        {/* <button onClick={alertinput}>Submit</button> */}
                        <SubmitButton
                            text='Submit'
                            onClick={() => alertInput()}
                        />
                    </Col>
                </Col>
            </Col>
        </Col>
    )
}


export default applicationFormSubmit;
