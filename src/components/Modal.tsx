import React from 'react';

function Modal({props} :any) {

    const handleCloseModal = () => {

    }

    return (
        <div className='modal'>
            <div className="modal-overlay" onClick={handleCloseModal}></div>
            <div className="modal-content">
                {props}
                <a className='modal-close' onClick={handleCloseModal}>닫기</a>
            </div>
        </div>
    );
}

export default Modal;