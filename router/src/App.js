import './App.css';
import Navigation from './components/Navigation/Navigation';
import { LanguageContextProvider } from './services/language';

const App = () => {
  return (
    <div className="App">
      <LanguageContextProvider>
        <Navigation />
      </LanguageContextProvider>
    </div>
  );
};

export default App;
