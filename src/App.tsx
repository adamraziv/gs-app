import React, { useState } from 'react';
import { Book, Home, HelpCircle, FileText, List } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [quizScore, setQuizScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const sections = [
    {
      title: "Porter's Generic Strategies",
      content: "Michael Porter's original framework proposed three generic strategies: cost leadership, differentiation, and focus. These strategies were based on two dimensions: the type of competitive advantage pursued (low cost or differentiation) and the competitive scope (broad or narrow target market).\n\nHowever, when applied to global competition, Porter extended this framework to include five strategies: global cost leadership, global differentiation, global segmentation, protected markets, and national responsiveness. This extension aimed to account for the complexities of international business, but it introduced some inconsistencies and limitations."
    },
    {
      title: "Limitations of Porter's Global Framework",
      content: "The extended framework for global strategies has several limitations. First, it doesn't consistently use the type of competitive advantage (cost or differentiation) to distinguish between strategies. Second, the 'protected markets' strategy doesn't fit well with the efficiency-based logic of the other strategies. Finally, the framework doesn't clearly address how firms can pursue multiple strategies simultaneously without becoming 'stuck in the middle.'\n\nThese limitations suggest that Porter's extended framework may not be as 'generic' or universally applicable as intended when dealing with global competition."
    },
    {
      title: "Efficiency-Based vs. Shelter-Based Strategies",
      content: "A more fundamental distinction in global strategy is between efficiency-based and shelter-based strategies. Efficiency-based strategies rely on firm-specific advantages (FSAs) that enhance cost reduction, differentiation, or infrastructure development. These strategies aim to create value for customers and achieve success through consumer sovereignty.\n\nIn contrast, shelter-based strategies depend on artificial protections, such as government regulations or collusive behavior, to achieve success. While these strategies may provide short-term benefits, they often lead to long-term inefficiencies and competitive disadvantages."
    },
    {
      title: "A New Framework for Global Strategy",
      content: "The authors propose a new framework for understanding global strategies, based on two key parameters: the type of firm-specific advantages (FSAs) and the number of home bases. FSAs can be either location-bound (LB-FSAs) or non-location-bound (NLB-FSAs). The number of home bases refers to whether a firm has a single country as its strategic center or multiple strategic centers globally.\n\nThis framework results in four categories of efficiency-based strategies: multinational (multiple home bases, LB-FSAs), uni-national (single home base, LB-FSAs), global subsidiary mandates (multiple home bases, NLB-FSAs), and global/international firms (single home base, NLB-FSAs). This approach provides a more nuanced and flexible understanding of global strategy than Porter's extended framework."
    }
  ];

  const quizQuestions = [
    {
      question: "What are the three original generic strategies proposed by Porter?",
      options: [
        "Global cost leadership, global differentiation, and focus",
        "Cost leadership, differentiation, and focus",
        "Protected markets, national responsiveness, and global segmentation",
        "Efficiency-based, shelter-based, and hybrid strategies"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the main problem with Porter's extended framework for global strategies?",
      options: [
        "It doesn't consider international markets",
        "It's too simple to apply in real-world situations",
        "It introduces inconsistencies and doesn't always distinguish strategies based on competitive advantage",
        "It only applies to large multinational corporations"
      ],
      correctAnswer: 2
    },
    {
      question: "What is the key difference between efficiency-based and shelter-based strategies?",
      options: [
        "Efficiency-based strategies are only used by large companies",
        "Shelter-based strategies always lead to better long-term performance",
        "Efficiency-based strategies rely on firm-specific advantages, while shelter-based strategies depend on artificial protections",
        "There is no significant difference between the two types of strategies"
      ],
      correctAnswer: 2
    },
    {
      question: "In the new framework proposed by the authors, what are the two key parameters used to categorize global strategies?",
      options: [
        "Cost leadership and differentiation",
        "Configuration and coordination",
        "Type of firm-specific advantages and number of home bases",
        "Market scope and competitive intensity"
      ],
      correctAnswer: 2
    }
  ];

  const glossary = [
    { term: "Generic Strategies", definition: "Fundamental choices in patterns of decisions and actions that have a substantial effect on an organization's functioning and performance." },
    { term: "Firm-Specific Advantages (FSAs)", definition: "Unique assets or capabilities that give a company a competitive edge, including proprietary know-how and transactional advantages." },
    { term: "Location-Bound FSAs (LB-FSAs)", definition: "Firm-specific advantages that benefit a company only in a particular location or set of locations." },
    { term: "Non-Location-Bound FSAs (NLB-FSAs)", definition: "Firm-specific advantages that can be easily transferred and exploited across borders." },
    { term: "Home Base", definition: "The nation where a firm retains effective strategic, creative, and technical control." },
    { term: "Shelter-Based Strategies", definition: "Strategies that rely on artificial protections, such as government regulations or collusive behavior, rather than efficiency-based competitive advantages." }
  ];

  const renderHome = () => (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Global Strategy Study App</h1>
      <p className="mb-4">This app will help you learn about generic strategies in global competition. Use the navigation menu to explore different sections of the content.</p>
      <ul className="list-disc list-inside">
        <li>Chapters: Read through the main sections of the paper</li>
        <li>Quiz: Test your knowledge with interactive questions</li>
        <li>Summary: Get a quick overview of each section</li>
        <li>Glossary: Look up definitions of key terms</li>
      </ul>
    </div>
  );

  const renderChapters = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Chapters</h2>
      {sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
          <p className="whitespace-pre-line">{section.content}</p>
        </div>
      ))}
    </div>
  );

  const renderQuiz = () => {
    const handleStartQuiz = () => {
      setQuizStarted(true);
      setQuizScore(0);
      setCurrentQuestion(0);
      setShowResult(false);
      setSelectedAnswer(null);
    };

    const handleAnswer = (index) => {
      setSelectedAnswer(index);
    };

    const handleNextQuestion = () => {
      if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
        setQuizScore(quizScore + 1);
      }
      setSelectedAnswer(null);
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    };

    if (!quizStarted) {
      return (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Quiz</h2>
          <p className="mb-4">Test your knowledge of global strategy concepts.</p>
          <button onClick={handleStartQuiz} className="bg-yellow-200 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
            Start Quiz
          </button>
        </div>
      );
    }

    if (showResult) {
      return (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Quiz Results</h2>
          <p className="mb-4">You scored {quizScore} out of {quizQuestions.length}.</p>
          <button onClick={() => setQuizStarted(false)} className="bg-yellow-200 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
            Return to Quiz Home
          </button>
        </div>
      );
    }

    const question = quizQuestions[currentQuestion];
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Question {currentQuestion + 1}</h2>
        <p className="mb-4">{question.question}</p>
        {question.options.map((option, index) => (
          <div key={index} className="mb-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="answer"
                value={index}
                checked={selectedAnswer === index}
                onChange={() => handleAnswer(index)}
              />
              <span className="ml-2">{option}</span>
            </label>
          </div>
        ))}
        <button
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
          className="mt-4 bg-yellow-200 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
        </button>
      </div>
    );
  };

  const renderSummary = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Summary</h2>
      {sections.map((section, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
          <p>{section.content.split('\n')[0]}</p>
        </div>
      ))}
    </div>
  );

  const renderGlossary = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Glossary</h2>
      {glossary.map((item, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold mb-2">{item.term}</h3>
          <p>{item.definition}</p>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return renderHome();
      case 'chapters':
        return renderChapters();
      case 'quiz':
        return renderQuiz();
      case 'summary':
        return renderSummary();
      case 'glossary':
        return renderGlossary();
      default:
        return renderHome();
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <nav className="w-64 bg-yellow-100 p-4">
        <h1 className="text-2xl font-bold mb-4">Global Strategy</h1>
        <ul>
          <li className="mb-2">
            <button onClick={() => setCurrentPage('home')} className="flex items-center text-black hover:text-yellow-700">
              <Home className="mr-2" size={18} />
              Home
            </button>
          </li>
          <li className="mb-2">
            <button onClick={() => setCurrentPage('chapters')} className="flex items-center text-black hover:text-yellow-700">
              <Book className="mr-2" size={18} />
              Chapters
            </button>
          </li>
          <li className="mb-2">
            <button onClick={() => setCurrentPage('quiz')} className="flex items-center text-black hover:text-yellow-700">
              <HelpCircle className="mr-2" size={18} />
              Quiz
            </button>
          </li>
          <li className="mb-2">
            <button onClick={() => setCurrentPage('summary')} className="flex items-center text-black hover:text-yellow-700">
              <FileText className="mr-2" size={18} />
              Summary
            </button>
          </li>
          <li className="mb-2">
            <button onClick={() => setCurrentPage('glossary')} className="flex items-center text-black hover:text-yellow-700">
              <List className="mr-2" size={18} />
              Glossary
            </button>
          </li>
        </ul>
      </nav>
      <main className="flex-1 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
