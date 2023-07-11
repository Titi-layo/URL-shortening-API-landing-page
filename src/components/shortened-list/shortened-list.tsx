import { useState } from "react";
import { ShortApiResp, ShortenedCard } from "./shortened-card";
import { StyledList } from "./shortened-list.styles";

interface ShortenedListProps {
  list: ShortApiResp[];
}

export const ShortenedList = ({ list }: ShortenedListProps) => {
  const [copiedCardId, setCopiedCardId] = useState<number>();

  return (
    <StyledList>
      {list.map((item, index) => (
        <ShortenedCard
          key={index}
          id={index}
          isCopied={copiedCardId === index}
          apiResp={item}
          handleCopiedCard={setCopiedCardId}
        />
      ))}
    </StyledList>
  );
};
