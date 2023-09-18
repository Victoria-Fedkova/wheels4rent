import { Logo } from '../Logo/Logo';
import { About } from './About/About';
import { Community } from './Community/Community';
import {
  Footer,
  FooterBottomWrapper,
  FooterTopWrapper,
  FooterWraper,
  Links,
} from './PageFooter.styled';
import SocialLinks from './SocialLinks/SocialLinks';

export const PageFooter = () => {
  return (
    <Footer>
      <FooterWraper>
        <FooterTopWrapper>
          <div>
            <Logo />
            <p>
              Our vision is to provide convenience and
              <br />
              help increase your sales business.
            </p>
          </div>
          <Links>
            <About />
            <Community />
            <div>
              <h3>Socials</h3>
              <SocialLinks />
            </div>
          </Links>
        </FooterTopWrapper>
        <FooterBottomWrapper>
          <p>©2023 WHEELS4RENT. All rights reserved</p>
          <div>
            <a href="/">Privacy & Policy</a>
            <a href="/">Terms & Condition</a>
          </div>
        </FooterBottomWrapper>
      </FooterWraper>
    </Footer>
  );
};
