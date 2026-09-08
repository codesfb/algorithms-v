import type { CardProps } from "./Card.types";
import CardButton from "../Button/CardButton";
export function Card({ title, description, icon: Icon, href }: CardProps) {
  return (
    <article className="card-enter w-full max-w-80 overflow-hidden rounded border border-purple transition-transform duration-200 hover:-translate-y-0.5">
      <div className="flex h-40 items-center justify-center border-b border-zinc-800">
        <Icon className="h-16 w-16" />
      </div>
      <div className="space-y-4 p-6">
        <h2 className="text-2xl font-bold text-zinc-50">{title}</h2>
        <p className="leading-relaxed text-zinc-400">{description}</p>
      </div>
      <div className="flex h-14 items-center justify-end p-2">
        <CardButton href={href} />
      </div>
    </article>
  );
}
