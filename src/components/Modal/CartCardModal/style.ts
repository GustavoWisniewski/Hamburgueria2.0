import styled from "styled-components";

export const LiCart = styled.li`
  position: relative;
  width: 80%;
  height: 90px;
  background-color: #ffffff;
  border-radius: 0, 4px, 0, 4px;
  display: flex;
  gap: 3rem;
  align-items: center;
  section {
    position: absolute;
    top: 55%;
    left: 30%;
    color: red;
    display: flex;
    box-sizing: border-box;
    height: 34px;
    border: 2px solid #f2f2f2;
    gap: 12px;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #eb5757;
      background-color: #f5f5f5f5;
      border: none;
      font-size: 16px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      height: 32px;
      width: 24px;
    }
    span {
      color: #000000;
      background-color: #ffffff;
      width: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  figure {
    margin-left: 5px;
    width: 82px;
    height: 80px;
    background: #e0e0e0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 55px;
    height: 55px;
  }
  div {
    position: absolute;
    top: 3%;
    left: 25%;
  }
  h4 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
  }
`;
