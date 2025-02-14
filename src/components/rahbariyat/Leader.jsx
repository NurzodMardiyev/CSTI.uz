import React, { useState } from "react";
import Workers from "./Workers";

function Leader({ leader, workers }) {
  const [activeTab, setActiveTab] = useState("1");
  const [showFullText, setShowFullText] = useState(false); // Qisqartirish holatini boshqarish
  
 
  const handleTabClick = (key) => {
    setActiveTab(key);
  };

  function Empl() {
    return workers?.employees?.map(
      (item) => !item?.is_head && <Workers item={item} />
    );
  }

  const MyComponent = ({ textData }) => {
    const processedText =
      textData
        ?.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        ?.replace(/\*(.*?)\*/g, "<em>$1</em>")
        ?.replace(/\n/g, "<br/>") || "";

    return <div dangerouslySetInnerHTML={{ __html: processedText }} />;
  };

  const handleToggleText = () => {
    setShowFullText((prev) => !prev); // Matnni ko'rsatish yoki yashirish
  };

  const tabItems = [
    {
      key: "1",
      label: "Tarjimai hol",
      content: (
        <div className="px-8 pb-4 lg:text-[18px]">
          <MyComponent
            textData={
              showFullText
                ? leader?.head?.description
                : leader?.head?.description?.substring(0, 200) // Qisqartirish (200 ta belgidan keyin)
            }
          />
          <button
            onClick={handleToggleText}
            className="text-blue-500 hover:text-blue-700 mt-2">
            {showFullText ? "Kamroq..." : "Batafsil..."}
          </button>
        </div>
      )
    },
    {
      key: "2",
      label: "Xodimlar",
      content: <Empl />
    }
  ];

  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full px-5 justify-start">
        {tabItems.map(
          (tab) =>
            !workers?.is_leadership && (
              <div
                key={tab.key}
                onClick={() => handleTabClick(tab.key)}
                className={`px-3 py-2 border-b-2 cursor-pointer text-lg font-medium transition-all ${
                  activeTab === tab.key
                    ? "border-white text-white"
                    : "border-transparent text-gray-200 hover:text-gray-400"
                }`}>
                {tab.label}
              </div>
            )
        )}
      </div>

      <div className="mt-4 h-full rounded-bl-xl overflow-hidden rounded-br-xl">
        <div className="bg-[#12284C] text-white w-full">
          {tabItems.find((tab) => tab.key === activeTab)?.content}
        </div>
      </div>
    </div>
  );
}

export default Leader;
