let score = JSON.parse(localStorage.getItem('score')) // {
    score= {
      wins: 0,
      losses: 0,
      ties: 0
    };
     
   updateScore();

    /* if (!score) {
      score= {
        wins: 0,
        losses: 0,
        ties: 0
      };
    } */
    let isAutoPlaying = false;
    let intervalid;

    function autoplay (){
      if(!isAutoPlaying){
        
        intervalid =  setInterval(() =>{
          playerMove = function1();
          playGame(playerMove);
          },1000)
        isAutoPlaying = true;
      }
        else {
        clearInterval(intervalid);
        isAutoPlaying = false;
      }
    }
    document.querySelector('.js-rock-button')
    .addEventListener('click',() => {
      playGame('سنگ');
    });
    
    document.querySelector('.js-paper-button')
    .addEventListener('click',() => {
      playGame('کاغذ');
    });

    document.querySelector('.js-scissors-button')
    .addEventListener('click',() => {
      playGame('قیچی');
    });

    document.body.addEventListener('keydown',(event)=>{
      if (event.key === 'r'){
        playGame('سنگ');
      } else if (event.key === 'p'){
        playGame('کاغذ');
      } else if (event.key === 's'){
        playGame('قیچی');
      }
    });

  function playGame (playerMove){
   const computerMove = function1();
              
    let result = '';

    
    
    if ( playerMove === 'قیچی'){
    if (computerMove === 'سنگ') {
     result ='.شما باختید';
    } else if ( computerMove === 'قیچی') {
     result = '.مساوی';
    } else if ( computerMove === 'کاغذ') {
     result = '.شما برنده شدید';
    }
   }
    
    
    else if ( playerMove === 'کاغذ'){
    if (computerMove === 'سنگ') {
    result ='.شما برنده شدید';
    } else if ( computerMove === 'قیچی') {
    result = '.شما باختید';
    } else if ( computerMove === 'کاغذ') {
    result = '.مساوی';
    } 
   }
    
    else if ( playerMove ==='سنگ'){
    if (computerMove === 'سنگ') {
    result ='.مساوی';
    } else if ( computerMove === 'قیچی') {
    result = '.شما برنده شدید';
    } else if ( computerMove === 'کاغذ') {
    result = '.شما باختید';
    }  
    } 
    
    
    if ( result === '.شما برنده شدید') {
      score.wins += 1;
    } else if ( result === '.شما باختید') {
      score.losses += 1;
    } else if ( result === '.مساوی') {
      score.ties += 1;
    } 
    
    

    localStorage.setItem('score',JSON.stringify(score));

    updateScore();
    document.querySelector('.js-result').
    innerHTML = result;
    
     document.querySelector('.js-moves').
     innerHTML = `شما
          <img src="Rock.img/${playerMove}-emoji.png" 
          class="move-icon">
          <img src="Rock.img/${computerMove}-emoji.png"
          class="move-icon">
        کمپیوتر`;
        }

    function updateScore () {
      document.querySelector('.js-score').
      innerHTML = `باخت: ${score.losses} برد: ${score.wins} مساوی: ${score.ties}`


    }
    

 function function1 () {
    const randomNumber = Math.random();
            
    let computerMove = '';

              if ( randomNumber >= 0 && randomNumber <= 1/3)
              {  computerMove ='سنگ'}
              else if( randomNumber >= 1/3 && randomNumber<= 2/3)
              {  computerMove ='قیچی'}
              else if (randomNumber >= 2/3 && randomNumber <1)
              { computerMove ='کاغذ'}

              return computerMove;
 }