import React, {useState} from 'react';

const Modals = ({open, onClose}) => {
    const handleClickYes = () => {};

  const handleCancel = () => {};

  const handleClose = (event) => {
    // console.log('currentTarget', event.currentTarget);
    // console.log('target', event.target);
    if (event.target === event.currentTarget) {
        onClose();
    }
    
  };

  if (!open) {
    return null;
  }

  return (
    <div className='dimmed' onClick={handleClose}>
      <section className='modal'>
        <div className='modal-header'>
          <p>모달 헤더</p>
          <button onClick={handleClose}>X</button>
        </div>
        <div className='modal-body'>
          <img src='https://cataas.com/cat' alt='' />
        </div>
        <div className='modal-footer'>
          <button className='yes' onClick={handleClickYes}>
            확인
          </button>
          <button className='cancel' onClick={handleCancel}>
            취소
          </button>
        </div>
      </section>
    </div>
  );
};

export default Modals;