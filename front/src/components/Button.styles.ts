import styled, { css } from "styled-components";

export type ButtonVariants = "primary" | "secondary" | "danger" | "success";

// Sempre vamos criar uma tipagem para dizer o que vamos receber nesse componente
interface ButtonContainerProps {
  variant: ButtonVariants;
  type: string;
  label: string;
  width: number | string;
}

/* Nome deve ser maiúsculo, pois estamos importando COMPONENTES DE ESTILIZAÇÃO
Uso o que importei e utilizado .button, que significa herdar o próprio button do HTML
Sintaxe do javascript chamada template literals que seriam as duas crases ``
e dentro dela eu posso colocar meu css
pra conseguir visualizar a sintaxe do css, instalar a extensão vscode-styled-components
interpolção ${}, que nada mais é que a adição de javascript dentro do template literals
quando adiciono essa interpoloção o Styles Componente entende como uma função que recebe todas as propriedades
do  Compoente, nesse caso o ButtonContainer recebe a variant. então consigo dizer:
retorna a cor conforme o que estamos recebendo de propriedade do Componente
props.variant que vem do nosso botão.
o "css" é só utilizado para formatação do código ficar mais bonita
*/
export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 10rem;
  height: 3rem;
  font-size: 1rem;
  border-radius: 1rem;
  border-style: none;
  cursor: pointer;
  color: ${(props) => props.theme.black};
  background-color: #BDF24B;
  &:focus, 
  &:hover{
    color: ${(props) => props.theme.black};
    font-weight: 700;
  }
  `;
  /* Da mesma maneira que abaixo consigo pegar as propriedades, consigo pega tbm a propriedade theme*/

export const ButtonLogout = styled.button<ButtonContainerProps>`
width: 10rem;
  height: 3rem;
  font-size: 1rem;
  border-radius: 1rem;
  border-style: none;
  cursor: pointer;
  color: ${(props) => props.theme.fontColor};
  background-color: #BDF24B;
  &:focus, 
  &:hover{
    color: ${(props) => props.theme.black};
    font-weight: 700;
  }

`;

export const ButtonBacking = styled.button<ButtonContainerProps>`
  width: 5rem;
  height: 3rem;
  font-size: 1rem;
  border-radius: 1rem;
  border-style: none;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  background-color: #023059;
  &:focus, 
  &:hover{
    color: ${(props) => props.theme.white};
    font-weight: 700;
  }
`;

export const ButtonExportPDF = styled.button<ButtonContainerProps>`
  width: 6rem;
  height: 2.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  border-style: none;
  cursor: pointer;


  /* Da mesma maneira que abaixo consigo pegar as propriedades, consigo pega tbm a propriedade theme*/
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.danger};
`;

export const ButtonExportSVG = styled.button<ButtonContainerProps>`
  width: 6rem;
  height: 2.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  border-style: none;
  cursor: pointer;


  /* Da mesma maneira que abaixo consigo pegar as propriedades, consigo pega tbm a propriedade theme*/
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.success};
`;