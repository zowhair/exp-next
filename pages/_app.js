import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import "../styles/newcard.css"
import "../styles/stay.css"
import "../styles/content.css"
import "../styles/arrange.css"
import "../styles/form.css"
import "../styles/round.css"
import "../styles/text.css"
import "../styles/product.css"
import "../styles/form.css"
import "../styles/layout.css"


export default function Asia({Component, pageProps}) {
    return (
        <Layout className={styles.mainContainer}>
            <Component {...pageProps} />
        </Layout>
    )
}