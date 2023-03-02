import React, {useState} from 'react';
import Start from "./components/Start";
import Game from "./components/Game";
import Result from "./components/Result";
import {game, result} from "./utils/constants";
import {GameResult} from "./utils/types";

const App = () => {
  const [page, setPage] = useState('start');
  const [name, setName] = useState('');
  const [gameResults, setGameResults] = useState<GameResult[]>([]);

  const handleGameResults = (results: GameResult[]) => {
    setGameResults(results);
    setPage(result);
  }

  const handleNameChange = (name: string) => {
    setName(name);
    setPage(game);
  }

  let pageContent;

  switch (page) {
    case 'start':
      pageContent = <Start changePage={setPage} changeName={handleNameChange}/>;
      break;
    case 'game':
      pageContent = <Game name={name} changePage={setPage} setGameResults={handleGameResults}/>;
      break;
    case 'result':
      pageContent =
          <Result changePage={setPage} name={name} results={gameResults} setGameResults={handleGameResults}/>;
      break;
    default:
      pageContent = <Start changePage={setPage} changeName={handleNameChange}/>;
      break;
  }

  return (
      <div className='App'>
        {pageContent}
      </div>
  );
};

export default App;
