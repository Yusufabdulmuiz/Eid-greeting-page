var _gaq = _gaq || [];

  _gaq.push(['_setAccount', 'UA-36251023-1']);

  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


//to get value of input
var nameInput = document.querySelector('input');


var btn = document.querySelector('button');
var Main = document.querySelector('main');

btn.addEventListener('click', function() {
  if (nameInput.value == "") {
   btn.removeAttribute('id','startConfetti');
    alert('enter your name');
   

  }
  else if( nameInput.value == 'Hasan' || nameInput.value== 'Sufyan' || nameInput.value== 'Bello' || nameInput.value== 'Toyyib' || nameInput.value== 'Olaitan' || nameInput.value== 'Kunmi' || nameInput.value== 'Abdurrahman' || nameInput.value== 'Bosun' || nameInput.value== 'Faheed' || nameInput.value== 'Mustopha' || nameInput.value== 'Ola' || nameInput.value== 'Kamal' || nameInput.value== 'Adekunle' || nameInput.value== 'Adeniji' || nameInput.value== 'Ahmad' || nameInput.value== 'Sulaiman' || nameInput.value== 'Qosim' || nameInput.value== 'Folami' || nameInput.value== 'Fuhad' || nameInput.value== 'Yusuf' || nameInput.value== 'Oyesiji'){
    btn.setAttribute('id','startConfetti')
   
   Main.innerHTML = '<audio autoplay loop ><source src="/media/Eid-Audio.mp3"></audio><div  class="box"><span class="name"></span><span class = "eid">Eid mubarak! <br/>Taqobalallahu Minna Waminkunm, Beloved brother!</span><p>As we rejoice with family and relatives on this auspicious occasion. May <span> ALLAH</span> Taala grant us steadfastness on the path of righteousness, elevate our īman, cleanse our sins and bestow His blessings and mercy upon us in this world and in the hereafter.</p></div>     <h5>greetings from: <span>abdulmuiz</span></h5><div class="days-left"><div><p id="days" >00</p><span>Days</span></div> <div><p id="hours">00</p><span>Hours</span></div><div><p id="minutes">00</p><span>Minutes</span></div><div><p id="seconds">00</p><span>Seconds</span> </div></div>';
    
    
   //countdown

  var countDown = new Date("June 16, 2024 00:00:00").getTime();
  var i = setInterval(() => {
    var now = new Date().getTime();
    var difference = countDown - now;
  
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000 );
  
  
  
    document.querySelector('#days').innerHTML = days;
    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#minutes').innerHTML = minutes;
    document.querySelector('#seconds').innerHTML = seconds;
  
  
    if (difference < 0) {
      clearInterval(i);
      document.querySelector('#days').innerHTML = '00';
      document.querySelector('#hours').innerHTML = '00';
      document.querySelector('#minutes').innerHTML = '00';
      document.querySelector('#seconds').innerHTML = '00';
    }
  
  }, 1000);
  
  


   
   
   var nameSpan = document.querySelector('span');
   
   nameSpan.innerHTML = `${nameInput.value},`;
  }


  else if( nameInput.value == 'Faheedah' || nameInput.value=='Phaee' || nameInput.value== 'Haliyah' || nameInput.value== 'Umm aslam' || nameInput.value== 'zulaikha' ){
    btn.setAttribute('id','startConfetti')
   
   Main.innerHTML = '<audio autoplay loop ><source src="/media/Eid-Audio.mp3"></audio><div  class="box"><span class="name"></span><span class = "eid">Eid mubarak! <br/>Taqobalallahu Minna Waminkunm, Beloved sister!</span><p>As we rejoice with family and relatives on this auspicious occasion. May <span> ALLAH</span> Taala grant us steadfastness on the path of righteousness, elevate our īman, cleanse our sins and bestow His blessings and mercy upon us in this world and in the hereafter.</p></div>     <h5>greetings from: <span>abdulmuiz</span></h5><div class="days-left"><div><p id="days" >00</p><span>Days</span></div> <div><p id="hours">00</p><span>Hours</span></div><div><p id="minutes">00</p><span>Minutes</span></div><div><p id="seconds">00</p><span>Seconds</span> </div></div>';
    
    
   //countdown

  var countDown = new Date("June 28, 2023 00:00:00").getTime();
  var i = setInterval(() => {
    var now = new Date().getTime();
    var difference = countDown - now;
  
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000 );
  
  
  
    document.querySelector('#days').innerHTML = days;
    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#minutes').innerHTML = minutes;
    document.querySelector('#seconds').innerHTML = seconds;
  
  
    if (difference < 0) {
      clearInterval(i);
      document.querySelector('#days').innerHTML = '00';
      document.querySelector('#hours').innerHTML = '00';
      document.querySelector('#minutes').innerHTML = '00';
      document.querySelector('#seconds').innerHTML = '00';
    }
  
  }, 1000);
  
  


   
   
   var nameSpan = document.querySelector('span');
   
   nameSpan.innerHTML = `${nameInput.value},`;
  }
  else {
    btn.setAttribute('id','startConfetti')
    Main.innerHTML = '<audio autoplay loop ><source src="/media/Eid-Audio.mp3"></audio><div  class="box"><span class="name"></span><span class = "eid">Eid mubarak! <br/>Taqobalallahu Minna Waminkunm!</span><p>As we rejoice with family and relatives on this auspicious occasion. May <span> ALLAH</span> Taala grant us steadfastness on the path of righteousness, elevate our īman, cleanse our sins and bestow His blessings and mercy upon us in this world and in the hereafter.</p></div>     <h5>greetings from: <span>abdulmuiz</span></h5><div class="days-left"><div><p id="days" >00</p><span>Days</span></div> <div><p id="hours">00</p><span>Hours</span></div><div><p id="minutes">00</p><span>Minutes</span></div><div><p id="seconds">00</p><span>Seconds</span> </div></div>';
    
    
    
    var nameSpan= document.querySelector('span');

  nameSpan.innerHTML = `${nameInput.value},`;

//countdown

  var countDown = new Date("June 28, 2023 00:00:00").getTime();
  var i = setInterval(() => {
    var now = new Date().getTime();
    var difference = countDown - now;
  
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000 );
  
  
  
    document.querySelector('#days').innerHTML = days;
    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#minutes').innerHTML = minutes;
    document.querySelector('#seconds').innerHTML = seconds;
  
  
    if (difference < 0) {
      clearInterval(i);
      document.querySelector('#days').innerHTML = '00';
      document.querySelector('#hours').innerHTML = '00';
      document.querySelector('#minutes').innerHTML = '00';
      document.querySelector('#seconds').innerHTML = '00';
    }
  
  }, 1000);
  
  


  }
});


//countdown
var countDown = new Date("June 28, 2023 00:00:00").getTime();
var i = setInterval(() => {
  var now = new Date().getTime();
  var difference = countDown - now;

  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000 );



  document.querySelector('#days').innerHTML = days;
  document.querySelector('#hours').innerHTML = hours;
  document.querySelector('#minutes').innerHTML = minutes;
  document.querySelector('#seconds').innerHTML = seconds;


  if (difference < 0) {
    clearInterval(i);
    document.querySelector('#days').innerHTML = '00';
    document.querySelector('#hours').innerHTML = '00';
    document.querySelector('#minutes').innerHTML = '00';
    document.querySelector('#seconds').innerHTML = '00';
  }

}, 1000);




//if ( difference ) {

//}
