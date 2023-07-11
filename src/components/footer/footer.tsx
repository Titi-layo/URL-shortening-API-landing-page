import { Section } from "../section/section";
import { StyledFooter } from "./footer.styles";
import Logo from "../logo/logo";
import { Container } from "../container/container";
import { Socials } from "../socials/socials";

const footerLinks = [
  {
    heading: "Features",
    content: [
      {
        url: "google.com",
        text: "Link Shortening",
      },
      {
        url: "google.com",
        text: "Branded Links",
      },
      {
        url: "google.com",
        text: "Analytics",
      },
    ],
  },

  {
    heading: "Resources",
    content: [
      {
        url: "google.com",
        text: "Blog",
      },
      {
        url: "google.com",
        text: "Developers",
      },
      {
        url: "google.com",
        text: "Support",
      },
    ],
  },

  {
    heading: "Company",
    content: [
      {
        url: "google.com",
        text: "About",
      },

      {
        url: "google.com",
        text: "Our Team",
      },
      {
        url: "google.com",
        text: "Careers",
      },
      {
        url: "google.com",
        text: "Contact",
      },
    ],
  },
];

export const Footer = () => {
  return (
    <Section background="very-dark-violet">
      <Container>
        <StyledFooter>
          <Logo colour="white" />
          <div className="extLinks">
            {footerLinks.map((section) => (
              <div className="list-col" key={section.heading}>
                <h4>{section.heading}</h4>
                <div>
                  {section.content.map((content) => (
                    <a key={content.text}>{content.text}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Socials />
        </StyledFooter>
      </Container>
    </Section>
  );
};
