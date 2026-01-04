
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-[#050505] brutalist-border p-8 text-center animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-mono opacity-40 hover:opacity-100 transition-opacity"
        >
          &times;
        </button>
        <h3 className="text-xl uppercase tracking-widest font-mono mb-8">{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Modal;
