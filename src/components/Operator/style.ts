import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const List = styled.div`
  width: 100%;
  max-width: 830px;
  padding: 10px;
  box-shadow: 0 15px 30px rgb(0 48 120 / 10%);
  border-radius: 10px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width:620px) {
    flex-direction: column;
    align-items:center;
  }
  
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  transition: transform .3s ease;
`;

export const Item = styled.div`
  display: flex;
  background-color: #fff;
  width: 250px;
  height: 250px;
  border: 1px solid rgba(0, 158, 255, 0.5);
  display: block;
  border-radius: 8px;
  cursor: pointer;
  padding: 20px;
  overflow:hidden;

  &:hover ${Logo} {
    transform: scale(1.05);
  }

  @media screen and (max-width:815px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (max-width:620px) {
    margin-bottom: 10px;
  }

`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction:column;
  
  margin-bottom: 10px;
`;