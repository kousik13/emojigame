import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgainEventHandler} = props

  return (
    <div className="game-outcome-card">
      <img
        className="game-outcome-card-img"
        src={
          score === 12
            ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
        }
        alt="win or lose"
      />
      <div className="game-outcome-card-content">
        <h1 className="game-outcome-text">
          {score === 12 ? 'You Won' : 'You Lose'}
        </h1>
        <p className="game-best-score-text">
          {score === 12 ? 'Best Score' : 'Score'}
        </p>
        <p className="game-score">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={playAgainEventHandler}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
