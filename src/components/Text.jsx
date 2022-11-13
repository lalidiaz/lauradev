import { TextStyle } from "../styles/Home";

const Text = ({ text, animate, variants, delay }) => {
  return (
    <TextStyle
      animate={animate}
      initial="hidden"
      variants={variants}
      transition={{
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
        delay,
      }}
    >
      {text}
    </TextStyle>
  );
};

export default Text;
