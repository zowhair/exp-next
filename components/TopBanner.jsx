import Image from "next/image"
import styles from "../styles/Home.module.css";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function TopBanner() {
    return (
        <Box  >
            <div className={styles.whitetop}>
                <Link href="/" style={{textDecoration:'none'}}>
                    <Box className={styles.topleft}>
                        <img src="https://expeditionasia.com.pk/img/logo-top.png" width={100} height={100} />
                        <span className={styles.brandname}>Expedition Asia Treks & Tours</span>

                    </Box>
                </Link>
                <Box className={styles.topright} sx={{ my: 2, mx: 5 }}>
                    <span>
                        Call Us
                        <span className={styles.orange}>24</span>
                        <span className={styles.green}>/7</span>
                    </span>
                    <br />
                    <a className={styles.number} href=" https://wa.me/+923004708813">+92(300)4708813</a>
                </Box>

            </div>

        </Box>
    )
}