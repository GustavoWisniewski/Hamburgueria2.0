import styled from "styled-components";

export const DivModal = styled.div`
  position: absolute;
  top: 20%;
  left: 33%;
  width: 460px;
  background: #27ae60;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  color: #ffffff;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    width: 100%;
    height: 50px;
    border-radius: 4px 4px 0px 0px;

    button {
      color: #ffffff;
      width: 32.49px;
      height: 32px;
      background: #27ae60;
      border-radius: 4px;
      border: none;
    }
    button:hover {
      background: #212529;
    }
  }
  form {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    label {
      text-align: start;
    }
    input {
      color: #ffffff;
      height: 48px;
      background: #343b41;
      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;
    }
    select {
      color: #ffffff;
      height: 48px;
      background: #343b41;
      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;
    }
    button {
      color: #ffffff;
      margin-top: 10px;
      width: 100%;
      height: 48px;
      background: #ff577f;
      border: 1.2182px solid #ff577f;
      border-radius: 4.06066px;
    }
  }
`;
export const UlCart = styled.ul`
  list-style: none;
  width: 100%;
  min-height: 240px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 21px;
  background: #ffffff;
  border-radius: 0px 0px 5px 5px;
`;
export const LiEmpty = styled.li`
  width: 100%;
  color: black;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const DivTotal = styled.div`
  min-height: 150px;
  background-color: #ffffff;
  border-top: 2px solid #e0e0e0;
  color: black;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
  }
  button {
    min-width: 100%;
    min-height: 50px;
    padding: 0px 20px;

    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #e0e0e0;

    border: 2px solid #e0e0e0;
    border-radius: 8px;
  }
`;
