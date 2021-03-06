import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deletePost} from "../../actions/post";

const toggleModal = () => {
   document.getElementById("delete-post-modal").classList.toggle('is-active');
};

const DeletePostConfirmationModal = ({deletePost, postId}) => {
   const onFormSubmit = async e => {
      e.preventDefault();
      try {
         toggleModal();

         await deletePost(postId);

      } catch (err) {
         //setPostError(true);
      }

   };
   return (
      <div id={'delete-post-modal'} className="modal">
         <div className="modal-background"/>
         <div className="modal-card">
            <header className="modal-card-head">
               <p className="modal-card-title">Delete Post?</p>
               <button onClick={() => toggleModal()} className="delete" aria-label="close"/>
            </header>

            <footer className="modal-card-foot">
               <button onClick={(e) => onFormSubmit(e)} className="button is-danger">Yes</button>
               <button onClick={() => toggleModal()} className="button">No</button>
            </footer>
         </div>
      </div>
   );
};

DeletePostConfirmationModal.propTypes = {
   editPost: PropTypes.func.isRequired,
   postId: PropTypes.string
};


export default connect(null, {deletePost})(DeletePostConfirmationModal);

