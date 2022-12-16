import React, { useEffect, useState } from "react";
import * as S from "./Round.styles";
import Button from "../Button/Button";
import { Choice, Outcome, computerChoice, playGame } from "../../GameLogic";

interface RoundProps {
  choice: Choice;
  handleReset: () => void;
  handleScore: (outcome: Outcome) => void;
}
interface State {
  animate: boolean;
  winner: Outcome | null;
  computer: Choice;
}

const Round: React.FC<RoundProps> = ({
  choice,
  handleReset,
  handleScore,
}: RoundProps) => {
  const [state, setState] = useState<State>({
    animate: false,
    winner: null,
    computer: computerChoice(),
  });

  useEffect(() => {
    let temp = playGame(choice, state.computer);
    setTimeout(() => {
      handleScore(temp);
      setState((prev) => ({ ...prev, animate: true, winner: temp }));
    }, 2000);
  }, []);
  return (
    <S.Body>
      <S.Flex>
        <S.Container animate={state.animate}>
          <S.Heading>YOU PICKED</S.Heading>
          <Button choice={choice} xl={true} animate={state.winner === "win"} />
        </S.Container>
        <S.Container animate={state.animate}>
          <S.Heading>THE HOUSE PICKED</S.Heading>
          <S.Animate>
            <S.PlaceHolder />
            <Button
              choice={state.computer}
              xl={true}
              animate={state.winner === "loose"}
            />
          </S.Animate>
        </S.Container>
      </S.Flex>
      {state.winner && (
        <S.Flex>
          <S.OutComeContainer>
            <S.OutCome>
              {
                { win: "YOU WIN", loose: "YOU LOOSE", draw: "IT'S A DRAW" }[
                  state.winner
                ]
              }
            </S.OutCome>
            <S.Button onClick={handleReset}>PLAY AGAIN</S.Button>
          </S.OutComeContainer>
        </S.Flex>
      )}
    </S.Body>
  );
};
export default Round;
