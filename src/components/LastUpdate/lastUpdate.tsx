import React from "react";

interface Props {
  date: string;
}

export const LastUpdate: React.FC<Props> = ({ date }) => {
  return (
    <p style={{ fontSize: "1.4rem", fontStyle: "italic" }}>
      Last updated, {date}
    </p>
  );
};
