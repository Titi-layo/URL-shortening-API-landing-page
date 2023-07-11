import Image from "next/image";
import { StyledSocials } from "./styles.social";

const socials = [
  {
    src: "/icon-facebook.svg",
    alt: "facebook-logo",
  },
  {
    src: "/icon-twitter.svg",
    alt: "twitter-logo",
  },
  {
    src: "/icon-pinterest.svg",
    alt: "pinterest-logo",
  },
  {
    src: "/icon-instagram.svg",
    alt: "instagram-logo",
  },
];

export const Socials = () => {
  return (
    <StyledSocials>
      {socials.map((social) => (
        <Image
          src={social.src}
          alt={social.alt}
          width="30"
          height="30"
          key={social.alt}
        />
      ))}
    </StyledSocials>
  );
};
