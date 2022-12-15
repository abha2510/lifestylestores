import styles from "./SmallNav.module.css"
export default function SmallNav(){
    return(
        <>
        <div className={styles.topBar} >
            <div className={styles.top_left_bar}>
                <div className={styles.h_top_bar}>
                    <span className={styles.text_top} >
                        <img className={styles.icon}src="https://cdn-icons-png.flaticon.com/128/617/617423.png" alt="" />
                        <h5 className={styles.nav_text} >Free Shipping</h5>
                    </span>
                </div>
                <div className={styles.h_top_bar}>
                    <span className={styles.text_top}>
                        <img className={styles.icon} src="https://cdn-icons-png.flaticon.com/128/1611/1611323.png" alt="" />
                        <h5 className={styles.nav_text}>Click Collect</h5>
                    </span>
                </div>
                <div className={styles.h_top_bar}>
                    <span className={styles.text_top}>
                        <img className={styles.icon} src="https://cdn-icons-png.flaticon.com/128/726/726570.png" alt="" />
                        <h5 className={styles.nav_text}>Return</h5>
                    </span>
                </div>
            </div>

            <div className={styles.top_text_left}>
            <div className={styles.up_nav_h6}>Download our store</div>
            <div className={styles.up_nav_h6}> Store Locator</div>
            <div className={styles.up_nav_h6}>Help</div>
            </div>

        </div>
        </>
    )
}