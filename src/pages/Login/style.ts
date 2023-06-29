import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
`;
export const SectionForm = styled.section`
  width: 500px;
  height: 461px;
  background: #ffffff;
  border: 2px solid #f5f5f5;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  form {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    label {
      margin-bottom: 8px;
    }
  }
  div {
    padding: 24px;
    a {
      font-size: 16px;
      width: 100%;
      height: 50px;
      background: #f5f5f5;
      border-radius: 8px;
      color: #999999;
      text-decoration: none;
      margin-top: 12px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    a:hover {
      background: #343b41;
      border: 1.2182px solid #343b41;
    }
  }
`;
export const SectionInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const DivInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 12px;
  width: 377px;
  height: 95px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: rgba(39, 174, 96, 0.1);
    border-radius: 5px;
  }
  div {
    display: flex;
    align-items: center;
    width: 261px;
    height: 64px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #828282;
  }
`;
