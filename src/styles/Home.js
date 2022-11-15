import styled from "styled-components";
import { device } from "../styles/device";
import { motion } from "framer-motion";

export const Hero = styled.main`
  background-color: #0d0d0d;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const UpperContent = styled.div`
  width: 100%;
  padding: 50px 20px;
  height: auto;

  @media ${device.laptop} {
    height: 100vh;
    padding: 200px 150px;
  }
`;

export const Grid = styled(motion.div)`
  width: 100%;
  padding: 30px 0px;
`;

export const GridRow = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  padding: 20px 0px;
  font-size: 1rem;
  justify-content: space-between;

  @media ${device.laptop} {
    flex-direction: row;
    font-size: 1.2rem;
  }
`;

export const GridRowElem = styled.div`
  padding: 10px 0px;
  @media ${device.laptop} {
    padding: 0px;
  }
  a {
    background-color: #dd6d4b;
    color: blue;
    padding: 10px;
    border-radius: 0.55556rem;
  }
`;

export const AboutSection = styled.section`
  background-color: #3b7939;
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    padding: 200px 150px;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const AboutTextContainer = styled.div`
  width: 100%;
  font-size: 1rem;
  @media ${device.laptop} {
    width: 65%;
    font-size: 1.3rem;
  }
`;

export const TitleStyle = styled(motion.h2)`
  font-size: 1.2rem;
  line-height: 4.944rem;
  @media ${device.laptop} {
    font-size: 3rem;
    line-height: 5rem;
  }
`;

export const TextStyle = styled(motion.p)`
  font-size: 1rem;
  width: 100%;
  align-self: flex-end;
  letter-spacing: 0.006rem;
  font-size: 1.1rem;
  line-height: 1.556rem;

  @media ${device.laptop} {
    font-size: 1em;
  }
`;

export const SkillSection = styled.ul`
  background-color: white;
  color: rgb(157, 154, 154);
  height: auto;
  width: 100%;
  padding: 20px;

  @media ${device.laptop} {
    padding: 200px 150px;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Skill = styled(motion.li)`
  padding: 20px 0px;
  font-size: 1rem;
  @media ${device.laptop} {
    font-size: 1.5rem;
    width: 33%;
  }
`;

export const SkillCircle = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  display: inline-block;
  background-color: #fef851;

  @media ${device.laptop} {
    height: 20px;
    width: 20px;
  }
`;

export const ProjectsSection = styled.section`
  padding: 20px;
  @media ${device.laptop} {
    padding: 200px 150px;
  }
`;

export const ProjectsContainer = styled(motion.section)`
  background-color: #0d0d0d;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media ${device.tablet} {
    flex-wrap: wrap;
    flex-direction: row;
  }

  @media ${device.laptop} {
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0px;
    justify-content: space-between;
  }
`;

export const ProjectCard = styled.div`
  width: 100%;
  background-color: #e6e6dc;
  color: #0d0d0d;
  margin: 8px 0px;
  padding: 30px;

  &:hover {
    background-color: rgba(237, 105, 41, 1);
  }

  @media ${device.tablet} {
    width: 49%;
  }

  @media ${device.laptop} {
    width: 49%;
  }
`;

export const ProjectCardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;

  p {
    font-weight: bold;
  }
`;

export const TechStack = styled.div`
  display: flex;
  p {
    padding-left: 10px;
  }
`;

export const ProjectCardTitleCircle = styled.div`
  width: 20px;
  height: 20px;
  background-color: blue;
  border-radius: 50%;
`;

export const CardWrapper = styled.div`
  border-bottom: 1px solid #0d0d0d;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;

  a {
    display: flex;
    align-items: center;
    color: blue;
  }
`;

export const CardPracticeWrapper = styled.div`
  width: 100%;
`;

export const CardPracticeStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #e6e6dc;
  color: #0d0d0d;
  margin: 8px 0px;
  padding: 8px;

  &:hover {
    background-color: #448aff;
    color: yellow;
  }
`;

export const CardPracticeStyleLeft = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-between;
`;

export const EmailSection = styled.section`
  padding: 20px;
  height: auto;
  background-color: white;
  width: 100%;
  color: #0d0d0d;
  font-size: 1rem;
  text-align: center;

  @media ${device.laptop} {
    font-size: 1.2rem;
    padding: 200px 150px;
    line-height: 3rem;
  }
`;

export const ContactSection = styled.section`
  width: 100%;
  padding: 20px;
  background-color: #e64a19;
  font-size: 1rem;

  a {
    color: white;
  }

  @media ${device.laptop} {
    padding: 200px 150px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: auto;
  padding: 20px;
  font-size: 0.8em;
  background-color: beige;
  color: #1a4edd;

  @media ${device.laptop} {
    padding: 10px 150px;
  }
`;
