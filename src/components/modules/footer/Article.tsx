import Link from "next/link";
import styles from "./article.module.css";

interface articleProps {
    title: string
    img: string
    comments: string
    date?: string // this is not optional but it is for now
    href: string
}

const Article = ({ title, img, comments, href }: articleProps) => { // there is data prop here too
    return (
        <Link href={href} className={styles.article}>
            <img width={75} height={65} src={img} alt="" />
            <div>
                <p className={styles.title}>{title}</p>
                <div>
                    <p>{comments}</p>
                    <p dir="rtl">{"date"}</p>
                </div>
            </div>
        </Link>
    );
};

export default Article;