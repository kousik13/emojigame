import {Component} from 'react'
import './index.css'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

export default class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    selectedEmojiIds: [],
    isGameInProgress: true,
  }

  onEmojiSelection = selectedEmojiId => {
    this.setState(previousEmojiGameState => {
      let {
        score,
        topScore,
        selectedEmojiIds,
        isGameInProgress,
      } = previousEmojiGameState

      if (selectedEmojiIds.includes(selectedEmojiId)) {
        // Lost game
        const selectedUniqueEmojis = selectedEmojiIds.length
        if (selectedUniqueEmojis > topScore) {
          topScore = selectedUniqueEmojis
        }

        isGameInProgress = false
      } else if (selectedEmojiIds.length === 11) {
        // Won Game: New emoji id makes the 12th unique selection
        score = 12
        if (score > topScore) {
          topScore = score
        }

        isGameInProgress = false
      } else {
        // Game in progress
        selectedEmojiIds = [...selectedEmojiIds, selectedEmojiId]
        score += 1
      }

      const updatedEmojiGameState = {
        score,
        topScore,
        selectedEmojiIds,
        isGameInProgress,
      }

      return updatedEmojiGameState
    })
  }

  onPlayAgain = () =>
    this.setState({
      score: 0,
      selectedEmojiIds: [],
      isGameInProgress: true,
    })

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, topScore, isGameInProgress} = this.state
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <div className="emoji-game-bg-container">
        <NavBar score={score} topScore={topScore} isGameOn={isGameInProgress} />
        <div className="gaming-area">
          {isGameInProgress ? (
            <ul className="emoji-card-collection-container">
              {shuffledEmojisList.map(emojiListItem => (
                <EmojiCard
                  key={emojiListItem.id}
                  cardData={emojiListItem}
                  cardSelectionHandler={this.onEmojiSelection}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              score={score}
              playAgainEventHandler={this.onPlayAgain}
            />
          )}
        </div>
      </div>
    )
  }
}
