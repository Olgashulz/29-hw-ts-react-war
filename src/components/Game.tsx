import React, {useEffect, useRef, useState} from 'react';
import {result} from "../utils/constants";
import {Card, GameResult} from "../utils/types";

interface Props {
    changePage: (page: string) => void,
    name: string
    setGameResults: (results: GameResult[]) => void
}

const Game = ({changePage, name, setGameResults}: Props) => {
    const [compCard, setCompCard] = useState('computer card');
    const [playerCard, setPlayerCard] = useState('player card');
    const compDeck = useRef<Card[]>([]);
    const playerDeck = useRef<Card[]>([]);
    const points = useRef<number[]>([0, 0]);

    useEffect(() => {
        compDeck.current = [{rank: 8, suit: 'heart'}, {rank: 8, suit: 'club'}];
        playerDeck.current = [{rank: 3, suit: 'diamond'}, {rank: 7, suit: 'spade'}];
    }, [])

    const handleClickNext = () => {
        if (compDeck.current.length) {
            const player = playerDeck.current.pop();
            const comp = compDeck.current.pop();
            setCompCard(`${comp!.rank} ${comp!.suit}`);
            setPlayerCard(`${player!.rank} ${player!.suit}`)
            calculateResult(comp!, player!);
        } else {
            const arrOfRound:GameResult[] = [{name: "Computer", scores: points.current[0]}, {name: name, scores: points.current[1]}]
            setGameResults(arrOfRound)
            changePage(result)
        }
    }

    const calculateResult = (comp: Card, player: Card) => {
        comp.rank > player.rank ? points.current[0]++ : points.current[1]++
    };

    return (
        <>
            <h2>Computer</h2>
            <p>{compCard}</p>
            <p>{playerCard}</p>
            <h2>{name}</h2>
            <button onClick={handleClickNext}>Next</button>
        </>
    );
};

export default Game;