import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this comment?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <>  
            <Header text="Feedback App" />
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </>
    )
}

export default App;