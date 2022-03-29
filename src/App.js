import './App.css';

import React, { useState } from "react";

function App() {

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  
  const [card_1, setcard_1] = useState(random(1, 13));
  const [card_2, setcard_2] = useState(random(1, 13));
  const [card_3, setcard_3] = useState(random(1, 13));
  const [score, setScore] = useState(0);
  const [iteration, setIteration] = useState(1);
  const [result, setResult] = useState("");

  var button1 = document.getElementById("btn1");
  var button2 = document.getElementById("btn2");

  const getIteration = () => {
    return iteration;
  };

  const getScore = () => {
    return score;
  };

  const getcard_1 = () => {
    return card_1;
  };

  const getcard_2 = () => {
    return card_2;
  };


  const getcard_3 = () => {
    return card_3;
  };

  const generate = () => {
    setcard_1(random(1, 13));
    setcard_2(random(1, 13));
    setcard_3(random(1, 13));

    if (iteration == 5) {
      button1.disabled = true;
      button2.disabled = true;
    }
  };

  //USED TO AVOID NEGATIVE SCORE
  const scoreDealHigherLowerLose = () => {
    if(getScore() <= 0){             
      setScore(getScore());
    } else {
      setScore(getScore() - 1);
    }
  }

  const scoreNoDeal = () => {
    if(getScore() <= 0){             
      setScore(getScore());
    } else {
      setScore(getScore() - 0.5);
    }
  }

  const resultUpdateWin = () => {
    setResult(`Bingo! The third number is ${getcard_3()}`);
  };

  const resultUpdateLose = () => {
    setResult(`Too bad! The third number is ${getcard_3()}`);
  };

  const resultUpdateNoDeal = () => {
    setResult(`No Deal! The third number is ${getcard_3()}`);
  };

  const resultUpdateSame = () => {
    setResult(`Unlucky! All of the numbers are ${getcard_3()}`);
  };

  const LabelCheck = (label) => {
    if (card_1 == card_2) {
      return label == 0 ? "Higher" : "Lower";
    } else {
      return label == 0 ? "Deal" : "No Deal";
    }
  };

  const InBet = (bet) => {

    if (!(card_1 == card_2 && card_2 == card_3)) {
      if (getIteration() <= 5) {

        //GET HIGHER CARD
        const high = card_1 > card_2 ? card_1 : card_2;  
        
        //GET LOWER CARD
        const low = card_1 < card_2 ? card_1 : card_2;


        //USER CHOSE DEAL
        if (bet == "Deal") {

          //card 3 IS IN BETWEEN -> USER WIN
          if (card_3 > low && card_3 < high) {              
            
            setScore(getScore() + 1);
            resultUpdateWin();

          } 
          
          //card 3 IS NOT IN BETWEEN -> USER LOSE
          else {                                        

            scoreDealHigherLowerLose();
            resultUpdateLose();
          }

          //DRAW CARDS AGAIN AND MOVE TO NEXT ROUND
          generate();
          setIteration(getIteration() + 1);
        } 
        
        //USER CHOSE NO DEAL
        else if (bet == "No Deal") {

          scoreNoDeal();
          resultUpdateNoDeal();
          
          //DRAW CARDS AGAIN AND MOVE TO NEXT ROUND
          generate();
          setIteration(getIteration() + 1);

        } 
        
        //USER CHOSE HIGHER
        else if (bet == "Higher") {

          //card 3 is HIGHER -> USER WIN
          if (card_3 > high) {
            setScore(getScore() + 1);
            resultUpdateWin();
          } 
          
          //card 3 is LOWER -> USER LOSE
          else {
            scoreDealHigherLowerLose();
            resultUpdateLose();
          }

          generate();
          setIteration(getIteration() + 1);
        }

        //USER CHOSE LOWER
        else if (bet == "Lower") {
          
          //card 3 is LOWER -> USER WIN
          if (card_3 < high) {
            setScore(getScore() + 1);
            resultUpdateWin();
          } 
          
          //card 3 is HIGHER -> USER LOSE
          else {
            scoreDealHigherLowerLose();
            resultUpdateLose();
          }
          generate();
          setIteration(getIteration() + 1);
        }
        
      } 
      
      else {
        setScore(getScore() - 1);
        resultUpdateSame();
      }

      
    }
  };

  const reset = () => {
    generate();
    setScore(0);
    setIteration(1);
    button1.disabled = false;
    button2.disabled = false;
    setResult("");
  };
  
  return (
    <div className='container'>

      <div className='in-between'>

        <h1>In between</h1>

        <h2>Game Mechanics</h2>
        <p>
          <li>The game has 5 rounds only.</li>
          <li>You will be given 2 random cards each round.</li>
          <li>Guess if the 3rd card is between the numbers in card 1 and card 2.</li>
          <li>You have an option to choose between <strong>DEAL</strong> or <strong>NO DEAL</strong>.</li>
          
          <br></br>

          <p>If the 2 numbers in the card are <strong>NOT identical</strong>:</p>
          <li>If you chose "Deal" and the 3rd card is in between the 2 numbers in the cards, you will get 1 point. Otherwise, you lose 1 point.</li>
          <li>If you chose "No Deal", you will lose 0.5 point.</li>

          <br></br>

          <p>If the 2 numbers in the card are <strong>IDENTICAL</strong>:</p>
          <li>You have an option to choose between <strong>HIGHER</strong> or <strong>LOWER</strong>.</li>
          <li>If you chose "Higher" and the 3rd card is higher than the number in the first 2 cards, you will get 1 point. Otherwise, you lose 1 point.</li>
          <li>If you chose "Lower" and the 3rd card is lower than the number in the first 2 cards, you will get 1 point. Otherwise, you lose 1 point. </li>
        </p>

        <h3>Round: {iteration} <br></br> Score: {score} </h3>

        <div className='row1'>

          <div className='column1-1'>
            <h3>Card 1</h3>
            <p className='card-1'>{card_1}</p>
          </div>

          <div className='column1-2'>
            <h3>Card 2</h3>
            <p className='card-2'>{card_2}</p>
          </div>

        </div>
        
        <div className='row-2'>

          <div className='buttons'>
            <input type="button" id='btn1' value={LabelCheck(0)} onClick={(evt) => {InBet(evt.target.value);}} />
            <input type="button" id='btn2' value={LabelCheck(1)} onClick={(evt) => {InBet(evt.target.value);}} />
            <input type="button" id='btn3' value="Reset" onClick={() => {reset();}}Reset />
          </div>

        </div>
        
        <div className='prevrow'>
        <h1>Previous Results</h1>
          <div className='prevrow-1'>
            <h3>Card 1</h3>
            <p className='card-1'>{getcard_1()}</p>
          </div>

          <div className='prevrow-2'>
            <h3>Card 2</h3>
            <p className='card-2'>{getcard_2()}</p>
          </div>

          <div className='prevrow-3'>
            <h3>Card 3</h3>
            <p className='card-3'>{getcard_3()}</p>
          </div>

        </div>
        <div className='row3'>
          <p className='result'>{result}</p>
        </div>

      </div>
      
    </div>
  );
}

export default App;