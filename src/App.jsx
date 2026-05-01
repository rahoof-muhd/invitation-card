import './App.css'
import butterflies from './assets/butterflies.png'

function App() {
  return (
    <main className="invite-page">
          <div className="butterfly-wrapper">
            <img src={butterflies} alt="Butterflies" className="butterfly-image" />
          </div>
      <div className="cards-wrap">
        <article className="invite-card">
          <div className="plant-branch branch-bottom">
            <span className="leaf leaf-3"></span>
            <span className="leaf leaf-4"></span>
          </div>
          <div className="card-inner">
            <p className="meta-text-bismi">بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ ٱلرَّحِيمِ</p>
            <p>In the name of Allah, the Most Gracious, the Most Merciful</p>
            <p className="meta-text">Together with their families</p>
            <h1 className="couple-name">Ashin & Shahma</h1>
            <p className="invite-copy">
             Request the pleasure of your company at their wedding ceremony
            </p>

            {/* <div className="time-block">
              <span className="time-label">01.00 PM</span>
              <div className="date-stack">
                <span className="day">FRI</span>
                <span className="date">07</span>
                <span className="month">JUN</span>
              </div>
              <span className="year">2026</span>
            </div> */}

            <div className="venue-block">
              <p className="venue-name">United Convention Centre</p>
              <p className="venue-address">Lakkidi, Ottapalam</p>
            </div>

            <p className="closing-text">Reception to follow</p>
          </div>
        </article>

        <article className="save-card">
          <div className="save-inner">
            {/* <div className="plant-branch save-branch">
              <span className="leaf leaf-5"></span>
              <span className="leaf leaf-6"></span>
            </div> */}
            <p className="save-label">Save the</p>
            <h2 className="save-title">Date</h2>
            <p className="save-couple">Ashin & Shahma</p>
            <p className="save-date">FRI | 07 | JUN</p>
          </div>
        </article>
      </div>
    </main>
  )
}

export default App
