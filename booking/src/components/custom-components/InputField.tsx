import type { InputFieldProps } from "@/types/navbartypes/PaymentInputs";
import { Input } from "../ui/input";

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      <Input {...props} />
    </div>
  );
};

export default InputField;