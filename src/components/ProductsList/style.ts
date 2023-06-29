import styled from "styled-components";

export const DivGlobalUl = styled.div`
  @media (min-width: 800px) {
    max-width: 1200px;
    display: flex;
  }
`;

export const Ul = styled.ul`
  /* padding-left: 2rem;
  margin-bottom: 2rem; */
  max-width: 375px;
  overflow-x: scroll;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 14px;

  @media (min-width: 700px) {
    margin: 0 auto;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2rem;
    overflow-x: hidden;
    max-width: 1200px;
  }
`;
