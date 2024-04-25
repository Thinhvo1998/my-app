import React, { useEffect, useState } from 'react'
import { Button, Col, Form, FormGroup, Label } from 'reactstrap'
import FormField from '../components/FormField'
import { useAppContext } from '../contexts/AppContainer.context'
const FormContainer = () => {
    const appContext = useAppContext();
    const { onSubmitData, onUpdateData, editInfoData, toggle } = appContext;

    const [formValues, setFormValues] = useState({
        emailValue: "",
        userNameValue: "",
        fullNameValue: "",
        departmentValue: "",
        positionValue: "",
    });
    const onFormChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    useEffect(() => {
        if (editInfoData) {
            const { email, department, userName, fullName, position } = editInfoData;
            setFormValues((previousState) => {
                return {
                    ...previousState,
                    emailValue: email,
                    userNameValue: userName,
                    fullNameValue: fullName,
                    departmentValue: department,
                    positionValue: position,
                };
            });
        } else {
            setFormValues(() => {
                return {
                    emailValue: "",
                    departmentValue: "",
                    userNameValue: "",
                    fullNameValue: "",
                    positionValue:""
                };
            });
        }
    }, [editInfoData]);

    const onSubmit = (e) => {
       
        e.preventDefault();
        if(formValues.departmentValue  === "") {       
            alert("Please select a valid department");  
            return;
        }
        if(formValues.positionValue === "") {
            alert("Please select a valid position");
            return;
        }
        else if(formValues.departmentValue && formValues.positionValue !== "") {

            const object = {
                id: Math.random(),
                email: formValues.emailValue,
                userName: formValues.userNameValue,
                fullName: formValues.fullNameValue,
                department: formValues.departmentValue,
                position: formValues.positionValue,
            };
    
            onSubmitData(object);
        }
    };

    const onUpdate = (e) => {
        e.preventDefault();

        const object = {
            id: editInfoData?.id,
            email: formValues.emailValue,
            userName: formValues.userNameValue,
            fullName: formValues.fullNameValue, 
            department: formValues.departmentValue,
            position: formValues.positionValue,
        };

        onUpdateData(object);
    };
    return (
        <Form onSubmit={editInfoData ? onUpdate : onSubmit}>
            <Col md={12}>
                <FormField
                    name="emailValue"
                    placeholder="Email placeholder"
                    label="Email"
                    type="email"
                    value={formValues.emailValue}
                    onChange={onFormChange}
                />
            </Col>
            <Col md={12}>
                <FormField
                    name="userNameValue"
                    placeholder="userName placeholder"
                    label="UserName"
                    type="text"
                    value={formValues.userNameValue}
                    onChange={onFormChange}
                />
            </Col>
            <Col md={12}>
                <FormField
                    name="fullNameValue"
                    placeholder="fullName placeholder"
                    label="FullName"
                    type="text"
                    value={formValues.fullNameValue}
                    onChange={onFormChange}
                />
            </Col>
            <FormGroup row>
                <Label
                    for="department"
                    sm={12}
                >
                    Department
                </Label>
                <Col sm={12}>
                    <select style={{ width: "100%" }} id="department" name="departmentValue" value={formValues.departmentValue} onChange={onFormChange}> 
                        <option value="">Vui lòng chọn</option>
                        <option value="Bán Hàng">Bán Hàng</option>
                        <option value="Kỹ thuật">Kỹ thuật</option>
                    </select>
                </Col>
            </FormGroup>
            <FormGroup row>
            <Label
                    for="position"
                    sm={12}
                >
                    Position
                </Label>
                <Col sm={12}>
                    <select style={{ width: "100%" }} id="position" name="positionValue" value={formValues.positionValue} onChange={onFormChange}> 
                        <option value="">Vui lòng chọn</option>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>
                </Col>
            </FormGroup>
            <Button type="submit" onClick={toggle}>{editInfoData ? "Update" : "Add new"}</Button>



        </Form>
    )
}

export default FormContainer