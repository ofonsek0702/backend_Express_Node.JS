import React, { useRef } from "react";
import axios from 'axios';
import styled from "styled-components";

const FormContainer = styled.form`
    width: 100%;
    margin-top: 30px;
    display: flex;
    background-color: white;
    flex-wrap: wrap;
    align-items: flex-end;
    gap:10px;
    padding: 20px;
`;


const InputArea = styled.div`   
    display: flex;
    background-color: white;
    flex-direction: column;    
`;

const Input = styled.input`   
    width: 120px;
    padding: 0 10px;
    border: 1px solid white;
    border-radius:5px;
    height: 40px;
`;

const Label = styled.label` 
`;

const Button = styled.button`
    cursor: pointer;
    border-radius: 5px;
    border: none;
    height: 40px;
    color: white;
    background-color: blue;   
    padding: 10px;
`;

const Form = () =>{
    const ref = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const name = e.target.elements.name.value;
            console.log(name);
            const age = e.target.elements.age.value;
            console.log(age);
            const email = e.target.elements.email.value;
            console.log(email);
            const department = e.target.elements.department.value;
            console.log(department);

            const response = await axios.post('http://localhost:3333/employees/add', {
              name,
              age:Number(age),
              email,
              department,
            });
      
            console.log(response.data); 
          
        } catch (error) {
          console.error(error);          
        }
      };

    return (
        <FormContainer  onSubmit={handleSubmit} ref = {ref}>
            <InputArea>
                <Label>Name</Label>
                <Input name="name" />
            </InputArea>
            <InputArea>
                <Label>Age</Label>
                <Input name="age" />
            </InputArea>
            <InputArea>
                <Label>Email</Label>
                <Input name="email" />
            </InputArea>
            <InputArea>
                <Label>Department</Label>
                <Input name="department" />
            </InputArea>

            <Button type = "submit"> Save </Button>
        </FormContainer>
    );

};

export default Form;
