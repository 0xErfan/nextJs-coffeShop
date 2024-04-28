import React from "react";
import styles from "./infoBox.module.css";
import { IoStatsChart } from "react-icons/io5";

interface boxProps {
    title: string
    value: number | string
}

const Box = ({ title, value }: boxProps) => {
    return (
        <div className={styles.box}>
            <span>{value}</span>
            <div>
                <p>{title}</p>
                <IoStatsChart className={styles.box_chart_icon} />
            </div>
        </div>
    );
};

export default Box;