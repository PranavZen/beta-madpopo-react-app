import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

export default function CountrySelect() {
  const [selected, setSelected] = useState("IN");
  const onSelect = (code) => setSelected(code);

  const showSelectedLabel = useState("Show Selected Label", false);
  const showSecondarySelectedLabel = useState(
    "Show Secondary Selected Label",
    true
  );
  const showOptionLabel = useState("Show Option Label", false);
  const showSecondaryOptionLabel = useState("Show Secondary Option Label", true);
  
  const customLabels = ("Custom Labels", {
    IN: { secondary: "INR" },
    US: { secondary: "USD" },
    FR: { secondary: "EUR" },
  });
  return (
    <div className="selectCountry">
     
    <ReactFlagsSelect
    selected={selected}
    onSelect={onSelect}
    showSelectedLabel={showSelectedLabel}
    showSecondarySelectedLabel={showSecondarySelectedLabel}
    showOptionLabel={showOptionLabel}
    showSecondaryOptionLabel={showSecondaryOptionLabel}
    customLabels={customLabels}
    countries={["IN", "US", "FR"]}
    
  />
     
    </div>
  );
}
