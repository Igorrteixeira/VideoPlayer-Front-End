import React from "react";
import * as S from "./Style";

interface Props {
  title: string;
  handleClick: () => void;
}

const ButtonFilter = (props: Props) => {
  return (
    <S.ButtonFilter onClick={props.handleClick} key={props.title}>
      {props.title}
    </S.ButtonFilter>
  );
};

export default ButtonFilter;
