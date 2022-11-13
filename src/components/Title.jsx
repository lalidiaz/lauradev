import { TitleStyle } from "../styles/Home";

const Title = ({ title, animate, variants, delay }) => {
  return (
    <TitleStyle animate={animate} variants={variants} delay={delay}>
      {title}
    </TitleStyle>
  );
};

export default Title;
