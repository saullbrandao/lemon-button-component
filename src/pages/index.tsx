import type { NextPage } from 'next'
import { LemonButton } from '../components/LemonButton'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Lemon Button</h1>

      <h2>color</h2>
      <div>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <span>color: &#39;primary&#39;</span>
          </div>
          <LemonButton color="primary" disabled={false}>
            Button
          </LemonButton>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <span>color: &#39;secondary&#39;</span>
          </div>
          <LemonButton color="secondary" disabled={false}>
            Button
          </LemonButton>
        </div>
      </div>

      <h2>icon</h2>
      <div>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <span>color: &#39;primary&#39;</span>
            <span>icon: &#39;arrow-right&#39;</span>
          </div>
          <LemonButton color="primary" disabled={false} icon="arrow-right">
            Button
          </LemonButton>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <span>color: &#39;primary&#39;</span>
            <span>icon: &#39;check&#39;</span>
          </div>
          <LemonButton color="primary" disabled={false} icon="check">
            Button
          </LemonButton>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <span>color: &#39;primary&#39;</span>
            <span>icon: &#39;refresh&#39;</span>
          </div>
          <LemonButton color="primary" disabled={false} icon="refresh">
            Button
          </LemonButton>
        </div>
      </div>
      <div>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <span>color: &#39;secondary&#39;</span>
            <span>icon: &#39;arrow-right&#39;</span>
          </div>
          <LemonButton color="secondary" disabled={false} icon="arrow-right">
            Button
          </LemonButton>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <span>color: &#39;secondary&#39;</span>
            <span>icon: &#39;check&#39;</span>
          </div>
          <LemonButton color="secondary" disabled={false} icon="check">
            Button
          </LemonButton>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <span>color: &#39;secondary&#39;</span>
            <span>icon: &#39;refresh&#39;</span>
          </div>
          <LemonButton color="secondary" disabled={false} icon="refresh">
            Button
          </LemonButton>
        </div>
      </div>

      <h2>disabled</h2>
      <div>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <span>color: &#39;primary&#39;</span>
          </div>
          <LemonButton color="primary" disabled={true}>
            Button
          </LemonButton>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <span>color: &#39;secondary&#39;</span>
          </div>
          <LemonButton color="secondary" disabled={true}>
            Button
          </LemonButton>
        </div>
      </div>
      <div>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <span>color: &#39;primary&#39;</span>
            <span>icon: &#39;arrow-right&#39;</span>
          </div>
          <LemonButton color="primary" disabled={true} icon="arrow-right">
            Button
          </LemonButton>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <span>color: &#39;secondary&#39;</span>
            <span>icon: &#39;arrow-right&#39;</span>
          </div>
          <LemonButton color="secondary" disabled={true} icon="arrow-right">
            Button
          </LemonButton>
        </div>
      </div>

      <h2>onClick</h2>
      <div>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <span>Clicking on the button shows an alert</span>
          </div>
          <LemonButton
            color="primary"
            disabled={false}
            onClick={() => alert('Button clicked')}
          >
            Button
          </LemonButton>
        </div>
      </div>

      <h2>expands if the parent is wider</h2>
      <div>
        <div className={`${styles.wrapper} ${styles.mediumWrapper}`}>
          <div className={styles.description}>
            <span>Parent width: &#39;600px&#39;</span>
          </div>
          <LemonButton color="primary" disabled={false}>
            Button
          </LemonButton>
        </div>
        <div className={`${styles.wrapper} ${styles.largeWrapper}`}>
          <div className={styles.description}>
            <span>Parent width: &#39;1000px&#39;</span>
          </div>
          <LemonButton color="primary" disabled={false}>
            Button
          </LemonButton>
        </div>
      </div>
    </div>
  )
}

export default Home
