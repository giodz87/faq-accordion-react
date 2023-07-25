import styled from "styled-components";
import arrow from "../images/icon-arrow-down.svg";
export default function AccordionItem(props) {
  const { visible, accordionClck, itemNumber, title, content } = props;
  return (
    <Section>
      <div>
     
        <div onClick={() => accordionClck(itemNumber) } style={
    visible !== itemNumber
      ? { fontWeight:  '400' }
      : { fontWeight:  '700'}
              }>
          {title }
          <img src={arrow} alt=""  style={visible !== itemNumber ? { rotate: "0deg" } : { rotate: "180deg"}}/>
       
         {visible === itemNumber ? <p>{content}      </p> : null}
         <hr/>
        </div>
     
       
      </div>
  
    </Section>
  );
}

const Section = styled.div`
display: flex;
min-height: 68px;
flex-direction: column;
justify-content: space-between;
align-items: center;
position: relative;

div div:nth-child(1) {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 279px;

cursor: pointer;

}
img {
  width: 8px;
height: 4px;
position: absolute;
right: 0;
top: 7px;
transition: 0.3s;
}
div {
  color: #4B4C5F;
font-family: Kumbh Sans;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;

}
div:hover {
  color: #F47B56;
}
p {
  color: #787887;
font-family: Kumbh Sans;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px; 
transition: 0.5s;
}
hr {
  
  margin-top: 11px;
  width: 279px;
  background: #E8E8EA;
}
@media (min-width: 1440px) {
  div {
    font-size: 14px;
  }
}
`;
