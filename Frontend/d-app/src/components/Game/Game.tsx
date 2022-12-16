import React, { useState, useEffect } from 'react';
import * as S from './Game.styles';
import Round from '../Round/Round';
import Button from '../Button/Button';
import Rules from '../Rules/Rules';
import Score from '../Score/Score';
import TriangleBG from '../../assets/images/bg-triangle.svg';
import { Choice, Outcome } from '../../GameLogic';

interface gameState {
  choice: 'rock' | 'paper' | 'scissors' | null;
  score: number;
}
function Game() {
  const [displayRules, setDisplayRules] = useState(false);
  const [gameState, setGameState] = useState<gameState>({
    choice: null,
    score: 0,
  });

  function fetchScore() {
    const score = localStorage.getItem('score');
    if (typeof score === 'string') {
      setGameState(prev => ({ ...prev, score: parseInt(score) }));
    } else {
      localStorage.setItem('score', `${gameState.score}`);
    }
  }
  function startRound(choice: Choice) {
    setGameState(prev => ({ ...prev, playing: true, choice }));
  }
  function resetRound() {
    setGameState(prev => ({ ...prev, playing: false, choice: null }));
  }
  function increment() {
    localStorage.setItem('score', `${gameState.score + 1}`);
    setGameState(prev => ({ ...prev, score: prev.score + 1 }));
  }
  function decrement() {
    localStorage.setItem('score', `${gameState.score - 1}`);
    setGameState(prev => ({ ...prev, score: prev.score - 1 }));
  }
  function handleScore(outcome: Outcome) {
    switch (outcome) {
      case 'win':
        increment();
        break;
      case 'loose':
        decrement();
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    fetchScore();
  }, []);
  return (
    <>
      <S.Body>
        {displayRules && (
          <Rules clickHandler={() => setDisplayRules(!displayRules)} />
        )}
        <Score score={gameState.score} />
        {gameState.choice ? (
          <Round
            choice={gameState.choice}
            handleReset={resetRound}
            handleScore={handleScore}
          />
        ) : (
          <S.ButtonGrid>
            <Button choice={'paper'} clickHandler={() => startRound('paper')} />
            <Button
              choice={'scissors'}
              clickHandler={() => startRound('scissors')}
            />
            <Button choice={'rock'} clickHandler={() => startRound('rock')} />
            <S.Triangle src={TriangleBG} alt='Triangle background' />
          </S.ButtonGrid>
        )}
        <S.Flex>
          <S.ToggleRules onClick={() => setDisplayRules(!displayRules)}>
            RULES
          </S.ToggleRules>
        </S.Flex>
      </S.Body>
    </>
  );
}
export default Game;
