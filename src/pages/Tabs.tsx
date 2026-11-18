import { useState } from "react";

type Tab = {
  name: string,
  content: string
}

const tabs: Tab[] = [
  {
    name: "Tab 1",
    content: "I'm Tab 1"
  },
  {
    name: "Tab 2",
    content: "I'm Tab 2"
  },
  {
    name: "Tab 3",
    content: "I'm Tab 3"
  }
];


export default function Tabs () {

  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  return (
    <div
      className="cont"
      style={{
        width: "30rem",
        alignItems: "center",
        margin: "10rem auto 0",
        border: "2px solid #000",
        padding: "10px"
      }}
    >
      <div
        className="tabs"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {tabs.map((tab, index) => 
          <button
            key={index}
            onClick={() => setActiveTabIndex(index)}
            style={{
              padding: "5px 10px"
            }}
            disabled={activeTabIndex === index}
          >
            {tab.name}
          </button>
        )}
      </div>
      <div
        className="content"
        style={{
          width: "100%",
          height: "15rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
          backgroundColor: "gray",
          color: "white"
        }}
      >
        {tabs[activeTabIndex].content}
      </div>
    </div>
  );
}