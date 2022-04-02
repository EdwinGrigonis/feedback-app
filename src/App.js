import { useState } from "react";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./data/FeedbackData";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const addFeedback = (newFeedback) => {
        console.log(newFeedback)
    }
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this comment?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <>  
            <Header text="Feedback App" />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                </div>
        </>
    )
}

export default App;