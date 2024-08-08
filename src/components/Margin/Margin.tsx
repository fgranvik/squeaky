import React from "react";

interface Props {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

const Margin: React.FC<Props> = ({ top, left, bottom, right }) => {
  const style: React.CSSProperties = {
    marginTop: top ?? 0,
    marginLeft: left ?? 0,
    marginBottom: bottom ?? 0,
    marginRight: right ?? 0,
  };

  return <div style={style}></div>;
};

export default Margin;
