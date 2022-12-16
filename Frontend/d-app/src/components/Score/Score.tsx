import React from "react";
import * as S from "./Score.styles";

interface ScoreProps {
  score: number;
}

const Score: React.FC<ScoreProps> = ({ score }: ScoreProps) => {
  return (
    <S.Body>
      <S.Container>
        <S.Heading>ROCK</S.Heading>
        <S.Heading>PAPER</S.Heading>
        <S.Heading>SCISSORS</S.Heading>
      </S.Container>
      <S.Score>
        <S.SubHeading>SCORE</S.SubHeading>
        <S.Total>{score}</S.Total>
      </S.Score>
    </S.Body>
  );
};

export default Score;
