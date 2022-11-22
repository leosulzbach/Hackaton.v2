import styled, { css } from "styled-components";

export const DivContainer = styled.div`
    width: 100%;
    height: 5.5rem;
    background: #c2c5c7;
    border: none;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    border-radius: 16px;
    :hover{
      background-color: ${(props) => props.theme.gray};
    }
  
  
  strong {
    flex: 1;
    font-weight: 500;
    font-size: 1.25rem;
    margin-left: 2rem;
  }
  `;

export const ContentContainer = styled.div`
  height: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

export const ContentButtons = styled.div`
  height: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;