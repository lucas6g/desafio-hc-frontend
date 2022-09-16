import styled from 'styled-components'
/* eslint-disable prettier/prettier */
interface ContainerProps {
  imgUrl: string
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  overflow: hidden;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 2px;
  background-image: url(${props => props.imgUrl});
  background-repeat: no-repeat;

  background-size: cover;
  background-position: center;
`

export const ActorInfoBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 16px 16px 16px;
  background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 45.67%);

  @media (min-width: 1024px) {
    &:hover {
      div.actorSocialMedia {
        opacity: 1;
        visibility: visible;
      }

      strong {
        visibility: visible;
        opacity: 1;
      }
    }
  }
`
export const ActorName = styled.strong`
  font-size: 12px;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.white};

  transition: opacity 0.5s linear;

  @media (min-width: 1024px) {
    font-size: 16px;
    margin-bottom: 16px;
    opacity: 0;
    visibility: hidden;
  }
`
export const SocialMediaLinks = styled.div`
  display: none;
  visibility: hidden;
  opacity: 0;
  gap: 40px;
  align-items: center;
  div {
    display: flex;
    gap: 40px;
    align-items: center;
    gap: 12px;
    span {
      color: ${({ theme }) => theme.colors.white};
      font-family: ${({ theme }) => theme.fonts.montserrat};
      font-weight: 400;
      font-size: 16px;

      strong {
        color: ${({ theme }) => theme.colors.white};
        font-family: ${({ theme }) => theme.fonts.montserrat};
        font-weight: 600;
        font-size: 16px;
      }
    }
  }
  transition: visibility 0s, opacity 0.5s linear;
  @media (min-width: 1024px) {
    display: flex;
  }
`
