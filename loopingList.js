/*  loopingList.js */

const songs = [
  { title: "Until", src: "Until.m4a" },
  { title: "Slowly", src: "Slowly.m4a" },
  /*
  { title: "Quiet Song", src: "Quiet Song.m4a" },
  { title: "Imagining", src: "Imagining.m4a" },
  { title: "Tender Love", src: "Tender Love.m4a" },
  */  
];

let currentSong = 0;
const audio = document.getElementById('audio');
const songTitle = document.getElementById('song-title');

// Load and play the current song
function loadSong(index) {
  audio.src = songs[index].src;
  songTitle.textContent = songs[index].title;
  audio.play();
}

// Move to next song when current ends
audio.addEventListener('ended', () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
});

// Start with the first song
loadSong(currentSong);
