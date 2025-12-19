import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 ease-out font-sans font-medium rounded-full tracking-wide";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-soft hover:shadow-lg transform hover:-translate-y-0.5",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent",
    text: "text-beige-900 hover:text-primary underline-offset-4 hover:underline bg-transparent px-0"
  };

  const sizes = {
    sm: "text-sm px-5 py-2",
    md: "text-base px-8 py-3",
    lg: "text-lg px-10 py-4"
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;