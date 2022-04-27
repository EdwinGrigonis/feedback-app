import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./data/FeedbackData";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./components/context/FeedbackContext";
import AboutPage from "./pages/AboutPage";

function App() {
    return (
        <FeedbackProvider>
            <Router>  
                <Header text="Feedback App" />
                <div className="container">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList  />
                                </>
                            }>
                        </Route>
                        <Route path="/about" element={<AboutPage />}></Route>
                    </Routes>
                    <AboutIconLink />
                    </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App;

//fixing json server