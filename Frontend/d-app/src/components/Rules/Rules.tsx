import React from "react";
import styled from "styled-components";
import RuleSVG from "../../assets/images/image-rules.svg";
import * as S from "./Rules.style";
interface Props {
  clickHandler: () => void;
}
function Rules({ clickHandler }: Props) {
  return (
    <S.ModalBg>
      <S.Body>
        <S.HeadingContainer>
          <S.Heading>Rules</S.Heading>
          <S.CrossDesktop onClick={clickHandler} />
        </S.HeadingContainer>
        <S.Image
          src={RuleSVG}
          alt="Rock beats scissors,scissors beat paper, paper beats rock"
        />
        <S.CrossMobile onClick={clickHandler} />
      </S.Body>
    </S.ModalBg>
  );
}

export default Rules;
