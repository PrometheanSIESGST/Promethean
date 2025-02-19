import React, { useState } from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import supabase from "../apis/SupabaseClient";

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

const MatrixReg = () => {
  const [branch0, setBranch0] = useState("");
  const [mem0, setMem0] = useState("");
  const [prn0, setPrn0] = useState("");
  const [email0, setEmail0] = useState("");
  const [contact0, setContact0] = useState("");

  const [branch1, setBranch1] = useState("");
  const [mem1, setMem1] = useState("");
  const [prn1, setPrn1] = useState("");
  const [email1, setEmail1] = useState("");
  const [contact1, setContact1] = useState("");

  const [branch2, setBranch2] = useState("");
  const [mem2, setMem2] = useState("");
  const [prn2, setPrn2] = useState("");
  const [email2, setEmail2] = useState("");
  const [contact2, setContact2] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      !branch0 ||
      !mem0 ||
      !prn0 ||
      !email0 ||
      !contact0 ||
      !branch1 ||
      !mem1 ||
      !prn1 ||
      !email1 ||
      !contact1 ||
      !branch2 ||
      !mem2 ||
      !prn2 ||
      !email2 ||
      !contact2
    ) {
      return toast.error("Please fill in all required fields.");
    }

    if (
      !validateEmail(email0) ||
      !validatePhone(contact0) ||
      !validateEmail(email1) ||
      !validatePhone(contact1) ||
      !validateEmail(email2) ||
      !validatePhone(contact2)
    ) {
      return toast.error("Invalid email or phone number.");
    }

    try {
      const { data, error } = await supabase.from("matrix").insert([
        {
          st_name0: mem0,
          prn0: prn0,
          email0: email0,
          contact0: contact0,
          branch0: branch0,
        
          st_name1: mem1,
          prn1: prn1,
          email1: email1,
          contact1: contact1,
          branch1: branch1,
        
          st_name2: mem2,
          prn2: prn2,
          email2: email2,
          contact2: contact2,
          branch2: branch2,
        },
      ]);

      if (error) {
        console.error(error);
        return toast.error("Oops, something went wrong.");
      }

      setBranch0("");
      setMem0("");
      setPrn0("");
      setEmail0("");
      setContact0("");
      setBranch1("");
      setMem1("");
      setPrn1("");
      setEmail1("");
      setContact1("");
      setBranch2("");
      setMem2("");
      setPrn2("");
      setEmail2("");
      setContact2("");

      toast.success("Registered Successfully");
    } catch (error) {
      console.error(error);
      toast.error("Oops, something went wrong.");
    }
  };

  return (
    <>
      <ToastContainer />
      <Main>
        <PromPageHeadText>REGISTRATION FOR Matrix</PromPageHeadText>
        <FormContainer onSubmit={handleFormSubmit}>
        <FormLabel>Member 1</FormLabel>
        <FormLabel>
            Branch:
            <FormInput
              type="text"
              name="branch0"
              value={branch0}
              onChange={(e) => setBranch0(e.target.value)}
            />
          </FormLabel>
          <FormLabel>
            Name:
            <FormInput
              type="text"
              name="mem0"
              value={mem0}
              onChange={(e) => setMem0(e.target.value)}
            />
          </FormLabel>
          <FormLabel>
            PRN:
            <FormInput
              type="text"
              name="prn0"
              value={prn0}
              onChange={(e) => setPrn0(e.target.value)}
            />
          </FormLabel>
          <FormLabel>
            Email:
            <FormInput
              type="text"
              name="email0"
              value={email0}
              onChange={(e) => setEmail0(e.target.value)}
            />
          </FormLabel>
          <FormLabel>
            Contact:
            <FormInput
              type="text"
              name="contact0"
              value={contact0}
              onChange={(e) => setContact0(e.target.value)}
            />
          </FormLabel>

          <FormLabel>Member 2</FormLabel>
          <FormLabel>
            Branch:
            <FormInput
              type="text"
              name="branch1"
              value={branch1}
              onChange={(e) => setBranch1(e.target.value)}
            />
          </FormLabel>
          <FormLabel>
            Name:
            <FormInput
              type="text"
              name="mem1"
              value={mem1}
              onChange={(e) => setMem1(e.target.value)}
            />
          </FormLabel>
          <FormLabel>
            PRN:
            <FormInput
              type="text"
              name="prn1"
              value={prn1}
              onChange={(e) => setPrn1(e.target.value)}
            />
          </FormLabel>
          <FormLabel>
            Email:
            <FormInput
              type="text"
              name="email1"
              value={email1}
              onChange={(e) => setEmail1(e.target.value)}
            />
          </FormLabel>
          <FormLabel>
            Contact:
            <FormInput
              type="text"
              name="contact1"
              value={contact1}
              onChange={(e) => setContact1(e.target.value)}
            />
          </FormLabel>

          <FormLabel>Member 3</FormLabel>
          <FormLabel>
            Branch:
            <FormInput
              type="text"
              name="branch2"
              value={branch2}
              onChange={(e) => setBranch2(e.target.value)}
            />
          </FormLabel>
          <FormLabel>
            Name:
            <FormInput
              type="text"
              name="mem2"
              value={mem2}
              onChange={(e) => setMem2(e.target.value)}
            />
          </FormLabel>
          <FormLabel>
            PRN:
            <FormInput
              type="text"
              name="prn2"
              value={prn2}
              onChange={(e) => setPrn2(e.target.value)}
            />
          </FormLabel>
          <FormLabel>
            Email:
            <FormInput
              type="text"
              name="email2"
              value={email2}
              onChange={(e) => setEmail2(e.target.value)}
            />
          </FormLabel>
          <FormLabel>
            Contact:
            <FormInput
              type="text"
              name="contact2"
              value={contact2}
              onChange={(e) => setContact2(e.target.value)}
            />
          </FormLabel>

          <FormButton type="submit">Register</FormButton>
        </FormContainer>
      </Main>
    </>
  );
};

export default MatrixReg;
