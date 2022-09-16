import { InstagranIcon, TwitterIcon } from '../Icons'
import {
  ActorInfoBox,
  ActorName,
  Container,
  SocialMediaLinks
} from './ActorImageCardStyles'

interface ActorImageCardStyles {
  numberOfFollowersOnTwitter: number
  numberOfFollowersOnInstagram: number
  imgUrl: string
  className: string
  actorName: string
}

export function ActorImageCard({
  actorName,
  imgUrl,
  className,
  numberOfFollowersOnInstagram,
  numberOfFollowersOnTwitter
}: ActorImageCardStyles) {
  return (
    <Container className={className} imgUrl={imgUrl}>
      <ActorInfoBox>
        <ActorName>{actorName}</ActorName>

        <SocialMediaLinks className="actorSocialMedia">
          <div>
            <InstagranIcon />
            <span>
              <strong>{numberOfFollowersOnInstagram}</strong>M
            </span>
          </div>
          <div>
            <TwitterIcon />
            <span>
              <strong>{numberOfFollowersOnTwitter}</strong>M
            </span>
          </div>
        </SocialMediaLinks>
      </ActorInfoBox>
    </Container>
  )
}
