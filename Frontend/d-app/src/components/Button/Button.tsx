import React from "react";
import * as S from "./Button.styles";
import Rock from "../../assets/images/icon-rock.svg";
import Paper from "../../assets/images/icon-paper.svg";
import Scissors from "../../assets/images/icon-scissors.svg";
import { Choice } from "../../GameLogic";
interface ButtonProps {
  choice: Choice | "temp";
  xl?: boolean;
  clickHandler?: () => void;
  animate?: boolean;
}
interface Options {
  rock: Display;
  paper: Display;
  scissors: Display;
  temp: Display;
}
type Display = {
  icon: string;
  color: string;
};

const Button: React.FC<ButtonProps> = ({
  choice,
  xl,
  clickHandler,
  animate,
}) => {
  const display: Options = {
    rock: {
      icon: Rock,
      color: "hsl(349, 71%, 52%)",
    },
    paper: {
      icon: Paper,
      color: "hsl(230, 89%, 62%)",
    },
    scissors: {
      icon: Scissors,
      color: "hsl(39, 89%, 49%)",
    },
    temp: {
      icon: "",
      color: "rbga(0,0,0,0)",
    },
  };
  return (
    <S.Wrap onClick={clickHandler}>
      <S.Animate xl={xl} animate={animate} />
      <S.Outer xl={xl} color={display[choice]["color"]}>
        <S.Inner xl={xl} temp={choice === "temp"}>
          {display[choice]["icon"] && (
            <img src={display[choice]["icon"]} alt={`Play ${choice}`} />
          )}
        </S.Inner>
      </S.Outer>
    </S.Wrap>
  );
};
export default Button;
