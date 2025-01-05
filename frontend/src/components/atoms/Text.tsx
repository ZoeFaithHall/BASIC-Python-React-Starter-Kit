interface TextProps {
  variant: "heading" | "label" | "body";
  children: React.ReactNode;
}

const Text = ({ variant, children }: TextProps) => {
  const variants = {
    heading: "text-2xl font-bold text-purple-600",
    label: "text-lg font-semibold text-gray-700",
    body: "text-sm text-gray-800",
  };

  return <p className={variants[variant]}>{children}</p>;
};

export default Text;