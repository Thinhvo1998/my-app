import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const FormField = (props) => {
   return (
      <FormGroup>
         <Label>{props.label}</Label>
         <Input
            name={props.name}
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            
         />
      </FormGroup>
   );
};

export default FormField;