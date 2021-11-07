import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans';
}

#root {
  background: linear-gradient(to top,#fff 0%,#f6f8fa 100%);
  min-height: 100vh;
}

input {
  padding: 10px 15px;
  color: teal;
  font-size: 14px;
  background: transparent;
  border: 1px solid rgba(0, 158, 255, 0.5);
  background: #fff;
  cursor: pointer;
  outline:none;
  border-radius:5px;
}

a {
  color:#009eff;
}
`;
