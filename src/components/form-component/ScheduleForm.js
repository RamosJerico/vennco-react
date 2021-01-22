import React, { useEffect } from 'react';
import Button from '../Button';
import { Grid } from '@material-ui/core';
import Controls from '../controls/Controls';
import * as ScheduleData from '../../Data/ScheduleData';
import { useForm, Form } from './useForm';

const initialFieldValues = {
    id: 0,
    subjectCode: '',
    description: '',
    time: '',
    roomId: '',
    units: '',
    instructorId: '',
}

function ScheduleForm(props) {
    const { addOrEdit, recordForEdit } = props;

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if('subjectCode' in fieldValues) {
            temp.subjectCode = fieldValues.subjectCode.length < 11 ? "" : "Subject code does not exceed 10 letters/numbers."
        }
        if('description' in fieldValues) {
            temp.description = fieldValues.description ? "" : "This field is required."
        }
        if('time' in fieldValues) {
            temp.time = fieldValues.time ? "" : "This field is required."
        }
        if('units' in fieldValues) {
            temp.units = fieldValues.units ? "" : "This field is required."
        }
        if('myclassId' in fieldValues) {
            temp.myclassId = fieldValues.myclassId.length !== 0 ? "" : "This field is required."
        }
        if('instructorId' in fieldValues) {
            temp.instructorId = fieldValues.instructorId.length !== 0 ? "" : "This field is required"
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
                    <Controls.Input
                        name='time'
                        label='Time'
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
                        name='roomId'
                        label='Room No'
                        value={values.roomId}
                        onChange={handleInputChange}
                        options={ScheduleData.getMyRoom()}
                        error={errors.roomId}
                    />
                    <Controls.Select
                        name='instructorId'
                        label='Instructor'
                        value={values.instructorId}
                        onChange={handleInputChange}
                        options={ScheduleData.getInstructor()}
                        error={errors.instructorId}
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
export default ScheduleForm;