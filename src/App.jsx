import './App.css'

function App() {
  return (
    <main className="invite-page">
      <div className="cards-wrap">
        <article className="invite-card">
          <div className="plant-branch branch-top">
            <span className="leaf leaf-1"></span>
            <span className="leaf leaf-2"></span>
          </div>
          <div className="plant-branch branch-bottom">
            <span className="leaf leaf-3"></span>
            <span className="leaf leaf-4"></span>
          </div>
          <div className="card-inner">
            <p className="meta-text">Together with their families</p>
            <h1 className="couple-name">Ashin & Shahma</h1>
            <p className="invite-copy">
              Request the pleasure of your company at the ceremony of their wedding
            </p>

            <div className="time-block">
              <span className="time-label">01.00 PM</span>
              <div className="date-stack">
                <span className="day">FRI</span>
                <span className="date">07</span>
                <span className="month">JUN</span>
              </div>
              <span className="year">2026</span>
            </div>

            <div className="venue-block">
              <p className="venue-name">United Convention Centre</p>
              <p className="venue-address">Lakkidi, Ottapalam</p>
            </div>

            <p className="closing-text">Reception to follow</p>
          </div>
        </article>

        <article className="save-card">
          <div className="save-inner">
            <div className="plant-branch save-branch">
              <span className="leaf leaf-5"></span>
              <span className="leaf leaf-6"></span>
            </div>
            <p className="save-label">Save the</p>
            <h2 className="save-title">Date</h2>
            <p className="save-couple">Sapar & Ruah</p>
            <p className="save-date">SAT | 25 | JAN</p>
          </div>
        </article>
      </div>
    </main>
  )
}

export default App
