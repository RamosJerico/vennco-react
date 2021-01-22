import React, { useEffect } from 'react';
import Button from '../../../components/Button';
import { Grid } from '@material-ui/core';
import Controls from '../../../components/controls/Controls';
import * as CurriculumData from './CurriculumData';
import { useForm, Form } from '../../../components/form-component/useForm';

const initialFieldValues = {
    id: 0,
    subjectCode: '',
    description: '',
    units: '',
}

function SubjectForm(props) {
    const { addOrEdit, recordForEdit} = props;

    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if('subjectCode' in fieldValues) {
            temp.subjectCode = fieldValues.subjectCode.length < 11 ? "" : "Subject code does not exceed 10 numbers/letters."
        }
        if('description' in fieldValues) {
            temp.description = fieldValues.description ? "" : "This field is required"
        }
        if('units' in fieldValues) {
            temp.units = fieldValues.units ? "" : "This field is required"
        }
        setErrors ({
            ...temp
        })
        if(fieldValues === values) {
            return Object.values(temp).every(x => x === "")
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        if(validate()) {
            addOrEdit(values, resetForm);
        }
    }
    const {
        values,
        setValues,
        errors, 
        setErrors,
        handleInputChange,
        resetForm,
    } = useForm(initialFieldValues, true, validate);

    useEffect(() => {
        if(recordForEdit !== null) {
            setValues({
                ...recordForEdit
            })
        }
    }, [recordForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input 
                        name='subjectCode'
                        label='Subject Code'
                        value={values.subjectCode}
                        onChange={handleInputChange}
                        error={errors.subjectCode}
                    />
                    <Controls.Input 
                        name='description'
                        label='Course Description'
                        value={values.description}
                        onChange={handleInputChange}
                        error={errors.description}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input 
                        name='units'
                        label='UNITS'
                        value={values.units}
                        onChange={handleInputChange}
                        error={errors.units}
                    />
                    <div>
                        <Button
                            type='submit'
                            buttonSize='btn--medium' 
                            buttonStyle='btn--primary' 
                            buttonColor='green'>Submit
                        </Button>
                        <Button
                            buttonSize='btn--medium'
                            buttonStyle='btn--primary'
                            buttonColor='blue'
                            onClick={resetForm}>Reset
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
export default SubjectForm;