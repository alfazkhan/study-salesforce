import React, { useState } from "react";
import tw from "twin.macro";
import { ReactComponent as EmailNewsletterIconBase } from "../../images/email-newsletter-icon.svg"
import { Container as ContainerBase } from "components/misc/Layouts.js"
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton } from "components/misc/Buttons.js";
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';


const Container = tw(ContainerBase)`bg-secondary-800 -mx-8`
const Content = tw.div`max-w-screen-xl mx-auto m-10`;

const Row = tw.div`flex items-center justify-center flex-col lg:flex-col px-8`
const TextColumn = tw.div`flex items-center flex-col sm:flex-row mb-5`
const FormColumn = tw.div`flex flex-col mt-5 lg:mt-0 mx-auto w-full sm:w-auto`

const EmailNewsletterIcon = tw(EmailNewsletterIconBase)`w-16 h-16 text-primary-500`
const HeadingInfoContainer = tw.div`sm:ml-6 mt-6 sm:mt-0`
const Heading = tw(SectionHeading)`text-gray-100 sm:text-left leading-none`
const Description = tw.p`text-gray-500 font-medium text-sm max-w-sm mt-2 sm:mt-1 text-center sm:text-left`

const Form = tw.div`text-sm max-w-sm sm:max-w-none mx-auto flex flex-col`
const Input = tw.input`w-full sm:w-auto block sm:inline-block mb-3 px-16 text-left py-4 rounded bg-secondary-600 tracking-wider font-bold border border-secondary-600 focus:border-secondary-300 focus:outline-none sm:rounded-r-none hover:bg-secondary-500 transition duration-300 text-gray-200`
const Button = tw(PrimaryButton)`w-full sm:w-auto mt-10 sm:mt-0 sm:rounded-l-none py-4 bg-primary-500 text-gray-100 hocus:bg-green-700 hocus:text-gray-300 border border-green-500 hocus:border-green-700`


export default (props) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const nameChangeHandler = (e) => {
    setName(e.target.value)
  }

  const emailChangeHandler = (e) => {
    setEmail(e.target.value)
  }

  const submitHandler = () => {

    localStorage.setItem('submitted', true);
    localStorage.setItem('hidden', true);

    
    const data = {
      "name": email,
      "email": email
    }
    console.log(data)

    axios.post(`https://study-salesforce.herokuapp.com/news_letter/`, data)
      .then(res => {
        console.log(res)
        props.close()
      })
      .catch(res => {
        console.log(res)
      })

  }

  return (
    <Container tw="mx-1">
      <Content>
        <Row>
          <IconButton
            aria-label="close"
            onClick={props.close}
            sx={{
              color: 'red',
              marginLeft:'auto',
              border: '1px solid red'
            }}
          >
            <CloseIcon />
          </IconButton>
          <TextColumn>
            {/* <EmailNewsletterIcon /> */}
            <HeadingInfoContainer>
              <Heading>Newsletter</Heading>
              <Description>Subscribe now to get our latest blog posts.</Description>
            </HeadingInfoContainer>
          </TextColumn>
          <FormColumn>
            <Form>
              {/* <Input name="name" type="text" onChange={nameChangeHandler} placeholder="Your Name" /> */}
              <Input name="email" type="email" onChange={emailChangeHandler} placeholder="Your Email Address" />
              <Button onClick={submitHandler}>Subscribe Now</Button>
            </Form>
          </FormColumn>
        </Row>
      </Content>
    </Container>
  );
};
