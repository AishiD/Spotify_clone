// console.log("Welcome to Spotify");

// //Initialise the Variables
// let songIndex = 0;
// let audioElement = new Audio('song/1.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let masterSongName = document.getElementById('masterPlay');
// let ProgressBar = document.getElementById('masterSongName');
// let gif = document.getElementById('gif');
// let songItems = Array.from(document.getElementsByClassName('songItem'));
// let songs = [
//     {songName: "Agar Tum Saath Ho", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
//     {songName: "Aoge Jab Tum", filePath: "song/2.mp3", coverPath: "covers/3.jpg"},
//     {songName: "Tum Se Hi", filePath: "song/3.mp3", coverPath: "covers/3.jpg"},
//     {songName: "Hawayein", filePath: "song/4.mp3", coverPath: "covers/4.jpg"},
//     {songName: "Maahi Ve", filePath: "song/5.mp3", coverPath: "covers/5.jpg"},
//     {songName: "Kun Faya Kun", filePath: "song/6.mp3", coverPath: "covers/6.jpg"},
// ]

// songItems.forEach((element,i)=>{
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
// })

// //Handle Play Pause
// masterPlay.addEventListener('click', ()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play');
//         masterPlay.classList.add('fa-pause');
//         gif.style.opacity=1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause');
//         masterPlay.classList.add('fa-play');
//         gif.style.opacity=0;
//     }
// })
// //Listen to Events
// audioElement.addEventListener('timeupdate', ()=>{
    
//     //Update seekbar
//     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);

//     ProgressBar.value=progress;
// })
// ProgressBar.addEventListener('change', ()=>{
//     audioElement.currentTime = ProgressBar.value * audioElement.duration/100;
// })

// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-pause');
//         element.classList.add('fa-play');
//     })
// }
// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{ 
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-play');
//         e.target.classList.add('fa-pause');
//         audioElement.src = `song/${songIndex+1}.mp3`;
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         gif.style.opacity = 1;
//         masterPlay.classList.remove('fa-play');
//         masterPlay.classList.add('fa-pause');
//     })
// })

// document.getElementById('next').addEventListener('click', ()=>{
//     if(songIndex>=5){
//         songIndex = 0
//     }
//     else{
//         songIndex += 1;
//     }
//     audioElement.src = `song/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play');
//     masterPlay.classList.add('fa-pause');

// })

// document.getElementById('previous').addEventListener('click', ()=>{
//     if(songIndex<=0){
//         songIndex = 0
//     }
//     else{
//         songIndex -= 1;
//     }
//     audioElement.src = `song/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play');
//     masterPlay.classList.add('fa-pause');
// })


console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let ProgressBar = document.getElementById('ProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Agar Tum Saath Ho", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Aoge Jab Tum", filePath: "song/2.mp3", coverPath: "covers/3.jpg"},
    {songName: "Tum Se Hi", filePath: "song/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Hawayein", filePath: "song/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Maahi Ve", filePath: "song/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Kun Faya Kun", filePath: "song/6.mp3", coverPath: "covers/6.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    ProgressBar.value = progress;
})

ProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = ProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})