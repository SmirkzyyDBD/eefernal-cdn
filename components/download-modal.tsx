"use client";

import { useState, createContext, useContext } from "react";
import DownloadButton from "@/components/download-button";
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

// Update context to include title and files
const ModalContext = createContext<{
  openId: string | null;
  setOpenId: (id: string | null) => void;
  activeTitle: string | null;
  setActiveTitle: (title: string | null) => void;
  activeFiles: DownloadFile[] | null;
  setActiveFiles: (files: DownloadFile[] | null) => void;
}>({
  openId: null,
  setOpenId: () => {},
  activeTitle: null,
  setActiveTitle: () => {},
  activeFiles: null,
  setActiveFiles: () => {},
});

interface DownloadFile {
  fileName: string;
  text: string;
}

export function DropdownProvider({ children }: { children: React.ReactNode }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string | null>(null);
  const [activeFiles, setActiveFiles] = useState<DownloadFile[] | null>(null);

  return (
    <ModalContext.Provider
      value={{
        openId,
        setOpenId,
        activeTitle,
        setActiveTitle,
        activeFiles,
        setActiveFiles,
      }}
    >
      {children}
      {/* Modal is now part of the provider, so it's always in the same place */}
      {openId && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={() => {
            setOpenId(null);
            setActiveTitle(null);
            setActiveFiles(null);
          }}
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
            aria-hidden="true"
          />
          <div
            className="relative z-[10000] w-full max-w-2xl bg-black/90 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <h3 className="text-2xl font-bold text-white">{activeTitle}</h3>
              <button
                onClick={() => {
                  setOpenId(null);
                  setActiveTitle(null);
                  setActiveFiles(null);
                }}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                <XMarkIcon className="w-6 h-6 text-white/70 hover:text-white" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 gap-4 w-full">
                {activeFiles?.map((file, index) => (
                  <div key={index} className="w-full flex justify-center">
                    <DownloadButton
                      fileName={file.fileName}
                      text={file.text}
                      className="w-full max-w-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

interface DownloadDropdownProps {
  files: DownloadFile[];
  id: string;
  title: string;
}

export default function DownloadDropdown({
  files,
  id,
  title,
}: DownloadDropdownProps) {
  const { openId, setOpenId, setActiveTitle, setActiveFiles } =
    useContext(ModalContext);
  const isOpen = openId === id;

  const handleClick = () => {
    if (isOpen) {
      setOpenId(null);
      setActiveTitle(null);
      setActiveFiles(null);
    } else {
      setOpenId(id);
      setActiveTitle(title);
      setActiveFiles(files);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors duration-200"
    >
      <span>Download Files</span>
      <ChevronRightIcon className="w-5 h-5" />
    </button>
  );
}
