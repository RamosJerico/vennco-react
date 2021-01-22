import React, { useEffect } from 'react';
import Button from '../Button';
import { Grid } from '@material-ui/core';
import Controls from '../controls/Controls';
import * as InstructorData from '../../Data/InstructorData';
import { useForm, Form } from './useForm';

const initialFieldValues = {
    id: 0,
    fullName: '',
    email: '',
    major: '',
    preferred: '',
    mobile: '',
    departmentId: '',
}

function InstructorForm(props) {
    const { addOrEdit, recordForEdit } = props;

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues) {
            temp.fullName = fieldValues.fullName ? "" : "Name is required."
        }
        if ('email' in fieldValues) {
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        }
        if('major' in fieldValues) {
            temp.major = fieldValues.major ? "" : "This field is required."
        }
        if ('preferred' in fieldValues) {
            temp.preferred = fieldValues.preferred ? "" : "Please specify your preferred time."
        }
        if('mobile' in fieldValues) {
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum of 10 numbers."
        }
        if ('departmentId' in fieldValues) {
            temp.departmentId = fieldValues.departmentId.length !== 0 ? "" : "This field is required."
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
                        name='fullName'
                        label='Full Name'
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        type='email'
                        name='email'
                        label='Email'
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input 
                        name='major'
                        label='Major'
                        value={values.major}
                        onChange={handleInputChange}
                        error={errors.major}
                    />
                    <Controls.Select
                        name='preferred'
                        label='What is your preferred time?'
                        value={values.preferred}
                        onChange={handleInputChange}
                        options={InstructorData.getPreferredTime()}
                        error={errors.preferred}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input
                        name='mobile'
                        label='Mobile No.'
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Select
                        name='departmentId'
                        label='Department'
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={InstructorData.getDepartment()}
                        error={errors.departmentId}
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