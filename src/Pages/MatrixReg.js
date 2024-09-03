import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import { QRCodeSVG } from "qrcode.react";
import { BASE_URL } from "../apis/api";

import qr from "../Images/QRCode/treasurer_qr.jpg";
// import first from "../Images/QRCode/first.png"
import second from "../Images/QRCode/second.png"


// Define the dropdown options
const branchOptions = ["EXTC", "ECS", "CE", "IOT", "AIDS", "AIML", "IT"];

// Define animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Main = styled.div`
  max-width: 560px;
  width:100%;
  margin: 100px auto;
  animation: ${fadeIn} 1s ease-out;
  padding: 10px;
  background-image: url(${second});
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay; 
  background-size: cover; 

  @media ${(props) => props.theme.MediaQueries.s.query} {
    max-width: 560px;
    padding-top: 20px;
  }
  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 720px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    max-width: 1200px;
  }
`;

const PromPageHeadText = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  text-shadow: 0 0 5px #ff0000, 0 0 10px #0000FF;
  color: ${(props) => props.theme.Colors.Header};
  font-family: ${(props) => props.theme.Fonts.Josefin};
  font-weight: bold;
  text-align: center;
  animation: ${fadeIn} 1s ease-out;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    margin-bottom: 50px;
    font-size: 35px;
    margin-top: 60px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    margin-bottom: 50px;
    font-size:38px;
    margin-top: 60px;
  }
`;

const Section = styled.div`
  margin-bottom: 20px;
  animation: ${fadeIn} 1s ease-out;
  width: 100%;
`;

const BranchOption = styled.option`
  background: transparent;
  color: #000000;
`;

// Shared Styles
const FormContainer = styled.form`
  border: 2px solid #ffffff;
  padding: 30px;
  margin: 20px;
  ${'' /* background-image: url(${first}); */}
  border-radius: 10px;
  ${'' /* background-size: cover; 
  background-position: center;  */}
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.8); 
  ${'' /* background-blend-mode: overlay;  */}
  animation: ${fadeIn} 1s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.2);
    transform: scale(1.025);
  }
  transition: all 0.3s ease;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    padding: 50px;
    margin: 50px;
  }

  @media ${(props) => props.theme.MediaQueries.s.query} {
    padding-top: 40px;
    padding-bottom:40px;
    margin: 50px;
  }
`;

const FormLabel = styled.label`
  display: block;
  text-align: center;
  font-size: 18px;
  margin-bottom: 10px;
  color: #ffffff;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 20px;
  }
`;

const FormInput = styled.input`
  width: 100%;
  max-width: 500px;
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  background-color: transparent;
  color: #ffffff;
  animation: ${fadeIn} 1s ease-out;
`;

const FormSelect = styled.select`
  width: 100%;
  max-width: 500px;
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  background-color: transparent;
  color: #ffffff;
  animation: ${fadeIn} 1s ease-out;
`;

const FormButton = styled.button`
  padding: 12px 80px;
  background-color: #ff9900;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: block;
  margin: 0 auto;
  font-size: 16px;
  animation: ${fadeIn} 1s ease-out;

  &:hover {
    background-color: #cc6600;
  }
`;

const RadioLabel = styled.label`
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
  padding: 5px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 35px;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    background-color: transparent;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }
`;

const RadioInput = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + ${RadioLabel}:before {
    background-color: #ff9900;
    border-color: #ff9900;
  }

  &:checked + ${RadioLabel}:after {
    content: "";
    position: absolute;
    left: 7px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    background-color: #ffffff;
    border-radius: 50%;
  }
`;

const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const QRCodeContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const UPIQRCodeImage = styled.img`
  width: 200px;
  height: 200px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  margin-top: 20px;
  animation: ${fadeIn} 1s ease-out;
`;


const MatrixReg = () => {
    const [teamName, setTeamName] = useState(""); // State for team name
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

    const [branch3, setBranch3] = useState("");
    const [mem3, setMem3] = useState("");
    const [prn3, setPrn3] = useState("");
    const [email3, setEmail3] = useState("");
    const [contact3, setContact3] = useState("");
  
    const [paymentMethod, setPaymentMethod] = useState("cash");
    const [transactionid, setTransactionid] = useState("");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = {
        teamName: teamName,
  
        branch0: branch0,
        name0: mem0,
        prn0: prn0,
        email0: email0,
        contact0: contact0,
        
        branch1: branch1,
        name1: mem1,
        prn1: prn1,
        email1: email1,
        contact1: contact1,
  
        branch2: branch2,
        name2: mem2,
        prn2: prn2,
        email2: email2,
        contact2: contact2,

        branch3: branch3,
        name3: mem3,
        prn3: prn3,
        email3: email3,
        contact3: contact3,
  
        paymentMethod: paymentMethod,
        transactionid: transactionid
      };
  
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      setTeamName(""); // Clear team name field
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
      setMem3("");
      setPrn3("");
      setEmail3("");
      setContact3("");
  
      setPaymentMethod("cash");
      setTransactionid("");
  
      toast.success("Registered Successfully");
    } catch (error) {
      console.error(error);
      toast.error("Oops, something went wrong.");
    }
  }; 

  return (
    <>
      <ToastContainer />
      <center>
        <Main>
          <PromPageHeadText>REGISTRATION FOR <br />MATRIX 2024-25</PromPageHeadText>
        <FormContainer onSubmit={handleFormSubmit}>
          <Section>
            <FormLabel>
              Team Name : 
              <FormInput
                type="text"
                name="teamName"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
            </FormLabel>
          </Section>
          
          <Section>
            <FormLabel>Member 1</FormLabel>
            <FormLabel>
              Branch : 
              <FormSelect
                name="branch0"
                value={branch0}
                onChange={(e) => setBranch0(e.target.value)}
              >
                <BranchOption value="">Select Branch</BranchOption>
                {branchOptions.map((branch) => (
                  <BranchOption key={branch} value={branch}>
                    {branch}
                  </BranchOption>
                ))}
              </FormSelect>
            </FormLabel>
            <FormLabel>
              Name : 
              <FormInput
                type="text"
                name="mem0"
                value={mem0}
                onChange={(e) => setMem0(e.target.value)}
              />
            </FormLabel>
            <FormLabel>
              Roll No. : 
              <FormInput
                type="text"
                name="prn0"
                value={prn0}
                onChange={(e) => setPrn0(e.target.value)}
              />
            </FormLabel>
            <FormLabel>
              Email : 
              <FormInput
                type="text"
                name="email0"
                value={email0}
                onChange={(e) => setEmail0(e.target.value)}
              />
            </FormLabel>
            <FormLabel>
              Contact : 
              <FormInput
                type="text"
                name="contact0"
                value={contact0}
                onChange={(e) => setContact0(e.target.value)}
              />
            </FormLabel>
          </Section>

          <Section>
            <FormLabel>Member 2</FormLabel>
            <FormLabel>
              Branch : 
              <FormSelect
                name="branch1"
                value={branch1}
                onChange={(e) => setBranch1(e.target.value)}
              >
                <BranchOption value="">Select Branch</BranchOption>
                {branchOptions.map((branch) => (
                  <BranchOption key={branch} value={branch}>
                    {branch}
                  </BranchOption>
                ))}
              </FormSelect>
            </FormLabel>
            <FormLabel>
              Name : 
              <FormInput
                type="text"
                name="mem1"
                value={mem1}
                onChange={(e) => setMem1(e.target.value)}
              />
            </FormLabel>
            <FormLabel>
            Roll No. : 
              <FormInput
                type="text"
                name="prn1"
                value={prn1}
                onChange={(e) => setPrn1(e.target.value)}
              />
            </FormLabel>
            <FormLabel>
              Email : 
              <FormInput
                type="text"
                name="email1"
                value={email1}
                onChange={(e) => setEmail1(e.target.value)}
              />
            </FormLabel>
            <FormLabel>
              Contact : 
              <FormInput
                type="text"
                name="contact1"
                value={contact1}
                onChange={(e) => setContact1(e.target.value)}
              />
            </FormLabel>
          </Section>

          <Section>
            <FormLabel>Member 3</FormLabel>
            <FormLabel>
              Branch : 
              <FormSelect
                name="branch2"
                value={branch2}
                onChange={(e) => setBranch2(e.target.value)}
              >
                <BranchOption value="">Select Branch</BranchOption>
                {branchOptions.map((branch) => (
                  <BranchOption key={branch} value={branch}>
                    {branch}
                  </BranchOption>
                ))}
              </FormSelect>
            </FormLabel>
            <FormLabel>
              Name : 
              <FormInput
                type="text"
                name="mem2"
                value={mem2}
                onChange={(e) => setMem2(e.target.value)}
              />
            </FormLabel>
            <FormLabel>
            Roll No. : 
              <FormInput
                type="text"
                name="prn2"
                value={prn2}
                onChange={(e) => setPrn2(e.target.value)}
              />
            </FormLabel>
            <FormLabel>
              Email : 
              <FormInput
                type="text"
                name="email2"
                value={email2}
                onChange={(e) => setEmail2(e.target.value)}
              />
            </FormLabel>
            <FormLabel>
              Contact : 
              <FormInput
                type="text"
                name="contact2"
                value={contact2}
                onChange={(e) => setContact2(e.target.value)}
              />
            </FormLabel>
          </Section>

          <Section>
            <FormLabel>Member 4</FormLabel>
            <FormLabel>
              Branch : 
              <FormSelect
                name="branch3"
                value={branch3}
                onChange={(e) => setBranch3(e.target.value)}
              >
                <BranchOption value="">Select Branch</BranchOption>
                {branchOptions.map((branch) => (
                  <BranchOption key={branch} value={branch}>
                    {branch}
                  </BranchOption>
                ))}
              </FormSelect>
            </FormLabel>
            <FormLabel>
              Name : 
              <FormInput
                type="text"
                name="mem3"
                value={mem3}
                onChange={(e) => setMem3(e.target.value)}
              />
            </FormLabel>
            <FormLabel>
            Roll No. : 
              <FormInput
                type="text"
                name="prn3"
                value={prn3}
                onChange={(e) => setPrn3(e.target.value)}
              />
            </FormLabel>
            <FormLabel>
              Email : 
              <FormInput
                type="text"
                name="email3"
                value={email3}
                onChange={(e) => setEmail3(e.target.value)}
              />
            </FormLabel>
            <FormLabel>
              Contact : 
              <FormInput
                type="text"
                name="contact3"
                value={contact3}
                onChange={(e) => setContact3(e.target.value)}
              />
            </FormLabel>
          </Section>

          <Section>
          <FormLabel>REGISTRATION FEES PER TEAM RS.240</FormLabel>
            <FormLabel>Payment Method : </FormLabel>
            <RadioContainer>
            <RadioInput
              type="radio"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={() => setPaymentMethod("cash")}
              id="cash-option"
            />
            <RadioLabel htmlFor="cash-option">Cash</RadioLabel>

            <RadioInput
              type="radio"
              value="online"
              checked={paymentMethod === "online"}
              onChange={() => setPaymentMethod("online")}
              id="online-option"
            />
            <RadioLabel htmlFor="online-option">Online</RadioLabel>
          </RadioContainer>

            {paymentMethod === "online" && (
              <QRCodeContainer>
                <FormLabel>UPI ID : omkar18december@okhdfcbank</FormLabel>
                <UPIQRCodeImage
                  src={qr} // Add your QR code image path here
                  alt="UPI QR Code"
                />
                <QRCodeSVG
                  value=""
                  size={128}
                  fgColor="#ffffff"
                  style={{ display: 'none' }} // Hide default QR code
                />
                <FormLabel>
              Transaction ID : 
              <FormInput required
                type="text"
                name="transactionid"
                value={transactionid}
                onChange={(e) => setTransactionid(e.target.value)}
              />
            </FormLabel>
              </QRCodeContainer>
            )}
          </Section>

          <FormButton type="submit">Register</FormButton>
        </FormContainer>
        </Main>
      </center>
    </>
  );
};

export default MatrixReg;
