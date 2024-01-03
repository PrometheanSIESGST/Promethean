import React, { useState ,useEffect} from "react";
import styled from "styled-components";
import { AuthAPI } from "../apis/api";
import { toast, ToastContainer } from 'react-toastify';

const Main = styled.div`
  max-width: 320px;
  margin: 150px auto;
  @media ${(props) => props.theme.MediaQueries.s.query} {
    max-width: 560px;
  }
  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 720px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    max-width: 1200px;
  }
`;

const PromPageHeadText = styled.p`
  margin-bottom: 30px;
  font-size: 23px;
  color: ${(props) => props.theme.Colors.Header};
  font-family: ${(props) => props.theme.Fonts.Josefin};
  font-weight: bold;
  text-align: center;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    margin-bottom: 50px;
    font-size: 35px;
    margin-top: 60px;
  }
`;

const FormContainer = styled.form`
border: 2px solid #ffffff; 
padding: 20px;
border-radius: 10px; 
`;

const FormLabel = styled.label`
display: block;
margin-bottom: 10px;
color: #ffffff; 
`;

const FormInput = styled.input`
width: 100%;
margin-top: 5px;
margin-bottom: 10px;
padding: 10px;
border: 1px solid #ffffff; 
border-radius: 5px; 
background-color: transparent; 
color: #ffffff;
`;

const FormButton = styled.button`
padding: 15px 100px; 
  background-color: #ff9900; 
  color: #ffffff; 
  border: none;
  border-radius: 8px; 
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: block;
  margin: 0 auto; 
  
  &:hover {
    background-color: #cc6600; 
  }
`;

const Register = () => {
const [branch,setBranch]=useState("");
const [leadname,setLeadName]=useState("");
const [prn,setPrn]=useState("");
const [email,setEmail]=useState("");
const [contact,setContact]=useState("");
const [mem1,setMem1]=useState("");
const [prn1,setPrn1]=useState("");
const [email1,setEmail1]=useState("");
const [contact1,setContact1]=useState("");
const [mem2,setMem2]=useState("");
const [prn2,setPrn2]=useState("");
const [email2,setEmail2]=useState("");
const [contact2,setContact2]=useState("");
const [mem3,setMem3]=useState("");
const [prn3,setPrn3]=useState("");
const [email3,setEmail3]=useState("");
const [contact3,setContact3]=useState("");

const handleFormSubmit = async () => {
   // setLoading(true)
  try {
      if (!branch || !leadname || !prn || !email || !contact|| !mem1 || !prn1 || !email1 || !contact1|| !mem2 || !prn2 || !email2 || !contact2|| !mem3 || !prn3 || !email3 || !contact3 ) {
        return toast.error("Please fill in all required fields.");
      }

      // // Email validation
      // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // if (!emailRegex.test(email)) {
      //   return toast.error("Please enter a valid email address.");
      // }

      // // Phone number validation 
      // const phoneRegex = /^\d{10}$/;
      // if (!phoneRegex.test(contact)) {
      //   return toast.error("Please enter a valid 10-digit phone number.");
      // }
      const data = await AuthAPI.postRegister({
        "branch": branch,
        "leadname": leadname,
        "prn": prn,
        "email": email,
        "contact": contact,
        "mem1": mem1,
        "prn1": prn1,
        "email1": email1,
        "contact1": contact1,
        "mem2": mem2,
        "prn2": prn2,
        "email2": email2,
        "contact2":contact2,
        "mem3": mem3,
        "prn3": prn3,
        "email3": email3,
        "contact3": contact3
      })

      if (data){
          console.log("Success");
          setBranch('');
          setLeadName('');
          setPrn('');
          setEmail('');
          setContact('');
          setMem1('');
          setPrn1('');
          setEmail1('');
          setContact1('');
          setMem2('');
          setPrn2('');
          setEmail2('');
          setContact2('');
          setMem3('');
          setPrn3('');
          setEmail3('');
          setContact3('');
          return toast.success("Registered Successfully");
          
      }
      else{
        console.log('Invalid');
        return toast.error("Trial again");
      }
  } catch (error) {
      const errMsg = error?.response?.data?.message || error?.message || "something went wrong"
      console.log(errMsg)
      return toast.error("Oops,something went wrong");
  } finally {
      // setLoading(false)
  }
}

return(
      <>
        <ToastContainer />
        <Main>
        <PromPageHeadText>
            REGISTRATION FOR SUSTAIN-X
        </PromPageHeadText>
        <FormContainer onSubmit={handleFormSubmit}>
            <FormLabel>
                Branch:
                <FormInput type="text" name="branch" value={branch} onChange={(e)=>{setBranch(e.target.value)}}/>
            </FormLabel>
            <FormLabel>
                Lead Name:
                <FormInput type="text" name="leadname" value={leadname} onChange={(e)=>{setLeadName(e.target.value)}}/>
            </FormLabel>
            <FormLabel>
                PRN:
                <FormInput type="text" name="prn" value={prn} onChange={(e)=>{setPrn(e.target.value)}}/>
            </FormLabel>
            <FormLabel>
                Email:
                <FormInput type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </FormLabel>
            <FormLabel>
                Contact:
                <FormInput type="text" name="contact" value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
            </FormLabel>
            <FormLabel>
                Member 1 Name:
                <FormInput type="text" name="mem1" value={mem1} onChange={(e)=>{setMem1(e.target.value)}}/>
            </FormLabel>
            <FormLabel>
                PRN:
                <FormInput type="text" name="prn1" value={prn1} onChange={(e)=>{setPrn1(e.target.value)}}/>
            </FormLabel>
            <FormLabel>
                Email:
                <FormInput type="text" name="email1" value={email1} onChange={(e)=>{setEmail1(e.target.value)}}/>
            </FormLabel>
            <FormLabel>
                Contact:
                <FormInput type="text" name="contact1" value={contact1} onChange={(e)=>{setContact1(e.target.value)}}/>
            </FormLabel>
            <FormLabel>
                Member 2 Name:
                <FormInput type="text" name="mem2" value={mem2} onChange={(e)=>{setMem2(e.target.value)}}/>
            </FormLabel>
            <FormLabel>
                PRN:
                <FormInput type="text" name="prn2" value={prn2} onChange={(e)=>{setPrn2(e.target.value)}}/>
            </FormLabel>
            <FormLabel>
                Email:
                <FormInput type="text" name="email2" value={email2} onChange={(e)=>{setEmail2(e.target.value)}} />
            </FormLabel>
            <FormLabel>
                Contact:
                <FormInput type="text" name="contact2" value={contact2} onChange={(e)=>{setContact2(e.target.value)}} />
            </FormLabel>
            <FormLabel>
                Member 3 Name:
                <FormInput type="text" name="mem3" value={mem3} onChange={(e)=>{setMem3(e.target.value)}}/>
            </FormLabel>
            <FormLabel>
                PRN:
                <FormInput type="text" name="prn3" value={prn3} onChange={(e)=>{setPrn3(e.target.value)}} />
            </FormLabel>
            <FormLabel>
                Email:
                <FormInput type="text" name="email3" value={email3} onChange={(e)=>{setEmail3(e.target.value)}}/>
            </FormLabel>
            <FormLabel>
                Contact:
                <FormInput type="text" name="contact3" value={contact3} onChange={(e)=>{setContact3(e.target.value)}}/>
            </FormLabel>
            <FormButton type="submit">Submit</FormButton>
        </FormContainer>
        </Main>
      </>
  )
  
}


export default Register;