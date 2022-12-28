import React from "react";

function FaqAccorionItems({ faqVal, onToggle, active }) {
    const { questions, answers } = faqVal;
  return (
    <div
      className="rounded-20
                                    shadow-custom
                                    mb-3 bg-white
                                    overflow-hidden"
    >
      <div
        className="mb-0
                                        py-8 pl-9
                                        pr-7
                                        border-bottom-0
                                        bg-white"
         
      >
        <button
          className={`btn-reset coodiv-text-9 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100 ${active ? "active" : ""}`}
          type="button"
          onClick={onToggle}
        >
          {questions}
        </button>
      </div>

      <div
        
        className={`${active ? "openToogle" : "closeToogle"}`}
        
      >
        <div className={`card-body coodiv-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 coodiv-text-10 pb-9 `}>
         {answers}
        </div>
      </div>
    </div>
  );
}

export default FaqAccorionItems;
