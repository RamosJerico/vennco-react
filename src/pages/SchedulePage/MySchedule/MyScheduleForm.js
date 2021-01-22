import React, { useEffect } from 'react';
import Button from '../../../components/Button';
import { Grid } from '@material-ui/core';
import Controls from '../../../components/controls/Controls';
import * as MyScheduleData from './MyScheduleData';
import { useForm, Form } from '../../../components/form-component/useForm';

const initialFieldValues = {
    id: 0,
    subjectCode: '',
    description: '',
    time: '',
    units: '',
    classId: '',
    room: '',
}

function InstructorForm(props) {
    const { addOrEdit, recordForEdit } = props;

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues) {
            temp.fullName = fieldValues.fullName ? "" : "Name is required."
        }
        setErrors({
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
                        label='Description'
                        value={values.description}
                        onChange={handleInputChange}
                        error={errors.description}
                    />
                    <Controls.Input 
                        name='time'
                        label='Time/Day'
                        value={values.time}
                        onChange={handleInputChange}
                        error={errors.time}
                    />
                    <Controls.Input
                        name='units'
                        label='UNITS'
                        value={values.units}
                        onChange={handleInputChange}
                        error={errors.units}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Select
                        name='room'
                        label='Room No.'
                        value={values.room}
                        onChange={handleInputChange}
                        options={MyScheduleData.getRoom()}
                        error={errors.room}
                    />
                    <Controls.Select
                        name='classId'
                        label='Class'
                        value={values.classId}
                        onChange={handleInputChange}
                        options={MyScheduleData.getClass()}
                        error={errors.classId}
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
export default InstructorForm;