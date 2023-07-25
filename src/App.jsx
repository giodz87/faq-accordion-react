import GlobalStyled from "./styles-components/globalStyle";
import styled from "styled-components";
import Accordion from "./components/AccordionCard";
import Imgmob from "../src/images/mobile.svg";
import PaMobile from "../src/images/pa-mobile.svg";
import PaDesktop from "../src/images/pa-desktop.svg"
import Box from "../src/images/box.svg"
import Desktop from "../src/images/desktop.svg"
function App() {
  return (
    <Section>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
      <div>
        <a>
          <img className="mobile" src={Imgmob} alt="" />
          <img className="mobile" src={PaMobile} alt="" />
          <img className="desktop" src={PaDesktop} alt=""/>
          <img className="desktop" src={Box} alt="" />
          <img  className="desktop" src={Desktop} alt="" />
        </a>
        
      </div>
      <section>
      <h1>FAQ</h1>
      <div>
      
        <Accordion />
      </div>
      </section>
      <GlobalStyled />
    </Section>
  );
}

export default App;

const Section = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: start;
position: relative;
width: 327px;
height: 535px;
 border-radius: 23px;
background: #FFF;
box-shadow: 0px 50px 50px -20px rgba(53, 18, 122, 0.50);
padding: 24px;
gap: 38px;
.desktop {
  display: none;
}
a img {
  position: absolute;
  width: 237px;
  top: 0;
transform: translate(-50%,-60%);

}
a img:nth-child(2) {
 transform: translate(-50%,5px);
  position: absolute ;
}
section {
  display: flex;
  flex-direction:  column;
  align-items: center;
  gap: 38px;
  margin-top: 40px;
}
h1 {
  color: #1E1F36;
font-family: Kumbh Sans;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
 
}

@media (min-width: 1440px) {
  padding: 65px;
  width: 920px;

flex-direction: row;
justify-content: space-between;
align-items: flex-start;
text-align: start;

section {
  margin-top: 0;
  align-items: start;
  padding-right: 5%;

}
.desktop {
  display: flex;
}
.mobile {
  display: none;
}
 a img {
  position: absolute;
 
 } 
a img:nth-child(3) {
  clip-path: inset(30% 0 15% 53%);
  width: 964px;
top: 55%;
left: -15%;
}
a img:nth-child(4){
  top: 57%;
  left: 0%;
  width: 135px;
    height: 130px;
  z-index: 1;
}
a img:nth-child(5) {
  clip-path: inset(0% 0 0% 18.5%);
  width: 472px;
  top: 52%;
  left: 16%;
 
}
}
`;
