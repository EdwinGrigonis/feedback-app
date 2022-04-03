import {v4 as uuidv4} from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./data/FeedbackData";
import AboutPage from "./pages/AboutPage";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this comment?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <Router>  
            <Header text="Feedback App" />
            <div className="container">
                <Route exact path="/">
                    <FeedbackForm handleAdd={addFeedback}/>
                    <FeedbackStats feedback={feedback} />
                    <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                </Route>

                <Route path="/about" component={AboutPage}></Route>
                </div>
        </Router>
    )
}

export default App;