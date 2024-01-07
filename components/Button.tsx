import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "secondary" | "tertiary" | "quarternary";
  color?: "primary" | "secondary" | "tertiary" | "none";
}

const variantClass = {
  primary: "hover:-translate-y-0.5",
  secondary: "hover:bg-opacity-60",
  tertiary: "",
  quarternary: "hover:scale-105",
};

const colorClass = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
  tertiary: "bg-tertiary text-[#4a380e]",
  none: "",
};

const Button = ({
  children,
  variant = "primary",
  color = "primary",
  className = "",
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`transition-all duration-50 rounded-md disabled:opacity-40 tracking-wide font-semibold flex justify-center items-center gap-2.5 py-2 px-2.5 ${variantClass[variant]} ${colorClass[color]} ${className}`}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
