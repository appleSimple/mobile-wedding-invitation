import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/05.webp';

const Main = () => {
  const { greeting } = data;
  return (
    <div>
      <MainImg />
      <MainTitle>{greeting.title}</MainTitle>
      <SubTitle>{greeting.eventDetail}</SubTitle>
    </div>
  );
};

export default Main;

const MainImg = styled.div`
  border-radius: 200px 200px 0 0;
  width: 100%;
  max-width: 450px;
  min-height: 400px;
  background-image: url(${mainImg});
  background-size: 600px;
  background-position: 64% 60%;
  background-repeat: no-repeat;
`;

const MainTitle = styled.p`
  font-family: Yangjin, serif;
  font-size: 2rem;
  color: #2f2120;
  line-height: 120%;
  white-space: pre-line;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #2f2120;
  line-height: 140%;
  white-space: pre-line;
`;
