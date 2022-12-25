import React from "react";
import * as S from "./Style";

interface Props {
  title: string[];
}

const ButtonFilter = (props: Props) => {

    const handleScroll = (x:number,y:number) => {
        window.scrollBy(x, y)
    }
  return (
    <S.Container>
        <S.ButtonLeft onClick={()=>handleScroll(-100,0)}>esq</S.ButtonLeft>
        {props.title.map((item,index) => {
          return <S.ButtonFilter key={index}>{item}</S.ButtonFilter>;
        })}
        <S.ButtonRigth onClick={()=>handleScroll(100,0)}>dir</S.ButtonRigth>
    </S.Container>
  );
};

export default ButtonFilter;
