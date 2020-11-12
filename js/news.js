const allMedia = document.querySelector('#pills-approved-interns-tab').addEventListener
('click', media);

const News = document.querySelector('#pills-pending-interns-tab').addEventListener
('click', news);

const Press = document.querySelector('#pills-declined-interns-tab').addEventListener
('click', press);


function media(){
    document.querySelector('.heading').style.backgroundImage = 'url(/images/pg1.png)';
    document.querySelector('.headline-text').innerHTML = 'IN THE MEDIA';
  }

function news(){
    document.querySelector('.heading').style.backgroundImage = 'url(/images/pg3.png)';
    document.querySelector('.headline-text').innerHTML = 'IN THE NEWS';
  }  

function press(){
    document.querySelector('.heading').style.backgroundImage = 'url(/images/pg2.png)';
    document.querySelector('.headline-text').innerHTML = 'PRESS RELEASES';
  } 