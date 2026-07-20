import Button from "../../Button/Button.tsx";

type MenuProps = {
  onRandom: () => void;
  onPersonalized: () => void;
};

function Menu({ onRandom, onPersonalized }: MenuProps) {
  return (
    <div className="flex gap-4">
      <Button text="Random Array" color="bg-pink" onClick={onRandom} />
      <Button
        text="Personalized Array"
        color="bg-orange"
        onClick={onPersonalized}
      />
    </div>
  );
}
export default Menu;
