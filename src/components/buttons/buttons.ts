import styled from "styled-components";

export const ButtonLog = styled.button`
  font-size: 16px;
  width: 100%;
  height: 50px;
  background: #219653;
  border-radius: 8px;
  color: #fff;
`;
export const ButtonCad = styled.button`
  margin-top: 5%;
  font-size: 16px;
  width: 100%;
  height: 50px;
  background: #f5f5f5;
  border-radius: 8px;
  color: #999999;
  :hover {
    background: #343b41;
    border: 1.2182px solid #343b41;
  }
`;
export const ButtonRemove = styled.button`
  height: 90px;
  width: 70px;
  position: absolute;
  right: -21%;
  border: none;
  border-radius: 0, 4px, 0, 4px;
  background-color: #ffffff;
  img {
    width: 24px;
    height: 24px;
  }
`;
