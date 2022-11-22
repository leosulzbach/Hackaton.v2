import styled from "styled-components";

export const DivContainer = styled.div`
    
  form {
    width: 70em;
    height: 100%;
    display: flex;
   
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

`;

export const ItemsFormContainer = styled.div`

  select,
  input {
    width: 17rem;
    height: 3rem;
    border-radius: 8px;
  }
  label{
  display: flex;
  flex-direction: column;
  text-align: start;
  font-size: medium;
  margin: 0px 0px 5px;

  }
  .swal2-input{
    margin: 0em 0em 15px;
  }

`;

export const ButtonContainer = styled.button`
  width: 17rem;
  height: 3rem;
  font-weight: 500;
  font-size: 2rem;
  border: none;
  border-radius: 8px;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
`;

export const DivContainerOut = styled.div`
  form {
    display: flex;
    flex-direction: column;
    
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  input{
    height: 3rem;
    border-radius: 8px;
  }

`;
export const DivContainerModal = styled.div`
width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 5rem;
 margin-top: 2rem;

 a {
 width: 15rem;
 height: 10rem;
 font-weight: 500;
 font-size: 2rem;
 //border: 2px solid ${(props) => props.theme.white};
 border-radius: 8px;
 text-decoration: none;
 text-align: center;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 background: ${(props) => props.theme.white};
 color: ${(props) => props.theme.black};
 cursor: pointer;

 &:hover,
&:focus {
 background: ${(props) => props.theme.secondary};
 color: ${(props) => props.theme.white};
 font-weight: 700;
}
}
`;

