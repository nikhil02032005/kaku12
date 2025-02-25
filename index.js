       const songs = [
            { name: "Song 1", file: "1.mp3" },
            { name: "Song 2", file: "2.mp3" },
            { name: "Song 3", file: "3.mp3" },
            { name: "Song 4", file: "4.mp3" },
            { name: "Song 5", file: "5.mp3" },
            { name: "Song 6", file: "6.mp3" },
            { name: "Song 7", file: "7.mp3" },
            { name: "Song 8", file: "8.mp3" },
            { name: "Song 11", file: "9.mp3" },
            { name: "Song 10", file: "10.mp3" },
        ];

        const audioPlayer = document.getElementById('audioPlayer');
        const songNameDisplay = document.getElementById('songName');

        document.querySelectorAll('.song-item').forEach((item, index) => {
            item.addEventListener('click', () => {
                const song = songs[index];
                audioPlayer.src = song.file;
                audioPlayer.play();
                songNameDisplay.textContent = song.name;
            });
        });