import Link from "next/link";
import { FaSearch } from "react-icons/fa";

import styles from "../styles/Header.module.css";

interface HeaderProps {
  isActive: boolean;
  setIsActive?: (val: boolean) => void;
  handleChange?: (e: any) => void;
  searchQuery: string;
}

export default function Header({ isActive, setIsActive, handleChange, searchQuery }: HeaderProps) {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="./images/logo.svg" alt="The Peaks" />
        </Link>
      </div>
      <div className={styles.searchbar}>
        <input
          type="text"
          placeholder="search"
          className={`${isActive ? styles.active : ""}`}
          // onChange={(e) => handleChange(e)}
          value={searchQuery}
        />
        <div
          className={`${styles.icon} ${isActive ? styles.active : ""}`}
          onClick={() => setIsActive?.(!isActive)}
        >
          <div className={styles.i}>
            <FaSearch />
          </div>
        </div>
      </div>
    </div>
  );
}
