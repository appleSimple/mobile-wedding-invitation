import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';

const Invitation = () => {
  const { greeting } = data;
  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <Host />
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
      {/* TODO: 구글캘린더 추가하기 기능을 넣는다면 링크 수정 */}
      <RoundButton
        target="_blank"
        href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=훈석/지연+결혼식&dates=20260321T033000Z/20260321T050000Z&details=파티움하우스수원+그레이스켈리홀(2층)&location=파티움하우스+수원"
        rel="noreferrer">
        구글 캘린더 추가하기
      </RoundButton>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
