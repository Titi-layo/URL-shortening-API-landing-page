import React from "react";
import { Button } from "../button/button";
import { StyledShortenedCard } from "./shortened-card.styles";

export interface ShortApiResp {
  code: string;
  short_link: string;
  full_short_link: string;
  short_link2: string;
  full_short_link2: string;
  share_link: string;
  full_share_link: string;
  original_link: string;
}

interface ShortenedCardProps {
  apiResp: ShortApiResp;
  isCopied: boolean;
  id: number;
  handleCopiedCard: (id: number) => void;
}

export const ShortenedCard = ({
  id,
  isCopied,
  apiResp,
  handleCopiedCard,
}: ShortenedCardProps) => {
  const handleCopyBtnClick = (id: number) => {
    handleCopiedCard(id);
    navigator.permissions
      .query({ name: "clipboard-write" as PermissionName })
      .then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
          navigator.clipboard.writeText(apiResp["short_link"]).then(
            () => {
              console.log("clipboard successfully set");
            },
            () => {
              console.log("clipboard write failed");
            }
          );
        }
      });
  };

  return (
    <StyledShortenedCard>
      {apiResp["original_link"]}
      <hr />
      <div>
        <div className="url">{apiResp["short_link"]}</div>
        {isCopied ? (
          <Button backgroundColor="dark-violet" shape="square">
            Copied!
          </Button>
        ) : (
          <Button
            onClick={() => {
              handleCopyBtnClick(id);
            }}
            shape="square"
          >
            Copy
          </Button>
        )}
      </div>
    </StyledShortenedCard>
  );
};
