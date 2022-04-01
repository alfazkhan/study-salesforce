import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg"
import JotFormReact from 'jotform-react';
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings.js";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-10 lg:py-10`;

const FormContainer = styled.div`
  ${tw`text-gray-100 rounded-lg relative bg-gray-900`}
  form {
    ${tw``}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-300`}
    }
  }
`;

const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-10`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-1 mt-2`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm text-primary-500`;
const Input = tw.input`text-gray-100 mt-5`;
const TextArea = tw.textarea`h-24 sm:h-full resize-none mt-5`;
const SubmitButton = tw.div`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-center font-black text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`

function Hidden() {
  const mobile = window.innerWidth < 768
  return (
    <div style={{
      backgroundColor: '#1A202C',
      height: 50,
      width: mobile ? window.innerWidth : window.innerWidth / 2,
      bottom: 50,
      position: 'relative'
    }}></div>
  )
}



export default () => {
  const mobile = window.innerWidth < 768

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [purpose, setPurpose] = useState('')

  const [alertMessage, setAlerts] = useState([{"message":"Hello"}])

  useEffect(() => {
    
  }, [alertMessage])
  

  const nameHandler = (e) => {
    setName(e.target.value)
  }
  const emailHandler = (e) => {
    setEmail(e.target.value)
  }
  const purposeHandler = (e) => {
    setPurpose(e.target.value)
  }

  const validate = (param, message) => {
    const alerts = alertMessage
    if (param === "") {
      alert(message)
      return false
    }
    return true
  }

  const submitHandler = () => {

    if (
      validate(name, "Name can't be empty") &&
      validate(email, "Email can't be empty") &&
      validate(purpose, "Purpose can't be empty")
    ) {
      console.log({ "name": name, "email": email, "purpose": purpose })
    }

  }

  return (
    <Container id="connect">


      <Content>
        <FormContainer>
          <div tw="p-10">
            <Heading>Let's <span tw="text-primary-500">Connect</span></Heading>

            <form action="#">
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Your Name</Label>
                    <Input id="name-input" type="text" name="name" onChange={nameHandler} placeholder="E.g. John Doe" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Your Email Address</Label>
                    <Input id="email-input" type="email" name="email" onChange={emailHandler} placeholder="E.g. john@mail.com" />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer tw="flex flex-col">
                    <FormLabel sx={{ color: '#FF9900', fontSize: '14px', fontFamily: 'Nunito', fontWeight: '600' }}>You want to connect for:</FormLabel>
                    <FormControl >
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        onChange={purposeHandler}
                      >
                        {/* <FormControlLabel value="Training" control={<Radio sx={{color:'#fff'}}/>} label="Training" /> */}
                        <FormControlLabel value="Mentoring/Training" control={<Radio sx={{ color: '#fff' }} />} label="Mentoring/Training" />
                        <FormControlLabel value="Certification Preparation" control={<Radio sx={{ color: '#fff' }} />} label="Certification Preparation" />
                        <FormControlLabel value="Career Counselling" control={<Radio sx={{ color: '#fff' }} />} label="Career Counselling" />
                      </RadioGroup>
                    </FormControl>
                  </InputContainer>
                </Column>
              </TwoColumn>

              <SubmitButton onClick={submitHandler}>Submit</SubmitButton>
            </form>
            {/* <JotFormReact
              formURL="https://form.jotform.com/220654950543052"
              initialHeight={300}
              autoResize={true}
              style={{
                width: mobile ? window.innerWidth : window.innerWidth / 3,
              }}
              tw="mx-auto"
            />
            <Hidden /> */}
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};
