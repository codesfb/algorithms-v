type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-96 rounded-lg bg-background border border-primary p-6">
        <button onClick={onClose} className="absolute right-3 top-2">
          ×
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;
