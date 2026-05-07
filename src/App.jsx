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
        src="/assets/song1.mp3"
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
        <div className="romantic-floaters" aria-hidden="true">
          <span className="floater floater-heart floater-1"></span>
          <span className="floater floater-petal floater-2"></span>
          <span className="floater floater-heart floater-3"></span>
          <span className="floater floater-petal floater-4"></span>
          <span className="floater floater-heart floater-5"></span>
          <span className="floater floater-petal floater-6"></span>
          <span className="floater floater-heart floater-7"></span>
          <span className="floater floater-petal floater-8"></span>
        </div>

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

              <div className="scroll-cue" aria-hidden="true">
                <span></span>
              </div>

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

              <div className="calendar-card">
                <div className="calendar-header">
                  <span className="calendar-month-label">June 2026</span>
                </div>

                <div className="calendar-weekdays">
                  <span>Mo</span>
                  <span>Tu</span>
                  <span>We</span>
                  <span>Th</span>
                  <span>Fr</span>
                  <span>Sa</span>
                  <span>Su</span>
                </div>

                <div className="calendar-days">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span className="marked-day">
                    <span className="heart-icon">❤</span>
                  </span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                  <span>11</span>
                  <span>12</span>
                  <span>13</span>
                  <span>14</span>
                  <span>15</span>
                  <span>16</span>
                  <span>17</span>
                  <span>18</span>
                  <span>19</span>
                  <span>20</span>
                  <span>21</span>
                  <span>22</span>
                  <span>23</span>
                  <span>24</span>
                  <span>25</span>
                  <span>26</span>
                  <span>27</span>
                  <span>28</span>
                  <span>29</span>
                  <span>30</span>
                </div>
              </div>

              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ashin%20%26%20Shahma%20Wedding%20Ceremony&dates=20260607/20260608&details=Request%20the%20pleasure%20of%20your%20company%20at%20their%20wedding%20ceremony&location=ASCO%20Convention%20Center%2C%20Toll%20Gate%2C%20near%20Ottappalam-Mayannur%20Bridge"
                className="calendar-link"
                target="_blank"
                rel="noreferrer"
              >
                Add to Google Calendar
              </a>

              {/* <p className="save-couple">Ashin & Shahma</p> */}
            </div>
          </article>

          <article className="venue-card">
            <div className="venue-content">
              <h3 className="venue-heading">Venue</h3>
              
              <div className="venue-details">
                <p className="venue-title">ASCO Convention Center</p>
                <p className="venue-location">
                  Toll Gate, near Ottappalam-Mayannur Bridge
                </p>
              </div>

              <a
                href="https://maps.app.goo.gl/dihaHXf3mAh8gwHx7"
                className="map-link"
                target="_blank"
                rel="noreferrer"
              >
                View on Map →
              </a>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}

export default App
