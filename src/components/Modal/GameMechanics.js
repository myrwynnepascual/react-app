import React, { useState } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi"
import "./GameMechanics.css";

export default function Modal() {
    
  const [modal, setModal] = useState(false);
  const style = {color: "#E9724C", fontSize: "30px", marginRight: "1vw"}

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        <HiOutlineInformationCircle style={style} />
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <center><h2>HOW TO PLAY IN BETWEEN</h2></center>
            <p className="game-mechanics">
                <li>The game has 5 rounds only.</li>
                <li>You will be given 2 random cards each round.</li>
                <li>Guess if the 3rd card is between the numbers in card 1 and card 2.</li>
                <li>You have an option to choose between <strong>DEAL</strong> or <strong>NO DEAL</strong>.</li>
                
                <br/>
                
                <p>If the 2 numbers in the card are <strong>NOT IDENTICAL</strong>:</p>
                <li>If you chose "Deal" and the 3rd card is in between the 2 numbers in the cards, you will get 1 point. Otherwise, you lose 1 point.</li>
                <li>If you chose "No Deal", you will lose 0.5 point.</li>
                
                <br/>
                
                <p>If the 2 numbers in the card are <strong>IDENTICAL</strong>:</p>
                <li>You have an option to choose between <strong>HIGHER</strong> or <strong>LOWER</strong>.</li>
                <li>If you chose "Higher" and the 3rd card is higher than the number in the first 2 cards, you will get 1 point. Otherwise, you lose 1 point.</li>
                <li>If you chose "Lower" and the 3rd card is lower than the number in the first 2 cards, you will get 1 point. Otherwise, you lose 1 point. </li>
            </p>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}