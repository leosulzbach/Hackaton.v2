import { useFormContext } from "react-hook-form";
import { SelectContainer } from "./Select.styles";

interface DataOptions {
  id: string;
  name: string;
}
interface SelectProps {
  height?: number;
  label?: string;
  id: string;
  value?: string | number;
  placeholder?: string;
  errorMessage?: string | undefined;
  type?: string;
  datas?: DataOptions[];
  onChange?: EventTarget;
}

export function Select({
  height = 14,
  label,
  id,
  value,
  placeholder = "",
  errorMessage,
  datas,
  onChange,
  ...rest
}: SelectProps) {
  const { register, getValues } = useFormContext();
  
  console.log(getValues())
  
  return (
    <SelectContainer height={height}>
      <label htmlFor={id}>{label}</label>
      <select id={id} {...register(id)} value={getValues(id)}  {...rest}>
        <>
          <option key="" value="">
            Selecione
          </option>
          {datas?.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </>
      </select>
      <span>{errorMessage}</span>
    </SelectContainer>
  );
}