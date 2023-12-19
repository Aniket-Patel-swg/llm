import React, {useState} from "react";
import styles from "../styles/generalsidebar.module.css";

const generalSidebar = () => {

    const [active, setActive] = useState(false)
    return ( 
        <>
            <div className={styles.sidebar}>
                <a href="">
                    <section className={active ? styles.generalChatBotActive : styles.generalChatBotActive }>
                        <p>General</p>
                    </section>
                </a>
                
                <a href="">
                    <section className={active ? styles.generalChatBotActive : styles.generalChatBotActive }>
                        <p>Summarizer</p>
                    </section>
                </a>
                
                <a href="">
                    <section className={active ? styles.generalChatBotActive : styles.generalChatBotActive }>
                        <p>Letters & Emails</p>
                    </section>
                </a>
                
            </div>
        </>
     );
}
 
export default generalSidebar;