import Comment from "@/components/modules/comment/Comment";
import styles from "./comments.module.css";
import CommentForm from "./CommentForm";

interface commentProps {
  productID: number
  comments: []
}

const Comments = ({ productID, comments }: commentProps) => {
  return (
    <div>
      <p>نظرات (23) :</p>
      <hr />

      <main className={styles.comments}>
        <div className={styles.user_comments}>
          <p className={styles.title}>
            {"12"}
            دیدگاه برای کپسول قهوه SETPRESSO سازگار با دستگاه نسپرسو ( GOLD ) ده
            -10- عددی
          </p>
          <div>
            {comments.map(
              (comment) =>
              <div>this is commet (:</div>
                // "comment.isAccept" && <Comment key={"comment._id"} {...comment} />
            )}
          </div>
        </div>
        <div className={styles.form_bg}>
          <CommentForm productID={productID} />
        </div>
      </main>
    </div>
  );
};

export default Comments;
