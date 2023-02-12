import Link from 'next/link';
import styled from 'styled-components';

export default function Logo({isHeader}: {isHeader: boolean}) {
  return (
    <Link href="/" passHref>
      <LogoWrapper>
        {!isHeader && (
          <div className="sidebar-brand-icon rotate-n-15">
            <LogoIcon>🔥</LogoIcon>
          </div>
        )}

        <LogoTitleWrapper>
          <LogoTitle>코기토</LogoTitle>
          <LogoSup>개발자들의 질의응답 공간 🔥</LogoSup>
        </LogoTitleWrapper>
      </LogoWrapper>
    </Link>
  );
}

const LogoTitleWrapper = styled.div``;

const LogoWrapper = styled.a`
  display: inline-block;
  background-color: white;
  color: #303d62;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 70px;
  gap: 10px;
  white-space: nowrap;
  padding-right: 30px;
`;

const LogoIcon = styled.span`
  font-size: 2.5rem;
`;

const LogoTitle = styled.div`
  font-size: 1.44rem;
  font-weight: 700;
  /* padding-right: 80px; */
  line-height: 1.6rem;
`;

const LogoSup = styled.p`
  font-size: 0.5rem;
  padding: 0;
  margin: 0;
`;
