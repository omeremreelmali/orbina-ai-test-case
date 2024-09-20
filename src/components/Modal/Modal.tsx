import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  width?: string;
  height?: string;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  width,
  height,
  children
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-full "
          style={{ width: width, height: height }}
        >
          <Dialog.Title className="text-xl font-bold mb-4 text-gray-800">
            {title}
          </Dialog.Title>
          <Dialog.Description className="mb-4">{children}</Dialog.Description>
          <Dialog.Close asChild>
            <button
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              <Cross1Icon className="" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
