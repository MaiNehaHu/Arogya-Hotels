import React from 'react'
import { CgClose } from 'react-icons/cg';

const Model = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
    if (!isOpen) return;

    return (
        <div
            onClick={onClose}
            className='w-full h-screen bg-[#00000050] absolute top-0 left-0 right-0 z-50 p-10 overflow-y-auto flex justify-center items-start'
        >
            <div
                className="w-full max-w-5xl p-8 rounded-2xl bg-white relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="p-2 cursor-pointer absolute top-12 right-12 rounded-full border border-gray-300 hover:bg-black hover:text-white transition-colors">
                    <CgClose />
                </button>
                {children}
            </div>
        </div>
    )
}

export default Model