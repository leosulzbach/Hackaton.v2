import styled from "styled-components";

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 8rem;
    border-radius: 16px;
    background-color: #3574F2;
    padding: 3rem;

    h2 {
      text-align: center;
      color: #BDF24B;
    }
  
  `;

export const DivFooter = styled.div`
    display: flex;
    justify-content: center;

    h2 {
      text-align: center;
      color: #BDF24B;
    }
  
  `;

export const DivButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  
  `;

  export const DivContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  `;

  export const Input = styled.input`
  width: 15rem;
  height: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  border-style: none;
  padding-left: 0.5rem;
  
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

export const ItemsFormContainer = styled.div`
select,
input {
  display: flex;
  width: 17rem;
  height: 3rem;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 2rem;
  border-color: #BDF24B;
}
label{
display: flex;
align-items: center;
flex-direction: column;
text-align: start;
font-size: medium;
margin: 0px 0px 5px;

}
.swal2-input{
  margin: 0em 0em 15px;
}

`;