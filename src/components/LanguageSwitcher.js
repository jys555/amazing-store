import React, { useState } from "react";
import uzFlag from "../assets/uz.svg";
import ruFlag from "../assets/ru.svg";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher({ lang, onChange }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="lang-switcher" onClick={() => setOpen(!open)}>
      <span>
        <img src={lang === "uz" ? uzFlag : ruFlag} alt={lang} />
        {lang}
      </span>
      {open && (
        <div className="lang-select">
          <div onClick={() => {onChange("uz"); setOpen(false);}}>
            <img src={uzFlag} alt="uz" /> uz
          </div>
          <div onClick={() => {onChange("ru"); setOpen(false);}}>
            <img src={ruFlag} alt="ru" /> ru
          </div>
        </div>
      )}
    </div>
  );
}
