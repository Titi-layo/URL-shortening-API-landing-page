import Image from "next/image";
import { StyledIdent } from "./ident.styles";

interface IdentProp {
  src: string;
  alt: string;
}

export const Ident = ({ src, alt }: IdentProp) => {
  return (
    <StyledIdent className="ident">
      <Image src={src} alt={alt} width="40" height="40" />
    </StyledIdent>
  );
};
