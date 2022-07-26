import clsx from "clsx";
import React from "react";
import styles from "./BoonContainer.module.css";

const BoonContainer = (props: {
  boon?: string | null;
  placeholder?: string | null;
  className?: string;
  text?: string;
}) => {
  let image = "";
  if (props.placeholder) {
    image = props.placeholder;
  }
  if (props.boon) {
    image = props.boon;
  }
  return (
    <div
      className={clsx({
        [styles.container]: true,
        // [styles.gridItem]: true,
      })}
      style={
        image
          ? { backgroundImage: `url(${image})`, backgroundSize: "cover" }
          : undefined
      }
    >
      {props.text}
    </div>
  );
};

export default BoonContainer;
