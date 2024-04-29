
import React from "react";
import styles from "./table.module.css";
import { useRouter } from "next/navigation";

interface dataTableProps {
  comments: []
  title: string
}

export default function DataTable({ comments, title }: dataTableProps) {

  return (
    <div>
      <div>
        <h1 className={styles.title}>
          <span>{title}</span>
        </h1>
      </div>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>شناسه</th>
              <th>کاربر</th>
              <th>ایمیل</th>
              <th>امتیاز</th>
              <th>محصول</th>
              <th>تاریخ ثبت</th>
              <th>مشاهده</th>
              <th>ویرایش</th>
              <th>حذف</th>
              <th>تایید / رد</th>
              <th>پاسخ</th>
              <th>بن</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment, index) => (
              <tr key={"comment._id"}>
                <td
                  className={"comment.isAccept" ? styles.accept : styles.reject}
                >
                  {index + 1}
                </td>
                <td>{"comment.username"}</td>
                <td>{"comment.email"}</td>
                <td>{"comment.score"}</td>
                <td>{"comment.productID.name"}</td>
                <td>{"12/3/2323"}</td> // show comment date
                <td>
                  <button
                    type="button"
                    className={styles.edit_btn}
                    onClick={() => {}}
                  >
                    مشاهده
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.edit_btn}>
                    ویرایش
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.delete_btn}>
                    حذف
                  </button>
                </td>
                <td>
                  {"comment.isAccept" ? (
                    <button
                      type="button"
                      className={styles.delete_btn}
                      onClick={() => {}}
                    >
                      رد
                    </button>
                  ) : (
                    <button
                      type="button"
                      className={styles.delete_btn}
                      onClick={() => {}}
                    >
                      تایید
                    </button>
                  )}
                </td>
                <td>
                  <button type="button" className={styles.delete_btn}>
                    پاسخ
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.delete_btn}>
                    بن
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
