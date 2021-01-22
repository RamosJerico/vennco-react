import React, { useEffect } from 'react';
import Button from '../Button';
import { Grid } from '@material-ui/core';
import Controls from '../controls/Controls';
import * as ClassroomData from '../../Data/ClassroomData';
import { useForm, Form } from './useForm';

const initialFieldValues = {
    id: 0,
    roomId: '',
    college: 'Institute of Computer Studies',
    room: '',
    departmentId: '',
}

function ClassroomForm(props) {
    const { addOrEdit, recordForEdit } = props;

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if('roomId' in fieldValues) {
            temp.roomId = fieldValues.roomId ? "" : "This field is required."
        }
        if('college' in fieldValues) {
            temp.college = fieldValues.college ? "" : "Please specify college."
        }
        if('room' in fieldValues) {
            temp.room = fieldValues.room ? "" : "This field is required."
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
                        name='roomId'
                        label='Room ID'
                        value={values.roomId}
                        onChange={handleInputChange}
                        error={errors.roomId}
                    />
                    <Controls.Input 
                        name='college'
                        label='College'
                        value={values.college}
                        error={errors.college}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input 
                        name='room'
                        label='Room No.'
                        value={values.room}
                        onChange={handleInputChange}
                        error={errors.room}
                    />
                    <Controls.Select
                        name='departmentId'
                        label='Department'
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={ClassroomData.getDepartment()}
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
export default ClassroomForm;