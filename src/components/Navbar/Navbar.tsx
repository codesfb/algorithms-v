import Dropdown from "../DropDown/DropDown.tsx";
import Menu from "../Modal/ArrayModal/Menu";
import RandomForm from "../Modal/ArrayModal/RandomForm";
import PersonalizedForm from "../Modal/ArrayModal/PersonalizedForm";
import { Settings } from "lucide-react";
import { useState } from "react";
import Modal from "../Modal/Modal.tsx";

type NavbarProps = {
  drawerOpen: boolean;
  onSettingsClick: () => void;
};

function Navbar({ drawerOpen, onSettingsClick }: NavbarProps) {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string | null>(
    null,
  );

  function handleAlgorithmSelection(algorithm: string) {
    setSelectedAlgorithm(algorithm);
    setIsModalOpen(true);
  }

  type Step = "menu" | "random" | "personalized";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState<Step>("menu");
  return (
    <nav className="bg-background border-b border-surface ">
      <div className="flex justify-between px-8 h-16 items-center">
        <div className="text-primary">Logo</div>

        <div className="flex gap-8">
          <Dropdown
            title="Algorithms"
            items={["Bubble Sort", "Merge Sort", "Quick Sort", "Heap Sort"]}
            onSelect={handleAlgorithmSelection}
          />

          <Dropdown
            title="Data Structures"
            items={["Array", "Stack", "Queue", "Binary Tree"]}
            onSelect={handleAlgorithmSelection}
          />
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>{selectedAlgorithm}</h2>
          {step === "menu" && (
            <Menu
              onRandom={() => setStep("random")}
              onPersonalized={() => setStep("personalized")}
            />
          )}

          {step === "personalized" && <PersonalizedForm />}

          {step === "random" && <RandomForm />}
        </Modal>

        <div
          onClick={onSettingsClick}
          className=" gap-2.5 m-2 flex text-secondary"
        >
          <Settings />
          {drawerOpen ? "Close Settings" : "Settings"}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
