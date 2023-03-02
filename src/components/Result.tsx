import React from 'react';
import {game} from "../utils/constants";
import {GameResult} from "../utils/types";

interface Props {
    changePage: (page: string) => void,
    name: string,
    results: GameResult[]
    setGameResults: (results: GameResult[]) => void
}

const Result = ({changePage, results, setGameResults}: Props) => {
    const startGame = () => {
        setGameResults([]);
        changePage(game);
    }

    const getTitle = () => {
        if (results[0].scores > results[1].scores) {
            return "Winner\\Loser"
        } else if (results[0].scores < results[1].scores) {
            return "Loser\\Winner"
        } else {
            return "Draw";
        }
    }


    return (
        <>
            <h1>{getTitle()}</h1>
            <h2>{results[0].name} - {results[1].name}</h2>
            <h2>{results[0].scores} - {results[1].scores}</h2>
            <button onClick={() => startGame()}>Again?</button>
        </>
    )
};

export default Result;