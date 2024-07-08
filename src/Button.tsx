import React, { FunctionComponent } from "react";

interface buttProps {
  onClick: () => void;
  children: React.ReactNode;
}

/**
 * Renders a button component with the given onClick and children props.
 *
 * @param {Function} onClick - The function to be called when the button is clicked.
 * @param {React.ReactNode} children - The content to be rendered inside the button.
 * @return {React.ReactElement} The rendered button component.
 */
const Mybutton: FunctionComponent<buttProps> = ({ onClick, children }) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
};

export default Mybutton;
