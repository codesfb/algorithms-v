import type { CardProps } from "./Card.types";
import CardButton from "../Button/CardButton";
export function Card({ title, description, icon: Icon, href }: CardProps) {
  return (
    <article
      className="
      w-80
      rounded
      border 

      border-purple
      overflow-hidden
      "
    >
      <div
        className="
    flex
    h-40
    items-center
    justify-center
    border-b
    border-zinc-800"
      >
        <Icon className="w-16 h-16" />
      </div>

      <div className="space-y-4 p-6">
        <h2
          className="
    text-2xl
    font-bold
    text-zinc-50
  "
        >
          {title}
        </h2>

        <p
          className="
    text-zinc-400
    leading-relaxed
  "
        >
          {description}
        </p>
      </div>
      <div
        className="flex
    h-14
    items-centerir
    justify-end
    p-2
        "
      >
        <CardButton href={href}></CardButton>
      </div>
    </article>
  );
}
