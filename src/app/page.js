import styles from './page.module.css';
export default function Home() {
  return (
    <div className={`w-screen h-screen flex flex-col items-center justify-center bg-black`}>
      <p className={`text-white font-bold text-[40px] ${styles.glow}`}>
        uptown<span className={`text-[orange] font-bold text-[40px]`}>lobby</span>
      </p>
    </div>
  );
}
