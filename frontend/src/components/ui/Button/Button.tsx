type ButtonFunctions = {
  text: string;
  color: string;
  onClick?: () => void;
};

function Button({ text, color, onClick }: ButtonFunctions) {
  return (
    <button
      className={`px-6 py-3 ${color} font-semibold text-primar rounded-lg shadow-md 
        hover:bg-primary hover:shadow-lg 
        focus:outline-none focus:ring-2 
      focus:bg-secondary focus:ring-opacity-75 active:scale-95 transition-all duration-200`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
