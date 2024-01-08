import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import "../styles/newcard.css"

export default function Asia({Component, pageProps}) {
    return (
        <Layout className={styles.mainContainer}>
            <Component {...pageProps} />
        </Layout>
    )
}