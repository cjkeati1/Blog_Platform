import React from 'react';
import PropTypes from 'prop-types';
import UserItem from "./UserItem";

const toggleModal = () => {
   document.getElementById("following-modal").classList.toggle('is-active');
};

const FollowingModal = ({following}) => {
   return (
      <div id={'following-modal'} className="modal">
         <div className="modal-background"/>
         <div className="modal-card">
            <header className="modal-card-head">
               <p className="modal-card-title">{following.length} Following</p>
               <button onClick={() => toggleModal()} className="delete" aria-label="close"/>
            </header>
            <div className="modal-card-body">
               <div className="list is-hoverable">
               <div className="content">
                  {following.map(followee => (
                     <UserItem key={followee._id} userId={followee.user._id} name={followee.user.name}/>
                  ))
                  }
               </div>
               </div>
            </div>
            <footer className="modal-card-foot">
               <button onClick={() => toggleModal()} className="button">Close</button>
            </footer>
         </div>
      </div>
   );
};

FollowingModal.propTypes = {
   following: PropTypes.array.isRequired
};


export default FollowingModal;

