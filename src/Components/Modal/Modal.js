import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import {  POST_USER, UPDATE_ARTICLE_STATUS } from "../../apiCalls";
import "./Modal.css";

const Modal = ({ open, picture, description, sell, updateModal , articleID, loggedInUser , status}) => {

  const [updateUser, outCome] = useMutation(POST_USER);
  const [updateArticleStatus, feedback] = useMutation(UPDATE_ARTICLE_STATUS)

  const closeModalHandler = (event) => {
    if(event.target.className.includes('close-able')) {
      setTimeout(() => {
        updateModal(false)
      }, 400);
    }
  };

  const containerStyles = open ? "modal-container close-able" : "modal-container close-able closed";

  return (
    <div className={containerStyles} onClick={event => closeModalHandler(event)}>
      <div className="modal">
        <div className="x-button-container">
          {!sell && <h3 className='header-text' > Purchase This Item?</h3>}
          {sell && status !== 'available' &&  <h3 className='header-text' > Sell This Item?</h3>}
          {sell && status === 'available' && <h3 className='header-text' > Remove Item From MarketPlace?</h3>}
          <button className='modal-button close-able' onClick={event => closeModalHandler(event)}>X</button>
        </div>
        <div>
          <img className="modal-image" src={picture} />
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
        <div >
          {!sell && <button className="button" onClick={()=> updateUser({ variables:{ article: { id: articleID, userId: loggedInUser}}})} >Confirm Purchase</button>}
          {sell && status !== 'available' && <button className="modal-button" onClick={()=> updateArticleStatus({ variables:{ article: { id: articleID, status: 'available'}}})} >Confirm Listing</button>}
          {sell && status === 'available' && <button className="modal-button" onClick={()=> updateArticleStatus({ variables:{ article: { id: articleID, status: 'unavailable'}}})} >Remove From Market</button>}
          <button className=' modal-button close-able' onClick={event => closeModalHandler(event)}>Cancel</button>
        </div>
        {/* close modal button w/ hover state*/}
        {/* modal content with picture, description ect*/}
        {/* button to confirm purchase or putting up on marketplace */}
        {/* button to cancel and quit out of modal */}
      </div>
    </div>
  );
};

export default Modal;
