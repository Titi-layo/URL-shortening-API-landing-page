import Image from "next/image";
import { StyledSocials } from "./styles.social";
import { Icon } from "../icon/icon";

const socials = [
  {
    alt: "facebook-logo",
    type: "facebook",
    url: "facebook.com",
  },
  {
    alt: "twitter-logo",
    type: "twitter",
    url: "twitter.com",
  },
  {
    alt: "pinterest-logo",
    type: "pinterest",
    url: "pinterest.com",
  },
  {
    alt: "instagram-logo",
    type: "instagram",
    url: "instagram.com",
  },
];

export const Socials = () => {
  return (
    <StyledSocials>
      {socials.map((social, index) => (
        <a key={index} href={social.url}>
          <Icon type={social.type} />
        </a>
      ))}
    </StyledSocials>
  );
};
