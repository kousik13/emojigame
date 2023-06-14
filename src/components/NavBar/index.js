import './index.css'

const NavBar = props => {
  const {score, topScore, isGameOn} = props

  return (
    <nav className="navbar-container">
      <div className="brand-container">
        <img
          className="emoji-game-brand-img"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="navbar-text">Emoji Game</h1>
      </div>

      <div className="score-container">
        {isGameOn && (
          <>
            <p className="navbar-text score-text">Score: {score}</p>
            <p className="navbar-text score-text">Top Score: {topScore}</p>
          </>
        )}
      </div>
    </nav>
  )
}

export default NavBar
