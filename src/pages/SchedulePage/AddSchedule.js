import React, {useEffect} from 'react';
import Button from '../../components/Button'
import { Grid } from '@material-ui/core';
import Controls from '../../components/controls/Controls';
import * as ClassroomData from '../../Data/ClassroomData';
import { useForm, Form } from '../../components/form-component/useForm';
import * as AddScheduleData from './AddScheduleData';

const initialFieldValues = {
    id: 0,
    class: '',
    adviser: '',
    departmentId: '',
}

function AddSchedule(props) {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if('class' in fieldValues) {
            temp.class = fieldValues.class ? "" : "This field is required."
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
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    } = useForm(initialFieldValues, true, validate);

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Select
                        name='roomId'
                        label='Class'
                        value={values.roomId}
                        onChange={handleInputChange}
                        options={AddScheduleData.getClass()}
                        error={errors.roomId}
                    />
                    <Controls.Input 
                        name='adviser'
                        label='Adviser'
                        value={values.college}
                        error={errors.college}
                    />
                </Grid>
                <Grid item xs={6}>
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
export default AddSchedule;
