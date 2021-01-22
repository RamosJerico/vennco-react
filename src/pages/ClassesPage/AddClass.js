import React, {useEffect} from 'react';
import Button from '../../components/Button';
import {Grid} from '@material-ui/core';
import Controls from '../../components/controls/Controls';
import * as ClassroomData from '../../Data/ClassroomData';
import { useForm, Form } from '../../components/form-component/useForm';

const initialFieldValues = {
    id: 0,
    section: '',
    year: '',
    adviser: '',
    departmentId: '',
}

function AddClass() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if('class' in fieldValues) {
            temp.class = fieldValues.class ? "" : "This field is required."
        }
        if('year' in fieldValues) {
            temp.year = fieldValues.year ? "" : "This field is required"
        }
        if('adviser' in fieldValues) {
            temp.adviser = fieldValues.adviser ? "" : "Please specify college."
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
    const {
        values,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    } = useForm(initialFieldValues, true, validate);

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name='section'
                        label='Section'
                        value={values.roomId}
                        onChange={handleInputChange}
                        error={errors.roomId}
                    />
                    <Controls.Input 
                        name='year'
                        label='Year'
                        value={values.college}
                        error={errors.college}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input
                        name='adviser'
                        label='Adviser'
                        value={values.adviser}
                        onChange={handleInputChange}
                        error={errors.adviser}
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
export default AddClass;
