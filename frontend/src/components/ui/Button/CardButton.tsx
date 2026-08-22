import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

type CardButtonProps = {
  href: string;
};

const CardButton = ({ href }: CardButtonProps) => {
  return (
    <Link
      to={href}
      className="
        inline-flex items-center justify-center
        px-6 py-3
        bg-primary
        text-primary-foreground
        font-semibold
        rounded-lg
        shadow-md
        hover:bg-secondary
        hover:shadow-lg
        focus:outline-none
        focus:ring-2
        focus:ring-secondary
        active:scale-95
        transition-all duration-200
      "
    >
      <MoveRight size={20} />
    </Link>
  );
};

export default CardButton;
