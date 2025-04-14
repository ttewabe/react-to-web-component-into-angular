import React from 'react';

export interface IConfirmationModalProps {
    show: boolean;
    onClose: () => void;
    onConfirm: () => void;
    message: string;
}

export const ConfirmationModal: React.FC<IConfirmationModalProps> = ({ show, onClose, onConfirm, message }) => {
    if (!show) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3>Confirm Action</h3>
                <p>{message}</p>
                <div className="modal-buttons">
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={onConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

