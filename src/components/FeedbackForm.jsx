import { useState, useContext, useEffect } from "react"
import Card from "./shared/Card"
import RatingSelect from "./RatingSelect"
import Button from "./shared/Button"
import FeedbackContext from "./context/FeedbackContext"

function FeedbackForm() {
const [text, setText] = useState('')
const [rating, setRating] = useState(10)
const [btnDisabled, setBtnDisabled] = useState(true)
const [message, setMessage] = useState('')

const {addFeedback, feedbackEdit} = useContext(FeedbackContext)

useEffect(() => {
    if(feedbackEdit.edit === true) {
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
    }
}, [feedbackEdit])


const handleTextChange = (e) => {
    if (text === '') {
        setBtnDisabled(true)
        setMessage(null)
    } else if (text !== '' && text.trim().length <10) {
        setBtnDisabled(true)
        setMessage('Message must be at least 10 characters')
    } else {
        setMessage(null)
        setBtnDisabled(false)
    }

    setText(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10) {
        const newFeedback = {
        text,
        rating
        }

        addFeedback(newFeedback)

        setText('')
    }
}

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your experience with us?</h2>
            < RatingSelect select={(rating) => { setRating(rating) }}/>
            <div className="input-group">
                <input  
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Write your review"
                        value={text}/>
                <Button type="submit" isDisabled={btnDisabled}>Submit</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm