/* eslint-disable react/jsx-no-undef */
import type { NextPage } from 'next'
import Image from 'next/image'
import LinkdinIcon from '../../public/icons/linkdin.svg'
import InstagranIcon from '../../public/icons/instagran.svg'
import TwitterIcon from '../../public/icons/twitter.svg'
import TelegranIcon from '../../public/icons/telegran.svg'
import MailIcon from '../../public/icons/email.svg'
import NextLink from 'next/link'
import BookMarkIcon from '../../public/icons/book_mark.svg'

import {
  ArrowDownRight,
  ArrowTopRight,
  ComentIcon,
  LikeIcon,
  ScaleFive,
  ScaleOne,
  ScaleTree,
  VerifiedIcon2,
  ZzzIcon
} from '../components/Icons'
import { Slider } from '../components/Slider/Slider'
import {
  AboutUsSection,
  AboutUsDescription,
  AboutUsTitle,
  ImageContent,
  QuestionsContainer,
  ScaleContainer,
  AboutUsBox,
  MobileTheRockBox,
  IconsGroup2,
  InvestmentThesiContent,
  InvestmentThesisHeader,
  InvestmentThesisSection,
  VideoContainer,
  IconsGroup1,
  ActorsContainer,
  ErasedLine,
  InvestLikeAStarSection,
  InvestLikeStarContent,
  TitleContainer2,
  TitleContainer1,
  BuzzNewsSection,
  BuzzNewsContent,
  Container,
  ToStartupsSection,
  ToStartupsSectionContent,
  Footer,
  FooterContent,
  LinksBlock,
  LinksBlockTitle,
  RightsReservedAndSocialMediaBlock,
  SocialMediaBox,
  Links,
  LogoContainer
} from '../styles/HomeStyles'
import 'swiper/css'

import { ActorImageCard } from '../components/ActorImageCard/ActorImageCard'
import { ArrowRightLink } from '../components/ArrowRightLink/ArrowRightLink'
import Link from 'next/link'
import { NewsPost } from '../components/NewsPost/NewsPost'

import Z12Icon from '../../public/icons/z12.svg'
import ScaleSix from '../../public/icons/scale6.svg'

import IconsGroupWhite from '../../public/icons/icons-group-white.svg'
import { Button } from '../components/Button/Button'
import { theme } from '../styles/theme'
import { PyramidBackground } from '../components/PyramidBackground/PyramidBackground'
import { MagazinesSlider } from '../components/MagazinesSlider/MagazinesSlider'
import { FooterLink } from '../components/FooterLink/FooterLink'
import { SocialMediaLink } from '../components/SocialMediaLink/SocialMediaLink'
import { ChartSlider } from '../components/ChartSlider/ChartSlider'
import { QuestionBox } from '../components/QuestionBox/QuestionBox'

const Home: NextPage = () => {
  return (
    <Container>
      <Slider />
      <AboutUsSection>
        <ZzzIcon id="z-1" />
        <ImageContent>
          <div>
            <AboutUsTitle>ABOUT US</AboutUsTitle>
            <ArrowTopRight />
          </div>
          <Image
            src="/images/dwayne_johnson_the_rock.png"
            width={515}
            height={442}
            quality={100}
            alt="Dwayne Johnson"
          />
        </ImageContent>

        <AboutUsBox>
          <AboutUsTitle>ABOUT US</AboutUsTitle>
          <ArrowDownRight />
        </AboutUsBox>
        <QuestionsContainer>
          <AboutUsDescription>
            Somos um clube de investimento exclusivo focado em{' '}
            <strong>media for equity.</strong>
          </AboutUsDescription>

          <QuestionBox
            questionTitle="Por que?"
            answer="Acreditamos que a atenção que você atrai e influência que gera são"
            linkHref="#"
            linkText="ativos exponenciais."
          />
          <QuestionBox
            questionTitle="Como?"
            answer="Possibilitamos que multiplique esse ativo investindo em"
            linkHref="#"
            linkText="startups de alto crescimento."
          />
          <QuestionBox
            questionTitle="O que?"
            answer=" Potencialize sua receita como autoridade enquanto pode investindo em"
            linkHref="#"
            linkText="media for equity."
            hasBorder={false}
          />

          <Button
            shape="filled"
            textColor={theme.colors.white}
            bgColor={theme.colors.black}
          >
            Seja Investidor
          </Button>
        </QuestionsContainer>

        <MobileTheRockBox>
          <Image
            src="/images/dwayne_johnson_the_rock.png"
            width={515}
            height={442}
            quality={100}
            alt="Dwayne Johnson"
          />
        </MobileTheRockBox>

        <ScaleContainer>
          <ScaleOne />
        </ScaleContainer>
      </AboutUsSection>

      <ChartSlider />

      <InvestmentThesisSection>
        <InvestmentThesisHeader>
          <h3>TESE DE INVESTIMENTO</h3>

          <VideoContainer>
            <Image
              src="/images/curry_video.jpg"
              width={922}
              height={380}
              quality={100}
              alt="Curry Video"
            />
            <InvestmentThesiContent>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <IconsGroup2>
                  <LikeIcon width={121} height={106} />
                  <ComentIcon width={121} height={106} />
                  <VerifiedIcon2 width={121} height={106} />
                </IconsGroup2>

                <p className="selected">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </InvestmentThesiContent>
          </VideoContainer>
          <ScaleTree />
        </InvestmentThesisHeader>

        <IconsGroup1>
          <LikeIcon width={121} height={106} />
          <ComentIcon width={121} height={106} />
          <VerifiedIcon2 width={121} height={106} />
        </IconsGroup1>
      </InvestmentThesisSection>

      <InvestLikeAStarSection>
        <TitleContainer2>
          <VerifiedIcon2 height={40} width={40} />
          <h3>INVEST LIKE A STAR</h3>
          <ErasedLine />
        </TitleContainer2>
        <ActorsContainer>
          <ActorImageCard
            className="card-1"
            imgUrl="/images/ashton_kutcher.jpg"
            actorName="Ashton Kutcher"
            numberOfFollowersOnInstagram={4.6}
            numberOfFollowersOnTwitter={17.1}
          />
          <ActorImageCard
            className="card-2"
            imgUrl="/images/ryan_reynolds.jpg"
            actorName="Ryan Reynolds"
            numberOfFollowersOnInstagram={43.5}
            numberOfFollowersOnTwitter={19.5}
          />
          <ActorImageCard
            className="card-3"
            imgUrl="/images/kendall_kylie_jenner.jpg"
            actorName="Kylie e Kendall Jenner"
            numberOfFollowersOnInstagram={572}
            numberOfFollowersOnTwitter={71.9}
          />
        </ActorsContainer>

        <InvestLikeStarContent>
          <TitleContainer1>
            <VerifiedIcon2 height={40} width={40} />
            <h3>INVEST LIKE A STAR</h3>
            <ErasedLine />
          </TitleContainer1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <Link href={'#'}>
            <ArrowRightLink linkText="Agende uma entrevista" />
          </Link>
        </InvestLikeStarContent>

        <div className="scale-3">
          <ScaleTree id="scale" />
        </div>
      </InvestLikeAStarSection>
      <ZzzIcon id="z-2" />

      <BuzzNewsSection>
        <div>
          <h3>BUZZZZZZZ NEWS</h3>
        </div>
        <BuzzNewsContent>
          <NewsPost
            title="Beyoncé lidera rodada de US$ 31 milhões em empresa de água saborizada"
            postContent="A <strong>Lemon Perfect</strong>, marca de água saborizada, recebeu um aporte no valor de <strong>US$ 31 milhões</strong> em rodada Série A, liderado pela artista e empresária premiada internacionalmente."
            imgUrl="/images/beyonce.jpg"
            imageAlt="Beyonce"
            imageWidth={544}
            imageHeight={340}
            readMoreLinkHref="#"
          />
          <NewsPost
            title="DiCaprio é novo sócio de Lewis Hamilton em império de hambúrguer vegano"
            postContent="A marca de alimentos à base de plantas <strong>Neat Food</strong>, anunciou o início de um contrato de <strong>US$ 30 milhões</strong> de fundos da Série B para impulsionar seu crescimento."
            imgUrl="/images/leonardo_dicaprio.jpg"
            imageAlt="Leonardo DiCaprio"
            imageWidth={544}
            imageHeight={340}
            readMoreLinkHref="#"
          />
        </BuzzNewsContent>
        <ScaleFive id="scale-5" />
      </BuzzNewsSection>

      <ToStartupsSection>
        <ToStartupsSectionContent>
          <div id="content-block-one">
            <h3>PARA STARTUPS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Z12Icon />
          </div>

          <Image
            src="/images/jay_z.jpg"
            width={266}
            height={501}
            quality={100}
            alt="Jay Z"
          />

          <div>
            <IconsGroupWhite id="icons-group-white" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
            <Button
              shape="filled"
              textColor={theme.colors.black}
              bgColor={theme.colors.white}
            >
              Aplicar
            </Button>
          </div>
          <ScaleSix id="scale-6" />
        </ToStartupsSectionContent>
        <PyramidBackground />
      </ToStartupsSection>

      <MagazinesSlider />

      <Footer>
        <FooterContent>
          <Links>
            <LinksBlock>
              <LinksBlockTitle>Buzzzzzzz</LinksBlockTitle>
              <FooterLink linkText="Quem somos" href="#" />
              <FooterLink linkText="Nosso mercado" href="#" />
              <FooterLink linkText="Blog" href="#" />
              <FooterLink linkText="Contato" href="#" />
              <FooterLink linkText="Seja Buzzzzzzz" href="#" />
            </LinksBlock>
            <LinksBlock>
              <LinksBlockTitle>Investidores</LinksBlockTitle>
              <FooterLink linkText="Tese do investidor" href="#" />
              <FooterLink linkText="Seja investidor" href="#" />
              <FooterLink linkText="Nossos investimentos" href="#" />
            </LinksBlock>
            <LinksBlock>
              <LinksBlockTitle>Startups</LinksBlockTitle>
              <FooterLink linkText="Tese de investimento" href="#" />
              <FooterLink linkText="Faça aplicação" href="#" />
              <FooterLink linkText="Termo de investimento" href="#" />
              <FooterLink linkText="Termo de follow on" href="#" />
            </LinksBlock>
          </Links>

          <NextLink href="#">
            <LogoContainer>
              <img src="/images/logo.png" alt="Logo" />
            </LogoContainer>
          </NextLink>
        </FooterContent>
        <hr />
        <RightsReservedAndSocialMediaBlock>
          <span>Buzzzzzzz® - Todos os direitos reservados</span>
          <SocialMediaBox>
            <SocialMediaLink
              href="https://www.linkedin.com"
              icon={LinkdinIcon}
            />
            <SocialMediaLink
              href="https://www.instagram.com"
              icon={InstagranIcon}
            />
            <SocialMediaLink href="https://twitter.com" icon={TwitterIcon} />
            <SocialMediaLink
              href="https://web.telegram.org"
              icon={TelegranIcon}
            />
            <SocialMediaLink href="https://mail.google.com" icon={MailIcon} />
            <SocialMediaLink href="https://www.notion.so" icon={BookMarkIcon} />
          </SocialMediaBox>
        </RightsReservedAndSocialMediaBlock>
      </Footer>
    </Container>
  )
}

export default Home
