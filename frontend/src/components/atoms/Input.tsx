interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  error?: string;
  className?: string;
}

const Input = ({ className, value, onChange, placeholder, type = "text", error }: InputProps) => {
  return (
    <div className="form-control w-full">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input input-bordered w-full rounded-lg focus:ring-2 focus:ring-purple-500 ${className}`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;