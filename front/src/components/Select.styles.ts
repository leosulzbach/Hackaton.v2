import styled from "styled-components";

interface SelectContainerProps {
  height: number;
}

export const SelectContainer = styled.div<SelectContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  label {
    color: ${(props) => props.theme.gray};
  }

  span {
    color: ${(props) => props.theme.danger};
  }

  select {
    height: ${(props) => props.height}px;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.gray};

    padding: 24px;
  }
`;