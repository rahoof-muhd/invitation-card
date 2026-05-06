import './App.css'
import { useState, useRef } from "react";

import butterflies from './assets/butterflies.png'
import bismillah from './assets/bismillah.png'
import topcorner from './assets/top-corner.png'

function App() {

  const audioRef = useRef(null);
  const [open, setOpen] = useState(false);

 const openCurtain = () => {
   setOpen(true);
 
   setTimeout(() => {
     if (audioRef.current) {
       audioRef.current.volume = 0.2;
       audioRef.current.play().catch((err) => {
         console.log("Audio play blocked:", err);
       });
     }
   }, 500); // small delay makes it reliable
 };

  const [muted, setMuted] = useState(false);


  return (
    <>
      {/* 🎭 Curtain */}
     <audio
        ref={audioRef}
        src="/assets/song.mp3"
        loop
        preload="auto"
        muted={muted}
      />
      <div className={`curtain ${open ? "open" : ""}`}>
        <div className="curtain-left" onClick={openCurtain}></div>
        <div className="curtain-right" onClick={openCurtain}></div>

        {!open && (
          <div className="curtain-text" onClick={openCurtain}>
            JOIN OUR STORY
          </div>
        )}
      </div>
      
      {/* 🎉 Main Content */}
      <main className={`invite-page ${open ? "show" : "hide"}`}>
        <div className="butterfly-wrapper">
          <img src={butterflies} alt="Butterflies" className="butterfly-image" />
        </div>

        <div className="cards-wrap">
          <article className="invite-card">

            <div className="corner corner-top">
              <div className='corner-top-left'>
                <img src={topcorner} alt="" className="corner-image" />
              </div>
              <div className='corner-top-right'>
                <img src={topcorner} alt="" className="corner-image" />
              </div>
            </div>

            <div className="card-inner">
              <img src={bismillah} alt="Bismillah" className="bismillah-image" />

              <p className='meta-text1'>
                In the name of Allah, the Most Gracious, the Most Merciful
              </p>

              <p className="meta-text">Together with their families</p>

              <div className="couple-name-div">
                <h1 className="couple-name">
                  <span className="groom">Ashin</span><br/>
                  <span className="name-divider">&amp;</span><br/>
                  <span className="bride">Shahma</span>
                </h1>
              </div>

              <p className="invite-copy">
                Request the pleasure of your company <br/>
                at their wedding ceremony
              </p>

              <div className="venue-block">
                <p className="venue-name">United Convention Centre</p>
                <p className="venue-address">Lakkidi, Ottapalam</p>
              </div>
            </div>

            <div className="corner corner-bottom">
              <div className='corner-bottom-left'>
                <img src={topcorner} alt="" className="corner-image" />
              </div>
              <div className='corner-bottom-right'>
                <img src={topcorner} alt="" className="corner-image" />
              </div>
            </div>

          </article>

          <article className="save-card">
            <div className="save-inner">
              <p className="save-label">Save the</p>
              <h2 className="save-title">Date</h2>
              <p className="save-couple">Ashin & Shahma</p>
              <p className="save-date">FRI | 07 | JUN</p>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}

export default App