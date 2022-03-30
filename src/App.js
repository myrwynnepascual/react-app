import './App.css';
import GameMechanics from './components/Modal/GameMechanics'
import React, { useState } from "react";

function App() {

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  
  const [card_1, setcard_1] = useState(random(1, 13));
  const [card_2, setcard_2] = useState(random(1, 13));
  const [card_3, setcard_3] = useState(random(1, 13));
  const [score, setScore] = useState(0);
  const [roundCount, setroundCount] = useState(1);
  const [result, setResult] = useState("");
  const [prev1, setPrev1] = useState("");
  const [prev2, setPrev2] = useState("");
  const [prev3, setPrev3] = useState("");

  var button1 = document.getElementById("btn1");
  var button2 = document.getElementById("btn2");

  const getroundCount = () => {
    return roundCount;
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

  const prevcard_1 = () => {
    setPrev1(`${getcard_1()}`);
  };

  const prevcard_2 = () => {
    setPrev2(`${getcard_2()}`);
  };


  const prevcard_3 = () => {
    setPrev3(`${getcard_3()}`);
  };

  const generate = () => {
    setcard_1(random(1, 13));
    setcard_2(random(1, 13));
    setcard_3(random(1, 13));

    if (roundCount == 5) {
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
 
  const resultWin = () => {
    setResult(`YOU WIN!!`);
  };

  const resultLose = () => {
    setResult(`YOU LOSE!`);
  };

  const resultNoDeal = () => {
    setResult(`No Deal!`);
  };

  const resultSameCards = () => {
    setResult(`Unlucky! YOU LOSE!!`);
  };

//pwede ata to remove
  const LabelCheck = (label) => {
    if (card_1 == card_2) {
      return label == 0 ? "Higher" : "Lower";
    } else {
      return label == 0 ? "Deal" : "No Deal";
    }
  };

  const gamePlay = (bet) => {

    if (!(card_1 == card_2 && card_2 == card_3)) {
      if (getroundCount() <= 5) {

        //GET HIGHER CARD
        const high = card_1 > card_2 ? card_1 : card_2;  
        
        //GET LOWER CARD
        const low = card_1 < card_2 ? card_1 : card_2;


        //USER CHOSE DEAL
        if (bet == "Deal") {

          //card 3 IS IN BETWEEN -> USER WIN
          if (card_3 > low && card_3 < high) {              
            
            setScore(getScore() + 1);
            resultWin();

          } 
          
          //card 3 IS NOT IN BETWEEN -> USER LOSE
          else {                                        

            scoreDealHigherLowerLose();
            resultLose();
          }

          //DRAW CARDS AGAIN AND MOVE TO NEXT ROUND
          generate();
          setroundCount(getroundCount() + 1);
          
        } 
        
        //USER CHOSE NO DEAL
        else if (bet == "No Deal") {

          scoreNoDeal();
          resultNoDeal();
          
          //DRAW CARDS AGAIN AND MOVE TO NEXT ROUND
          generate();
          setroundCount(getroundCount() + 1);

        } 
        
        //USER CHOSE HIGHER
        else if (bet == "Higher") {

          //card 3 is HIGHER -> USER WIN
          if (card_3 > high) {
            setScore(getScore() + 1);
            resultWin();
          } 
          
          //card 3 is LOWER -> USER LOSE
          else {
            scoreDealHigherLowerLose();
            resultLose();
          }

          generate();
          setroundCount(getroundCount() + 1);
        }

        //USER CHOSE LOWER
        else if (bet == "Lower") {
          
          //card 3 is LOWER -> USER WIN
          if (card_3 < high) {
            setScore(getScore() + 1);
            resultWin();
          } 
          
          //card 3 is HIGHER -> USER LOSE
          else {
            scoreDealHigherLowerLose();
            resultLose();
          }
          generate();
          setroundCount(getroundCount() + 1);
        }
        
      } 
      
      else {
        setScore(getScore() - 1);
        resultSameCards();
      }
      prevcard_1();
      prevcard_2();
      prevcard_3();
    }
  };

  const reset = () => {
    generate();
    setScore(0);
    setroundCount(1);
    button1.disabled = false;
    button2.disabled = false;
    setResult("");
    setPrev1("");
    setPrev2("");
    setPrev3("");
  };
  
  return (
    <div className='container'>

      <div className='in-between'>

        <center><h1>IN BETWEEN</h1></center>

        <h2>Game Mechanics <GameMechanics /></h2>
        

        <h3>Round: {roundCount} <br></br> Score: {score} </h3>

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
            <input type="button" id='btn1' value={LabelCheck(0)} onClick={(evt) => {gamePlay(evt.target.value);}} />
            <input type="button" id='btn2' value={LabelCheck(1)} onClick={(evt) => {gamePlay(evt.target.value);}} />
            <input type="button" id='btn3' value="Reset" onClick={() => {reset();}}Reset />
          </div>

        </div>
        <div className='row3'>
          <p className='result'>{result}</p>
        </div>
        <div className='prevrow'>
        <h2>Previous Results</h2>
          <div className='prevrow-1'>
            <h3>Card 1</h3>
            <p className='card-1'>{prev1}</p>
          </div>

          <div className='prevrow-3'>
            <h3>Card 3</h3>
            <p className='card-3'>{prev3}</p>
          </div>

          <div className='prevrow-2'>
            <h3>Card 2</h3>
            <p className='card-2'>{prev2}</p>
          </div>

        </div>

      </div>
      
    </div>
  );
}

export default App;