import styled from "styled-components";

export const Header = styled.header`
  padding: 0, 1rem, 0, 1rem;
  width: 100vw;
  height: 80px;
  background-color: #f5f5f5;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  .DivGlobal {
    margin: 0 auto;
    width: 970px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  div {
    margin-right: 5%;
    display: flex;
    gap: 12px;
  }
  form {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 50px;
    background: #ffffff;
    border: 2px solid #333333;
    border-radius: 8px;
    padding: 6px;
    input {
      padding: 5px;
      color: #e0e0e0;
      outline: none;
      border: transparent;
      height: 40px;
      background: #ffffff;
    }
    button {
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0px 20px;
      gap: 10px;
      width: 53px;
      height: 40px;
      background: #27ae60;
      border: 2px solid #27ae60;
      border-radius: 8px;
    }
  }

  @media (min-width: 700px) {
    padding-left: 2rem;
    padding-right: 2rem;
    width: 100%;
    height: 139px;
    display: flex;
    align-items: center;

    form {
      display: flex;
      align-items: center;
      gap: 8px;
      height: 50px;
      background: #ffffff;
      border: 2px solid #333333;
      border-radius: 8px;
      padding: 6px;
      input {
        padding: 5px;
        color: #e0e0e0;
        outline: none;
        border: transparent;
        height: 40px;
        background: #ffffff;
      }
      button {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 20px;
        gap: 10px;
        width: 53px;
        height: 40px;
        background: #27ae60;
        border: 2px solid #27ae60;
        border-radius: 8px;
      }
    }
  }
`;
