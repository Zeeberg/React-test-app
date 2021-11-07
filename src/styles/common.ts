import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  color: #009eff;
  position: relative;
  display: inline-block;
  margin-bottom: 50px;
  margin-top: 20px;
  &::before {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 17%;
    height: 2px;
    background-color: #009eff;
  }
`;

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  @media screen and (max-width:620px) {
    padding: 0 20px;
  }
`;

export const FormWrapper = styled.div`
  position: relative;
  background: #fff;
  padding: 15px;
  box-shadow: 0 15px 30px rgb(0 48 120 / 10%);
  max-width: 500px;
  border-radius: 5px;
  @media screen and (max-width:810px) {
    width: 100%;
  }
`;

export const FormImage = styled.img`
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  left:calc(100% + 60px);
  max-width: 500px;

  @media screen and (max-width:1080px) {
    max-width: 250px;
  }

  @media screen and (max-width:1080px) {
    max-width: 250px;
  }

  @media screen and (max-width:810px) {
    display:none;
  }
`;


export const BackLinkWrapper = styled.div`
  margin-bottom:10px;
`;

export const PageContent = styled.div`
  @media screen and (max-width:810px) {
    display:flex;
    justify-content: center;
  }
`;