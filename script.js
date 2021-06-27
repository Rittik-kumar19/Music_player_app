
const music=document.querySelector("audio");
const img = document.querySelector("img")
const play=document.getElementById("play");
const artist=document.getElementById("artist");
const title=document.getElementById("title");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const collection =[
    {
        name:"song5",
        title:"Kho Gaye",
        artist:"Prateek"
    },
    {
        name:"song1",
        title:"Funk Down",
        artist:"chrissy",
    },
    {
        name:"song2",
        title:"Jo bheji",
        artist:"palak",
    },
    {
        name:"song3",
        title:"Adventure",
        artist:"himitsu",
    },
    {
        name:"song4",
        title:"kya btau",
        artist:"A.R rahman",
    },
];
let isPlaying=false;
//for play function
const playMusic = ()=>{
    isPlaying=true;;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
};
//for pause function
const pauseMusic = ()=>{
    isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
};
const loadsong=(collection)=>{
    title.textContent=collection.title;
    artist.textContent=collection.artist;
    music.src="songs/"+collection.name + ".mp3";
    img.src="images/"+collection.name + ".jpg";
};
songIndex=1;
const nextSong=()=>{
    songIndex=(songIndex+1)%collection.length;
    loadsong(collection[songIndex]);
    playMusic();
};
const prevSong=()=>{
    songIndex=((songIndex-1)+collection.length)%collection.length ;
    loadsong(collection[songIndex]);
    playMusic();
};

//loadsong(songs[2]);
next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);
play.addEventListener('click',()=>{
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }//if false then play function call karo
    //agar true pause function call karo
});
//now i want to change songs
