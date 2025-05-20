const songs = [
    {
      title: "People",
      artist: "Libianca",
      src: "/audio/Libianca - People (Lyrics).mp3",
      cover: "/image/artworks-Ffj8O8nSg6EyNc2w-pIcx0Q-t500x500.jpg",
      lyrics: [
        { time: 0, text: "" },
        { time: 5, text: "Oh-oh, mm, mm" },
        { time: 10, text: "From Bamenda, it's Libianca" },
        { time: 16, text: "Oh-oh (a-yo, Mage, you made a bang)" },
        {
          time: 18,
          text: "I've been drinking more alcohol for the past five days",
        },
        { time: 24, text: "Did you check on me?" },
        { time: 26, text: "Now, did you look for me?" },
        {
          time: 28,
          text: "I walked in the room, eyes are red and I don't smoke banga",
        },
        { time: 33, text: "Did you check on me?" },
        { time: 36, text: "Did you notice me?" },
  
        { time: 37, text: "Nobody will know the paranoia" },
        { time: 42, text: "'Cause I put a smile on my face" },
        { time: 44, text: "A facade you can never face" },
        { time: 48, text: "And if you don't know me well, well" },
        {
          time: 51,
          text: "You won't see how buried I am inside my grave, insine my grave",
        },
  
        { time: 57, text: "'Cause you see people, people, people, people" },
        { time: 61, text: "People don't really know you" },
        { time: 64, text: "They don't really know you" },
        { time: 66, text: "'Cause you see people, people, people" },
        { time: 71, text: "People don't really know you" },
        { time: 74, text: "They don't really know you" },
  
        {
          time: 76,
          text: "I've been drinking more alcohol for the past five days",
        },
        { time: 82, text: "Did you check on me?" },
        { time: 84, text: "Now, did you look for me?" },
        {
          time: 86,
          text: "I walked in the room, eyes are red and I don't smoke banga",
        },
        { time: 92, text: "Did you check on me?" },
        { time: 94, text: "Did you notice me?" },
  
        { time: 95, text: "Oh, holy father" },
        { time: 98, text: "Oh holy father i dey try fo hold my head" },
        { time: 102, text: "I say make you no leave me diko" },
        { time: 106, text: "Holy father" },
        { time: 110, text: "Oh, make You try for understand" },
        { time: 112, text: "Yahoo girl, no dey for here (oh, yeah)" },
  
        { time: 115, text: "'Cause you see people, people, people, people" },
        { time: 120, text: "People don't really know you" },
        { time: 122, text: "They don't really know you" },
        { time: 125, text: "'Cause you see people, people, people" },
        { time: 129, text: "They don't really know you" },
        { time: 132, text: "They don't really know you" },
  
        {
          time: 134,
          text: "I've been drinking more alcohol for the past five days",
        },
        { time: 140, text: "Did you check on me?" },
        { time: 142, text: "Now, did you look for me?" },
        {
          time: 144,
          text: "I walked in the room, eyes are red and I don't smoke banga",
        },
        { time: 150, text: "Did you check on me?" },
        { time: 152, text: "Did you notice me?" },
        {
          time: 154,
          text: "I've been drinking more alcohol for the past five days",
        },
        { time: 159, text: "Did you check on me?" },
        { time: 162, text: "Now, did you look for me?" },
        {
          time: 164,
          text: "I walked in the room, eyes are red and I don't smoke banga",
        },
        { time: 168, text: "Did you check on me?" },
        { time: 171, text: "Now, did you look for me?" },
        {
          time: 173,
          text: "I've been drinking more alcohol for the past five days",
        },
        { time: 179, text: "Did you check on me?" },
      ],
    },
    {
      title: "Where We Are",
      artist: "One Direction",
      src: "/audio/One Direction - Where We Are (Official Audio).mp3",
      cover: "/image/Where_We_Are_29_-_One_Direction.webp",
    },
    {
      title: "See You Again",
      artist: "Wiz Khalifa",
      src: "/audio/Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack.mp3",
      cover: "/image/artworks-000162897425-k8h6e5-t1080x1080.jpg",
    },
    {
      title: "Lebih Baik",
      artist: "CJR",
      src: "/audio/CJR - Lebih Baik (Official Music Video) Ost. CJR The Movie.mp3",
      cover: "/image/ab67616d0000b2730bb20cab37087324970c6013.jfif",
    },
  ];
  
  let currentIndex = 0;
  const audio = document.getElementById("audioPlayer");
  const coverImg = document.querySelector(".cover");
  const titleEl = document.querySelector(".title");
  const artistEl = document.querySelector(".artist");
  const playPauseBtn = document.querySelector(".playPause");
  const lyricsContainer = document.querySelector(".lyrics");
  
  function loadSong(index) {
    const song = songs[index];
    audio.src = song.src;
    coverImg.src = song.cover;
    titleEl.textContent = song.title;
    artistEl.textContent = song.artist;
    loadLyrics(song.lyrics || []);
  }
  
  function playSong() {
    audio.play();
    playPauseBtn.innerHTML = "❚❚";
  }
  
  function pauseSong() {
    audio.pause();
    playPauseBtn.innerHTML = "▶";
  }
  
  playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
      playSong();
    } else {
      pauseSong();
    }
  });
  
  function loadLyrics(lyrics) {
    lyricsContainer.innerHTML = "";
    lyrics.forEach((line) => {
      const p = document.createElement("p");
      p.textContent = line.text;
      p.dataset.time = line.time;
      lyricsContainer.appendChild(p);
    });
  }
  
  function highlightLyrics(currentTime) {
    const lines = Array.from(lyricsContainer.querySelectorAll("p"));
  
    lines.forEach((line) => {
      const time = parseFloat(line.dataset.time);
      line.style.display = "none"; // Semua lirik disembunyikan dulu
    });
  
    let activeIndex = lines.findIndex((line, index) => {
      const time = parseFloat(line.dataset.time);
      const nextTime =
        index < lines.length - 1
          ? parseFloat(lines[index + 1].dataset.time)
          : Number.MAX_VALUE;
      return currentTime >= time && currentTime < nextTime;
    });
  
    if (activeIndex !== -1) {
      // Tampilkan hanya beberapa baris sekitar lirik aktif
      const showRange = 1; // Mau tampilkan berapa baris sebelum dan sesudah aktif (1 = 1 sebelum, 1 sesudah)
  
      for (let i = activeIndex - showRange; i <= activeIndex + showRange; i++) {
        if (i >= 0 && i < lines.length) {
          lines[i].style.display = "block";
          lines[i].classList.toggle("active", i === activeIndex);
        }
      }
    }
  }
  
  document.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong(currentIndex);
    playSong();
  });
  
  document.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(currentIndex);
    playSong();
  });
  
  loadSong(currentIndex);
  
  const currentTimeEl = document.querySelector(".current-time");
  const durationEl = document.querySelector(".duration");
  const progressBar = document.querySelector(".progress-bar");
  
  // Format waktu dari detik ke menit:detik (misal 75 → 1:15)
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  }
  
  // Update durasi total saat metadata lagu dimuat
  audio.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
  });
  
  // Update progress bar dan waktu saat lagu berjalan
  audio.addEventListener("timeupdate", () => {
    progressBar.value = Math.floor(audio.currentTime);
    currentTimeEl.textContent = formatTime(audio.currentTime);
    highlightLyrics(audio.currentTime);
  });
  
  // Klik progress bar untuk seek
  progressBar.addEventListener("input", () => {
    audio.currentTime = progressBar.value;
  });