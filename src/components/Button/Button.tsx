type ButtonFunctions = {
  text: string;
  color: string;
};

function Button({ text, color }: ButtonFunctions) {
  return (
    <button
      className={`px-6 py-3 ${color} font-semibold text-primar rounded-lg shadow-md 
        hover:bg-primary hover:shadow-lg 
        focus:outline-none focus:ring-2 
      focus:bg-secondary focus:ring-opacity-75 active:scale-95 transition-all duration-200`}
    >
      {text}
    </button>
  );
}

export default Button;
