import { Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage";
import LevelOneQuizPage from "./Pages/LevelOneQuizPage";
import Level2 from "./Pages/LevelTwo";
import LevelTwoPart_Two from "./Pages/Level2_PartTwo";
import LevelOneDesign from "./Pages/Level1_newDesign";
import Questionnaire from "./Pages/Questionnaire";
import Live_Generation from "./Pages/Live_Generation";
// import Live_Generation_2 from "./Pages/Live_Generation_2";
import Finish from "./Pages/Finish";
import { HighlightedTextProvider } from "./context/HighlightedTextContext";
import { QuestionTypeProvider } from "./context/QuestionTypeContext"; // Import the QuestionTypeProvider
import MatchingExercise from "./components/MatchingExercise";
import { matchingData } from "./data/matchingData";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <HighlightedTextProvider>
      <QuestionTypeProvider> {/* Add QuestionTypeProvider to wrap the app */}
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Level-One-Quiz" element={<LevelOneQuizPage />} />
          <Route path="/Level-Two-Part-One" element={<Level2 />} />
          <Route path="/Matching-Exercise" element={<MatchingExercise data={matchingData} />} />
          <Route path="/Level-Two-Part-Two" element={<LevelTwoPart_Two />} />
          <Route path="/Questionnaire" element={<Questionnaire />} />
          <Route path="/Live_Generation" element={<Live_Generation />} />
          <Route path="/Level-One-Design" element={<LevelOneDesign />} />
          {/* <Route path="/Live_Generation_2" element={<Live_Generation_2 />}/> */}
          <Route path="/Finish" element={<Finish />} />
        </Routes>
        </ThemeProvider>
      </QuestionTypeProvider>
    </HighlightedTextProvider>
  );
};

export default App;