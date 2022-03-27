import './App.css';

function App() {

  var score_label = 'Score: ';
  var current_score = 0;
  var final_score = score_label + current_score;

  var round_label = 'Round: ';
  var round_count = 0;
  var round = round_label +round_count;

  var random_card1 = Math.floor(Math.random() * 13 ) + 1;
  var random_card2 = Math.floor(Math.random() * 13 ) + 1;
  var random_card3 = Math.floor(Math.random() * 13 ) + 1;

  var card_1 = random_card1;
  var card_2 = random_card2;
  var card_3 = random_card3;


  function draw_card_3(){
    var card_3 =+ Math.floor(Math.random() * 13 ) + 1;
    return card_3;
  }

  function reset_game(){

  }



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
          <li>If you chose "No Deal" and the 3rd card is in between the 2 numbers in the cards, you will lose 0.5 point.</li>

          <br></br>

          <p>If the 2 numbers in the card are <strong>IDENTICAL</strong>:</p>
          <li>You have an option to choose between <strong>HIGHER</strong> or <strong>LOWER</strong>.</li>
          <li>If you chose "Higher" and the 3rd card is higher than the number in the first 2 cards, you will get 1 point. Otherwise, you lose 1 point.</li>
          <li>If you chose "Lower" and the 3rd card is lower than the number in the first 2 cards, you will get 1 point. Otherwise, you lose 1 point. </li>
        </p>

        <h3>{round} <br></br> {final_score} </h3>

        <div className='row1'>

          <div className='column1-1'>
            <h3>Card 1</h3>
            <p className='card-1'>{card_1}</p>
          </div>

          <div className='column1-2'>
            <h3>Card 2</h3>
            <p className='card-2'>{card_2}</p>
          </div>

          <div className='column1-3'>
            <h3>Card 3</h3>
            <p className='card-3'>{card_3}</p>
          </div>

        </div>

        <div className='row-2'>

          <div className='buttons'>
            <button className='btn1' onClick={draw_card_3}>Deal</button>
            <button className='btn2'onClick={draw_card_3}>No Deal</button>
            {/* <button className='reset' onClick={}>Reset</button> */}
          </div>

        </div>

        <div className='row3'>
          <p className='result'></p>
        </div>

      </div>
      
    </div>
  );
}

export default App;
