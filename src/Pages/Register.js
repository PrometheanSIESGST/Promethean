import React, { useState ,useEffect} from "react";
import styled from "styled-components";
import { AuthAPI } from "../apis/api";
// import { toast, ToastContainer } from 'react-toastify';
import { BASE_URL } from "../apis/api";
import supabase from '../apis/SupabaseClient'

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

const REGISTER = () => {
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

  const [emailValid, setEmailValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [emailValid1, setEmailValid1] = useState(true);
  const [phoneValid1, setPhoneValid1] = useState(true);
  const [emailValid2, setEmailValid2] = useState(true);
  const [phoneValid2, setPhoneValid2] = useState(true);
  const [emailValid3, setEmailValid3] = useState(true);
  const [phoneValid3, setPhoneValid3] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (emailValue === '' || validateEmail(emailValue)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handleEmailChange1 = (e) => {
    const emailValue1 = e.target.value;
    setEmail1(emailValue1);

    if (emailValue1 === '' || validateEmail(emailValue1)) {
      setEmailValid1(true);
    } else {
      setEmailValid1(false);
    }
  };

  const handleEmailChange2 = (e) => {
    const emailValue2 = e.target.value;
    setEmail2(emailValue2);

    if (emailValue2 === '' || validateEmail(emailValue2)) {
      setEmailValid2(true);
    } else {
      setEmailValid2(false);
    }
  };

  const handleEmailChange3 = (e) => {
    const emailValue3 = e.target.value;
    setEmail3(emailValue3);

    if (emailValue3 === '' || validateEmail(emailValue3)) {
      setEmailValid3(true);
    } else {
      setEmailValid3(false);
    }
  };

  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value;
    setContact(phoneValue);

    if (phoneValue === '' || validatePhone(phoneValue)) {
      setPhoneValid(true);
    } else {
      setPhoneValid(false);
    }
  };
  const handlePhoneChange1 = (e) => {
    const phoneValue1 = e.target.value;
    setContact1(phoneValue1);

    if (phoneValue1 === '' || validatePhone(phoneValue1)) {
      setPhoneValid1(true);
    } else {
      setPhoneValid1(false);
    }
  };
  const handlePhoneChange2 = (e) => {
    const phoneValue2 = e.target.value;
    setContact2(phoneValue2);

    if (phoneValue2 === '' || validatePhone(phoneValue2)) {
      setPhoneValid2(true);
    } else {
      setPhoneValid2(false);
    }
  };
  const handlePhoneChange3 = (e) => {
    const phoneValue3 = e.target.value;
    setContact3(phoneValue3);

    if (phoneValue3 === '' || validatePhone(phoneValue3)) {
      setPhoneValid3(true);
    } else {
      setPhoneValid3(false);
    }
  };


const handleFormSubmit = async (e) => {
  e.preventDefault();
  if (!branch || !leadname || !prn || !email || !contact|| !mem1 || !prn1 || !email1 || !contact1|| !mem2 || !prn2 || !email2 || !contact2|| !mem3 || !prn3 || !email3 || !contact3 ) {
        // return toast.error("Please fill in all required fields.");
        return ;
      }
  try {
    const response = await fetch(BASE_URL,{
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: [
            {
              "Branch": branch,
              "Lead Name": leadname,
              "Prn": prn,
              "Email": email,
              "Contact": contact,
              "Member_1_Name": mem1,
              "Prn_of_Mem_1": prn1,
              "Email_of_Mem_1": email1,
              "Contact_of_Mem_1": contact1,
              "Member_2_Name": mem2,
              "Prn_of_Mem_2": prn2,
              "Email_of_Mem_2": email2,
              "Contact_of_Mem_2":contact2,
              "Member_3_Name": mem3,
              "Prn_of_Mem_3": prn3,
              "Email_of_Mem_3": email3,
              "Contact_of_Mem_3": contact3
            }
          ]
        })
      });
      if (response.ok===true) {
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
        // return toast.success("Registered Successfully");
return ;
      } else {
        console.log('Invalid');
        // return toast.error("Trial again");
        return ;
      }
    } catch (error) {
      const errMsg = error?.response?.data?.message || error?.message || "something went wrong";
      console.log(errMsg);
    //   return toast.error("Oops, something went wrong");
    return ;
    }
  };
  
return(
      <>
        {/* <ToastContainer />
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
                Email(gst id):
                <FormInput type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value);handleEmailChange(e);}}/>
                {!emailValid && email !== '' && <span style={{ color: 'red' }}>Invalid Email</span>}
            </FormLabel>
            <FormLabel>
                Contact:
                <FormInput type="text" name="contact" value={contact} onChange={(e)=>{setContact(e.target.value);handlePhoneChange(e);}}/>
                {!phoneValid && contact !== '' && <span style={{ color: 'red' }}>Invalid Phone Number</span>}
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
                Email(gst id):
                <FormInput type="text" name="email1" value={email1} onChange={(e)=>{setEmail1(e.target.value);handleEmailChange1(e);}}/>
                {!emailValid1 && email1 !== '' && <span style={{ color: 'red' }}>Invalid Email</span>}
            </FormLabel>
            <FormLabel>
                Contact:
                <FormInput type="text" name="contact1" value={contact1} onChange={(e)=>{setContact1(e.target.value);handlePhoneChange1(e);}}/>
                {!phoneValid1 && contact1 !== '' && <span style={{ color: 'red' }}>Invalid Phone Number</span>}
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
                Email(gst id):
                <FormInput type="text" name="email2" value={email2} onChange={(e)=>{setEmail2(e.target.value);handleEmailChange2(e);}} />
                {!emailValid2 && email2 !== '' && <span style={{ color: 'red' }}>Invalid Email</span>}
            </FormLabel>
            <FormLabel>
                Contact:
                <FormInput type="text" name="contact2" value={contact2} onChange={(e)=>{setContact2(e.target.value);handlePhoneChange2(e);}} />
                {!phoneValid2 && contact2 !== '' && <span style={{ color: 'red' }}>Invalid Phone Number</span>}
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
                Email(gst id):
                <FormInput type="text" name="email3" value={email3} onChange={(e)=>{setEmail3(e.target.value);handleEmailChange3(e);}}/>
                {!emailValid3 && email3 !== '' && <span style={{ color: 'red' }}>Invalid Email</span>}
            </FormLabel>
            <FormLabel>
                Contact:
                <FormInput type="text" name="contact3" value={contact3} onChange={(e)=>{setContact3(e.target.value);handlePhoneChange3(e);}}/>
                {!phoneValid3 && contact3 !== '' && <span style={{ color: 'red' }}>Invalid Phone Number</span>}
            </FormLabel>
            {(emailValid && phoneValid && emailValid1 && phoneValid1 && emailValid2 && phoneValid2 && emailValid3 && phoneValid3) && (
              <FormButton type="submit">Submit</FormButton>
            )}
        </FormContainer>
        </Main> */}
      </>
  )
  
}


export default REGISTER;