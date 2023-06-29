import styled from "styled-components";

export const Li = styled.li`
  margin: 0, 0, 0, 0;
  min-width: 300px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;

  :hover {
    border: 2px solid #27ae60;
  }

  figure {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    background-color: #f5f5f5f5;
  }
  img {
    width: 150px;
    height: 150px;
  }
  div {
    width: 100%;
    height: 196px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .titleCard {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
  }
  .subTitleCard {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #828282;
  }
  .priceCard {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #27ae60;
  }
  button {
    color: #ffffff;
    width: 106px;
    min-height: 40px;
    background: #bdbdbd;
    border: 2px solid #bdbdbd;
    border-radius: 8px;
  }
  button:hover {
    background: #27ae60;
    border: 2px solid #27ae60;
  }
`;
