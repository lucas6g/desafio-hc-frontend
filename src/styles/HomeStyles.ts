/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  #z-2 {
    display: none;
  }
  @media (min-width: 1440px) {
    #z-2 {
      display: block;
      position: absolute;
      right: -80px;
      bottom: 2350px;
    }
  }
`
export const AboutUsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 16px 16px 0 16px;
  width: 100%;
  position: relative;
  #z-1 {
    position: absolute;
    right: -55px;
    top: -130px;
    z-index: 1;
    width: 231px;
    height: 175px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 2fr 50px;
    padding: 96px 16px 72px 24px;
    gap: 32px;
  }
  @media (min-width: 1440px) {
    grid-template-columns: 554px 2fr 1fr;
    padding: 96px 16px 72px 164px;
  }
`
export const ImageContent = styled.div`
  display: none;
  @media (min-width: 1024px) {
    max-width: 554px;
    display: flex;
    flex-direction: column;
    img {
      min-height: 460px;
    }

    div {
      align-self: flex-end;
      display: flex;
      flex-direction: column;
      gap: 16px;
      svg {
        align-self: flex-end;
      }
    }
  }
`
export const MobileTheRockBox = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 1024px) {
    display: none;
  }
`
export const AboutUsBox = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`
export const QuestionsContainer = styled.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;

  height: 100%;
  button {
    display: none;
    margin-top: auto;
    max-width: 288px;
  }
  @media (min-width: 1024px) {
    button {
      display: block;
    }
  }
`
export const ScaleContainer = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
`
export const AboutUsTitle = styled.h2`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.black};
  @media (min-width: 992px) {
    font-size: 48px;
  }
`
export const AboutUsDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  text-align: left;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.black};
  strong {
    font-weight: 800;
  }
`
export const QuestionBox = styled.div``
export const QuestionTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: 600;
  font-size: 16px;
  @media (min-width: 992px) {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`
export const Answer = styled.p`
  padding: 20px 0px;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  text-align: left;
  @media (min-width: 992px) {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  color: ${({ theme }) => theme.colors.black};
  strong {
    font-weight: 800;
  }
`
export const QuestionDivisor = styled.hr`
  height: 1px;
  opacity: 0.1;
  margin-bottom: 12px;
  @media (min-width: 992px) {
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

export const InvestmentThesisSection = styled.section`
  position: relative;
  height: 700px;

  @media (min-width: 1440px) {
    height: 700px;
  }
`
export const InvestmentThesisHeader = styled.header`
  height: 167px;
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;
  padding: 0 24px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    white-space: nowrap;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 24px;
  }

  & > svg {
    display: none;
  }

  @media (min-width: 1024px) {
    height: 220px;

    h3 {
      display: none;
    }
  }
  @media (min-width: 1440px) {
    & > svg {
      position: absolute;
      right: 40px;
      bottom: -18px;
      display: block;
    }
  }
`
export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    border-radius: 4px;
  }
`
export const InvestmentThesiContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  gap: 8px;

  div {
    position: relative;
    p {
      text-align: left;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.black};
      font-weight: 400;
      line-height: 22px;
      font-family: ${({ theme }) => theme.fonts.montserrat};
      margin-bottom: 8px;
    }
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 922px;
    width: 100%;
    gap: 32px;
  }

  @media (min-width: 1440px) {
    div {
      p.selected {
        margin-left: 50px;
      }
    }
  }
`
export const IconsGroup1 = styled.div`
  display: none;
  @media (min-width: 1440px) {
    opacity: 0.1;
    display: flex;
    gap: 44px;
    position: absolute;
    align-items: center;
    top: 500px;
    left: -218px;
  }
`
export const IconsGroup2 = styled.div`
  display: none;

  @media (min-width: 1440px) {
    opacity: 0.1;
    display: flex;
    gap: 44px;
    margin-top: 45px;
    position: absolute;
    right: -155px;
    align-items: center;
  }
`

export const InvestLikeAStarSection = styled.section`
  margin-top: 128px;
  padding: 0 24px;
  position: relative;

  #z {
    display: none;
  }

  .scale-3 {
    display: none;
  }

  @media (min-width: 400px) {
    margin-top: 32px;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    padding: 0;
    gap: 32px;

    .scale-3 {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 40px;
    }
  }
  @media (min-width: 1440px) {
    margin-top: 128px;
    grid-template-columns: 2fr 2fr 1fr;
    gap: 96px;
    overflow: hidden;
  }
`
export const ActorsContainer = styled.div`
  display: grid;
  height: 350px;
  width: 100%;
  margin-bottom: 16px;
  grid-template-areas:
    'card-3 card-1 card-1'
    'card-3 card-2 .'
    'card-3 . .'
    'card-3 . .';

  gap: 16px;

  .card-1 {
    grid-area: card-1;
    min-height: 110px;
    max-width: 416px;
  }
  .card-2 {
    min-height: 136px;
    grid-area: card-2;
  }
  .card-3 {
    min-height: 297px;
    grid-area: card-3;
  }
  @media (min-width: 400px) {
    height: 500px;
  }
  @media (min-width: 600px) {
    height: 600px;
  }
  @media (min-width: 768px) {
    height: 653px;
  }
  @media (min-width: 1024px) {
    max-width: 640px;
    grid-template-areas:
      ' card-1 card-3'
      ' card-2 card-3'
      ' card-2 card-3';
    .card-1 {
      margin-top: 52px;
      min-width: 200px;
    }
    .card-2 {
      margin: 0 0 32px 50px;
      min-width: 270px;
    }
    .card-3 {
      min-width: 288px;
    }
  }
`
export const InvestLikeStarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    text-align: left;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 400;
    line-height: 22px;
    font-family: ${({ theme }) => theme.fonts.montserrat};
  }
  a {
    margin-top: 32px;
    max-width: 230px;
    width: 100%;
    margin-bottom: 32px;
    padding-bottom: 11px;

    svg {
      height: 24px;
      width: 24px;
    }
  }

  @media (min-width: 1440px) {
    max-width: 448px;
    justify-content: center;

    p {
      font-size: 16px;
    }

    a {
      margin-top: 64px;
    }
  }
`
export const TitleContainer2 = styled.div`
  h3 {
    font-size: 22px;
    line-height: 28px;
    margin-top: 20px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`
export const TitleContainer1 = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    h3 {
      font-size: 36px;
      line-height: 28px;
      margin-top: 20px;
    }
  }
`
export const ErasedLine = styled.div`
  height: 2px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 32px;
  background-image: linear-gradient(to right, black, rgba(0, 0, 0, 0) 91.19%);
`

export const BuzzNewsSection = styled.section`
  position: relative;
  padding-left: 24px;
  padding-bottom: 36px;
  margin-top: 28px;
  #scale-5 {
    display: none;
  }

  div {
    width: 100%;
    max-width: 1024px;

    h3 {
      font-size: 22px;
      margin-bottom: 24px;
    }
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      h3 {
        font-size: 36px;
      }
    }
  }
  @media (min-width: 768px) {
    padding-bottom: 36px;
  }
  @media (min-width: 1440px) {
    #scale-5 {
      display: block;
      position: absolute;
      right: 40px;
      margin: auto 0;
      top: 0;
      bottom: 0;
    }
  }
`
export const BuzzNewsContent = styled.div`
  display: flex;
  overflow-x: auto;

  article {
    min-width: 246px;
    min-height: 297px;
    margin-right: 24px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  &::-webkit-scrollbar {
    width: 0;
  }
`

export const ToStartupsSection = styled.section`
  background-color: ${({ theme }) => theme.colors.black};

  position: relative;

  #scale-6 {
    display: none;
  }

  @media (min-width: 1440px) {
    #scale-6 {
      display: block;
      position: absolute;
      right: 40px;
      top: 300px;
    }
  }
`
export const ToStartupsSectionContent = styled.div`
  padding: 32px 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    button {
      display: none;
    }

    p {
      text-align: center;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.white};
      font-weight: 400;
      line-height: 19px;
      font-family: ${({ theme }) => theme.fonts.montserrat};
    }

    h3 {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.white};
    }
  }
  img {
    object-fit: contain;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    div {
      justify-content: center;
    }
    img {
      object-fit: unset;
    }
  }
  @media (min-width: 1024px) {
    #content-block-one {
      gap: 0;

      h3 {
        margin-bottom: 20px;
      }
      p {
        margin-bottom: 92px;
      }

      svg {
        align-self: center;
      }
    }
    div {
      align-items: flex-start;
      p {
        font-size: 16px;
        text-align: left;
      }
      h3 {
        font-size: 36px;
      }
      button {
        display: block;
        max-width: 256px;
        margin-top: 32px;
      }
      #icons-group-white {
        margin: 0 auto;
        margin-bottom: 60px;
      }
    }
    max-width: 1120px;
    margin: 0 auto;
  }
`
export const Footer = styled.div`
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.black};

  hr {
    height: 1px;
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.5;
    margin: 32px 0px 20px 0px;
  }

  @media (min-width: 1024px) {
    height: 455px;
    padding-top: 72px;
    hr {
      max-width: 1120px;
      margin: 40px auto;
    }
  }
`
export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media (min-width: 1024px) {
    max-width: 1120px;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
  }
`
export const LogoContainer = styled.div`
  img {
    cursor: pointer;
    height: 52px;
    width: 89px;
  }

  @media (min-width: 1024px) {
    position: relative;

    img {
      position: absolute;
      right: 0;
      top: -20px;
    }
  }
  @media (min-width: 768px) {
    img {
      width: 202px;
      height: 120px;
    }
  }
`
export const LinksBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
`
export const LinksBlockTitle = styled.h5`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  line-height: 22px;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  margin-bottom: 1px;
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 72px;
  }
`
export const RightsReservedAndSocialMediaBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    line-height: 19px;
    font-family: ${({ theme }) => theme.fonts.montserrat};
    opacity: 0.8;
  }

  @media (min-width: 1024px) {
    max-width: 1120px;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
  }
`
export const SocialMediaBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    width: unset;
    justify-content: unset;
    gap: 32px;
  }
`
