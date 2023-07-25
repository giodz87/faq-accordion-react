import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
* {
box-sizing: border-box;
margin: 0;
padding: 0;

}
body {
  
  background: linear-gradient(180deg, #B068E9 0%, #6463E7 100%);
  background-repeat: no-repeat;
 overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
 height: 100vh;
}
`;
export default GlobalStyled;
