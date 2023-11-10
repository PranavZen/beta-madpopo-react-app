import React, { useState } from "react";

function TabsButton(props) {
  const [currentTab, setCurrentTab] = useState("1");
  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };
  return (
    <button
      id={props.id}
      disabled={currentTab === `${props.id}`}
      onClick={handleTabClick}
    >
      {props.tabTitle}
    </button>
  );
}

export default TabsButton;
