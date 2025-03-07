import styles from './page.module.css';

export default function GlitchText({ postId }) {
  return (
    <div className={`${styles.glitchwrapper}`}>
      <div className={`${styles.glitch}`} data-glitch='1'>
        {postId}
      </div>
    </div>
  );
}
