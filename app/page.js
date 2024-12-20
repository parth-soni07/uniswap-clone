import Image from "next/image";
import styles from "./globals.css";
import { HeroSection, Model, NavBar } from ".";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar/>
    </div>
  );
}
