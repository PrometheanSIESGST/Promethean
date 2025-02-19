import React, { useEffect,useState } from "react";
import Gallerycard from "../Constants/GalleryCard";
import { Data } from "../Constants/GalleryData.js";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Option = styled.option`
  font-family: ${(props) => props.theme.Fonts.Josefin};
  font-weight: 400;
  font-size: 14px;
  text-align:center;
  cursor: pointer;
  padding:15px;
  background: #0B1D27;
  color: ${(props) => props.theme.Colors.Header};
  margin-bottom: 10px;
  margin-top: 30px;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 18px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    font-size: 20px;
  }`;

const Select = styled.select`
  font-family: ${(props) => props.theme.Fonts.Josefin};
  font-weight: 400;
  font-size: 20px;
  text-align:center;
  cursor: pointer;
  background: #0B1D27;
  color: ${(props) => props.theme.Colors.Header};
  margin-bottom: 10px;
  margin-top: 30px;
  border:none;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 24px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    font-size: 27px;
  }`;


function Section(props){
  const [gallery, setGallery] = useState(0);
  const [value, setValue] = useState(0);
  useEffect(() => {
      setValue(0);
      setGallery(props.gallery);
    }, [props.gallery]);
    var index=0
    return(
        <div>
        <center>
          <Select value={value} onChange={e=>setValue(e.target.value)}>
            {Data[gallery].Photo.map((data)=>
                (<Option value={index++}>{data.sectionTitle}</Option>)
            )
            }
          </Select>
          </center>
          <div>
            <FlexDiv>
            {Data[gallery].Photo[value].image.map((result) => {
              return (<Gallerycard photo={result.photo}/>);})
            }
            </FlexDiv>
          </div>
      </div>
  )
}


export default Section;