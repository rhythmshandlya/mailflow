import React from "react";

type Props = {
  height: string;
  width: string;
};

const Logo = (props: Props) => {
  return (
    <img
      src="icon.png"
      className="icon"
      width={props.width}
      height={props.height}
    />
  );
};

export default Logo;
