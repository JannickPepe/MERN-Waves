import React from "react";
import styles from "../styles/bubble.module.css";

const LogoText = () => {

    return (
        <div className="grid mt-4 text-center">
            <BubbleText />
        </div>
    );
};

const BubbleText = () => {

    return (
        <h2 className="text-4xl font-thin text-emerald-400">
        {"QuoteWaves".split("").map((child, idx) => (
            <span className={styles.hoverText} key={idx}>
                {child}
            </span>
        ))}
        </h2>
    );
};

export default LogoText;