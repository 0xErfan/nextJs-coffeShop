import React, { ReactNode } from "react";
import styles from "./userPanelLayout.module.css";
import Sidebar from "@/components/modules/p-user/Sidebar";
import Topbar from "@/components/modules/p-user/Topbar";

const Layout = async ({ children }: { children: ReactNode }) => {

    return (
        <div className={styles.layout}>
            <section className={styles.section}>
                <Sidebar />
                <div className={styles.contents}>
                    <Topbar />
                    {children}
                </div>
            </section>
        </div>
    );
};

export default Layout;
