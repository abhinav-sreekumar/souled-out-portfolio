import React from 'react';

function Music() {
  const songs = [
    {
      title: "When I'm With You",
      image: "/images/When I'm with you.jpg",
      spotify: "https://open.spotify.com/track/2H3CJB0edYcEU70NPNbwsB?si=4cc07c66189c46d2",
      apple: "https://music.apple.com/us/song/when-im-with-you/1868680527",
      youtube: "https://music.youtube.com/watch?v=YeoQO6M-Kx0&si=Q4Q20f892WphPnu3"
    },
    {
      title: "Rundown",
      image: "/images/Rundown.jpg",
      spotify: "https://open.spotify.com/track/0fSVNCApgNP20uyCGfAFUW?si=b86663150b23444f",
      apple: "https://music.apple.com/us/song/rundown-feat-abhinav/1820355450",
      youtube: "https://music.youtube.com/watch?v=3Kam_ooKzvg&si=6i-9eJXMjfUbdO1I"
    },
    {
      title: "Another Day",
      image: "/images/Another Day.jpg",
      spotify: "https://open.spotify.com/track/103AsGQNr1ZdfLlo61tmbE?si=dac4fe5d952e40c5",
      apple: "https://music.apple.com/us/album/another-day-feat-abhinav-single/1784465967",
      youtube: "https://music.youtube.com/watch?v=BOEgSPkyXAU&si=cArklKUeJevpBT5z"
    },
    {
      title: "By Myself",
      image: "/images/By Myself.jpg",
      spotify: "https://open.spotify.com/track/37ve7eTBEy7fzChU80xtXe?si=78ad15bd50b54ee9",
      apple: "https://music.apple.com/us/album/by-myself-single/1770886908",
      youtube: "https://music.youtube.com/watch?v=3QE0DQn7IP0&si=j0apyXXCtA2-Dog5"
    },
    {
      title: "More",
      image: "/images/More.jpg",
      spotify: "https://open.spotify.com/track/5dPqHWta0x94g8gyRE90U5?si=4f83d57b6be54536",
      apple: "https://music.apple.com/us/album/more-feat-abhinav-steve-bhasin-single/1817668538",
      youtube: "https://music.youtube.com/watch?v=7sXMy_q5bao&si=eVe7FBEGgYapfX-0"
    },
    {
      title: "Been In Love",
      image: "/images/Been in Love.webp",
      spotify: "https://open.spotify.com/track/39IXGaqTBhwtia2jooiLVy?si=f9dca75236264a4b",
      apple: "https://music.apple.com/us/album/been-in-love-feat-abhinav-s-single/1880684802",
      youtube: null
    }
  ];

  return (
    <section id="music">
      <div className="section-label reveal">Music</div>
      <p className="music-desc reveal d1">Cutting edge production. Funky basslines. Vocal harmonies. Chord progressions that don't take the obvious path. Soul in every note.</p>

      <div className="songs-list">
        {songs.map((song, index) => (
          <div key={index} className={`song-item reveal d${index + 3}`}>
            <div className="song-info">
              <img src={song.image} alt={song.title} className="song-artwork" />
              <h3 className="song-title">{song.title}</h3>
            </div>
            <div className="song-links">
              <a href={song.spotify} target="_blank" rel="noopener noreferrer" className="platform-link magnetic" aria-label="Listen on Spotify">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
              <a href={song.apple} target="_blank" rel="noopener noreferrer" className="platform-link magnetic" aria-label="Listen on Apple Music">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M23.994 6.124c0-.738-.034-1.47-.098-2.198-.09-1.028-.265-2.046-.665-3.003-.738-1.765-2.051-2.902-3.905-3.42-.898-.251-1.829-.318-2.763-.36-.79-.036-1.581-.048-2.373-.048L10.04 0H9.962L9.81.003C8.726.01 7.643.024 6.561.07 5.756.102 4.96.166 4.178.37c-1.586.413-2.785 1.252-3.663 2.657-.737 1.18-1.041 2.505-1.225 3.87-.084.626-.13 1.256-.157 1.887C-.025 10.052-.004 11.32 0 12.585c.003 1.202.017 2.405.078 3.606.032.633.08 1.264.161 1.893.18 1.396.51 2.747 1.292 3.953.925 1.425 2.194 2.314 3.836 2.727.717.18 1.45.264 2.189.312.89.06 1.782.081 2.673.095.42.006.842.01 1.264.011L12.015 24h.077l.16-.001c1.107-.007 2.214-.021 3.32-.067.803-.033 1.598-.096 2.38-.3 1.586-.413 2.785-1.252 3.663-2.657.737-1.18 1.041-2.505 1.225-3.87.084-.626.13-1.256.157-1.887.058-1.268.037-2.536.033-3.801-.003-1.202-.017-2.405-.078-3.606-.032-.633-.08-1.264-.161-1.893zM17.8 11.216c-.001 1.632.001 3.263-.001 4.895 0 .396-.053.787-.168 1.167-.28.924-.88 1.505-1.829 1.753-.638.167-1.286.178-1.937.114-.571-.056-1.115-.196-1.611-.512-.839-.536-1.253-1.316-1.346-2.28-.049-.508-.023-1.015.054-1.518.131-.857.525-1.557 1.207-2.069.513-.386 1.094-.627 1.722-.771.783-.18 1.578-.245 2.381-.188.09.006.181.013.271.022v-6.11c0-.095-.013-.107-.107-.099-1.633.14-3.267.28-4.9.42-.093.008-.105.022-.105.115v8.795c0 .396-.053.787-.168 1.167-.28.924-.88 1.505-1.829 1.753-.638.167-1.286.178-1.937.114-.571-.056-1.115-.196-1.611-.512-.839-.536-1.253-1.316-1.346-2.28-.049-.508-.023-1.015.054-1.518.131-.857.525-1.557 1.207-2.069.513-.386 1.094-.627 1.722-.771.783-.18 1.578-.245 2.381-.188.09.006.181.013.271.022V6.084c0-.068.014-.096.088-.094 1.96.017 3.92.035 5.879.054.071.001.093.019.093.091-.003 1.736-.002 3.472-.002 5.208z"/>
                </svg>
              </a>
              {song.youtube && (
                <a href={song.youtube} target="_blank" rel="noopener noreferrer" className="platform-link magnetic" aria-label="Listen on YouTube Music">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Music;
