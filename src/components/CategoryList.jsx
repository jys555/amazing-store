import React from "react";
import styles from "./CategoryList.module.css";
import { categories } from "../data/categories";

export default function CategoryList({ onSelect }) {
  return (
    <div className={styles.wrapper}>
      {categories.map(cat => (
        <button key={cat.id} className={styles.catBtn} onClick={() => onSelect(cat.name_uz)}>
          <img src={cat.icon} alt={cat.name_uz} />
          <span>{cat.name_uz}</span>
        </button>
      ))}
    </div>
  );
}
