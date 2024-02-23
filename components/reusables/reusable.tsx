import loader from "../../assets/images/svgs/spinner.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, FC, useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string;
  color?: string;
  text: string;
  onClick?: (e?: any) => void;
  type?: "button" | "submit" | "reset" | undefined;
  loading_state?: boolean;
}
// reusable button with loader states
export const Button: React.FC<ButtonProps> = (props) => {
  let { size, color, text, onClick, type, loading_state, ...restProps } = props;
  const btnSize = `w-${size}`;

  return (
    <div>
      <button
        className={`cursor-pointer text-white ${btnSize} bg-blue rounded p-2`}
        onClick={onClick}
        type={type || "submit"}
        disabled={loading_state}
        {...restProps}
      >
        {loading_state ? (
          <img
            src={loader}
            style={{ height: "25px", margin: "auto" }}
            alt="loader"
          />
        ) : (
          text
        )}
      </button>
    </div>
  );
};

interface Props {
  password: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name: string;
  id:string,
  error:string | undefined,
  touched:boolean | undefined
}

// reusable password input
export const PasswordField: FC<Props> = ({
  password,
  onChange,
  disabled,
  name,
  id,
  error,
  touched
}): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <input
      id={id}
        name={name}
        value={password}
        type={visible ? "text" : "password"}
        className={` w-full p-2 border-2 border-blue rounded outline-none`}
        onChange={onChange}
        disabled={disabled}
      />

      <span
        className={`relative float-right top-[-2rem] right-4 block cursor-pointer text-blue`}
      >
        {
          <FontAwesomeIcon
            icon={visible ? "eye-slash" : "eye"}
            onClick={() => setVisible(!visible)}
          />
        }
      </span>
      {touched && error && (
        <p className="text-red-500 text-xs italic mt-1">{error}</p>
      )}
    </>
  );
};
