import Image from "next/image";
import styles from "../page.module.css";

export default function Posts() {
  return (
    <>
      <h1>Posts</h1>
      <Image  className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority />
    </>
  );
}
