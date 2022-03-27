import './App.css';

function App() {

  var score_label = 'Score: ';
  var current_score = 0;
  var final_score = score_label + current_score;

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
        <h2>{final_score}</h2>

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
