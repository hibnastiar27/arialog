import { Switch } from "@heroui/switch";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isSelected) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isSelected]);
  return (
    <div className="flex items-center gap-2">

      {/* DarkMode */}
      <Switch
        color="primary"
        size="md"
        isSelected={isSelected}
        onValueChange={setIsSelected}
      />

      <p>{isSelected ? "Dark" : "Light"}</p>
    </div>
  )
}

export default ThemeSwitcher;