import { Trash } from "phosphor-react";
import { ButtonContainer, ButtonVariants, ButtonLogout, ButtonBacking, ButtonExportPDF, ButtonExportSVG} from "./Button.styles";

interface ButtonProps {
  width?: number | string;
  variant?: ButtonVariants;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  label: string;
  onClick?: () => void;
  fontcolor?: string;
}

//Agora utilizo o Button que criei dentro do meu arquivo ts ao invés do ButtonHTML
//Passado assim a utilizar um componente de estilização
//Ao invés de passar um className posso passar a propriedade que eu defini
export function Button({ variant = "primary", label, fontcolor, onClick, ...rest }: ButtonProps) {
  return (
    <ButtonContainer width={""} variant={variant} disabled={false} type={"submit"} onClick={onClick} label={" "} {...rest}>
      {label}
    </ButtonContainer>
  );
}

export function ButtonTransacoes({ variant = "danger",label, width, onClick, ...rest}: ButtonProps){
  return (
    <ButtonLogout width={""} variant={variant} disabled={false} type={"submit"} onClick={onClick} label={" "} {...rest}>
      {label}
    </ButtonLogout>
  )
}

export function ButtonBack({ variant = "primary",label, onClick, ...rest }: ButtonProps){
  return (
    <ButtonBacking width={""} variant={variant} disabled={false} type={"submit"} onClick={onClick} label={" "} {...rest}>
      {label}
    </ButtonBacking>
  )
}

export function ButtonPDF({ variant = "primary",label, onClick, ...rest }: ButtonProps){
  return (
    <ButtonExportPDF width={""} variant={variant} disabled={false} type={"submit"} onClick={onClick} label={" "} {...rest}>
      {label}
    </ButtonExportPDF>
  )
}
export function ButtonSVG({ variant = "primary",label, onClick, ...rest }: ButtonProps){
  return (
    <ButtonExportSVG width={""} variant={variant} disabled={false} type={"submit"} onClick={onClick} label={" "} {...rest}>
      {label}
    </ButtonExportSVG>
  )
}