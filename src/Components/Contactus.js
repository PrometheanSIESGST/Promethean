import React, { Component } from "react";
import styled from "styled-components";

const Contactsection = styled.div`
  padding: 80px 0;
  text-align: center;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 100%
  }
`;

const Innerwidth = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 0 20px;
    @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 100%
  }
`;

const Contacth2 = styled.h2`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 35px;
  color: #ffffff;
    @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 100%
  }
`;

const Contacth1 = styled.h1`
  font-size: 8px;
  color: #888;
  margin-bottom: 20px;
  text-transform: capitalize;
  letter-spacing: 2px;
  font-weight: 400;
    @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 100%
  }
`;

const Form_content = styled.input`
  margin-top: 20px;
  background: none;
  border: none;
  outline: none;
  border-bottom: 1px solid;
  color: #888;
  padding: 10px 6px;
  font-size: 14px;
  margin-bottom: 40px;
  float: left;
  width: 270px;
    @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 100%
  }
`;

const Message = styled.textarea`
  margin-top: 20px;
  background: none;
  border: none;
  outline: none;
  border-bottom: 1px solid;
  color: #888;
  padding: 10px 6px;
  font-size: 14px;
  margin-bottom: 40px;
  float: left;
  width: 270px;
  max-width: 100%;
    @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 100%
  }
`;

const Button_style = styled.button`
  background: none;
  background-color: rgba(206, 224, 2, 0.5);
  color: white;
  padding: 12px 40px;
  border-radius: 8px;
  text-transform: uppercase;
  font-size: 14px;
  transition: 0.4s linear;
  cursor: pointer;

  &:hover {
    border: 1px solid rgba(206, 224, 2, 0.5);
    background-color: transparent;
    color: #fff;
  }
    @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 40%
  }
`;

function ContactUs() {
  return (
    <>
      <Contactsection>
        <div class="contact-section">
          <Innerwidth>
            <div class="inner-width">
              <Contacth1>
                <h1> Fill out the form and we will be touch in soon</h1>
              </Contacth1>
              <Contacth2>
                <h2>How can we help you?</h2>
              </Contacth2>
              <br></br>
              <Form_content
                type="text"
                class="name"
                placeholder="Your Name"
              ></Form_content>
              <Form_content
                type="email"
                class="email"
                placeholder="Your Email"
              ></Form_content>
              <Form_content
                type="tell"
                class="mobile_no"
                placeholder="Your mobile"
              ></Form_content>
              <Message rows="1" placeholder="Message" class="message"></Message>
              <Button_style>Send Message</Button_style>
            </div>
          </Innerwidth>
        </div>
      </Contactsection>
    </>
  );
}

export default ContactUs;
