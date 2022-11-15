import { CardPracticeStyle, CardPracticeStyleLeft } from "../styles/Home";

const CardPractice = ({ name, code, stack }) => {
  console.log("stack", stack);
  return (
    <CardPracticeStyle>
      <p>{name}</p>

      <CardPracticeStyleLeft>
        <a href={code}>Link</a> |<p>{stack}</p>
      </CardPracticeStyleLeft>
    </CardPracticeStyle>
  );
};

export default CardPractice;
