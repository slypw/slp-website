import React, { useState, useEffect } from "react";

interface FadeTransitionProps {
  children: React.ReactNode;
  trigger: any; // change to whatever state triggers transition
}

const FadeTransition: React.FC<FadeTransitionProps> = ({
  children,
  trigger,
}) => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState(children);

  useEffect(() => {
    setShow(false);
    const timeout = setTimeout(() => {
      setContent(children);
      setShow(true);
    }, 200); // fade out duration
    return () => clearTimeout(timeout);
  }, [children, trigger]);

  return (
    <div className={`fade-transition ${show ? "show" : ""}`}>{content}</div>
  );
};

export default FadeTransition;
