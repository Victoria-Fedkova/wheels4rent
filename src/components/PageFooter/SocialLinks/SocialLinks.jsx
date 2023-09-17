import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { SocialContainer, SocialLink } from './SocialLinks.styled';

export default function SocialLinks() {
  return (
    <SocialContainer>
      <SocialLink href="https://www.youtube.com/c/jamesqquick">
        <FontAwesomeIcon icon={faYoutube} size="1x" />
      </SocialLink>
      <SocialLink href="https://www.facebook.com/learnbuildteach/">
        <FontAwesomeIcon icon={faFacebook} size="1x" />
      </SocialLink>
      <SocialLink href="http://www.instagram.com/larnbuildteach">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </SocialLink>
      <SocialLink href="https://wwww.twitter.com">
        <FontAwesomeIcon icon={faTwitter} size="1x" />
      </SocialLink>
    </SocialContainer>
  );
}
