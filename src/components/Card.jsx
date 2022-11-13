import { CardWrapper } from "../styles/Home";

const Card = ({ children, label }) => {
  return (
    <CardWrapper>
      <p>{label}</p>
      {children}
    </CardWrapper>
  );
};

export default Card;
