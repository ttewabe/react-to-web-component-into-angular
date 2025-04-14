import React, { useState } from 'react';
import { ConfirmationModal } from './ConfirmationModal';
import './ConfirmationModal.css';

const ParentComponent: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [actionType, setActionType] = useState<"update" | "delete" | null>(null);

    const handleAction = (action: "update" | "delete") => {
        setActionType(action);
        setShowModal(true);
    };

    const handleConfirm = () => {
        if (actionType === "delete") {
            console.log("Item deleted");
            // Perform delete action here
        } else if (actionType === "update") {
            console.log("Item updated");
        }
        setShowModal(false); // Close modal after confirming
    };

    const handleCloseModal = () => setShowModal(false);

    return (
        <div className='parent-component'>
            <div className='button-container'>
                <h1 className="center-title">Manage Items</h1>
                <div className='button-group'>
                    <button onClick={() => handleAction("update")}>Update Item</button>
                    <button onClick={() => handleAction("delete")}>Delete Item</button>
                </div>
            </div>

            <ConfirmationModal
                show={showModal}
                onClose={handleCloseModal}
                onConfirm={handleConfirm}
                message={actionType === "delete" ? "Are you sure you want to delete this item?" : "Are you sure you want to update this item?"}
            />
        </div>
    );
};

export default ParentComponent;
