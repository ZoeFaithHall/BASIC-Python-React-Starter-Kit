interface ButtonProps {
  variant: "primary" | "secondary";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ variant, onClick, children }: ButtonProps) => {
  const variants = {
    primary: "btn btn-primary bg-purple-500 text-white hover:bg-purple-600",
    secondary: "btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-200",
  };

  return (
    <button className={`${variants[variant]} rounded-lg`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;