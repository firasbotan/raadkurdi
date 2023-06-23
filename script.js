// Fetch the music data from the JSON file
fetch('data/musicData.json')
  .then(response => response.json())
  .then(data => populateList(data))
  .catch(error => console.error(error));


function populateList(data){
 var myList = document.getElementById('myList');
 var activeItem = null; // Track the currently playing song item


  data.forEach(model => {
    if(model !== null){
        var listItem = document.createElement('li');

        var div = document.createElement('div');
        div.setAttribute('id' , 'item');

        var imgI = document.createElement('img');
        imgI.src = "img/play-flat.png";

        var divCont = document.createElement('div');
        divCont.setAttribute('id' , 'container');

        var pI = document.createElement('p');
        pI.textContent = model.suratNo;

        var hI = document.createElement('h4');
        hI.textContent = model.suratNameEn;

        divCont.appendChild(pI);
        divCont.appendChild(hI);

        div.appendChild(imgI);
        div.appendChild(divCont);
        
      

        listItem.appendChild(div);

        myList.appendChild(listItem);



        listItem.addEventListener('click', function() {
            playAya(model.linkUrl, model.suratNameEn, listItem);
          });
        



    }
    
  });


  // Play the selected music
  function playAya(url, songName, item) {
    var musicPlayer = document.getElementById('musicPlayer');
    var currentSong = document.getElementById('currentSong');

    if (activeItem) {
      activeItem.classList.remove('active'); // Remove highlighting from the previous active item
    }

    musicPlayer.src = url;
    musicPlayer.play();

    currentSong.textContent = songName;
    item.classList.add('active'); // Highlight the current item
    activeItem = item; // Update the active item
  }

}
 