import './index.css'

const EmojiCard = props => {
  const {cardData, cardSelectionHandler} = props
  const {id, emojiName, emojiUrl} = cardData

  const onCardSelect = () => cardSelectionHandler(id)

  return (
    <li className="emoji-card-container" onClick={onCardSelect}>
      <button type="button" className="emoji-card-button">
        <img className="emoji-card-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
