
import React, { useState } from "react";
import styles from "./table.module.css";
import { useRouter } from "next/navigation";

function AddProduct() {

  return (
    <section className={styles.discount}>
      <p>افزودن محصول جدید</p>
      <div className={styles.discount_main}>
        <div>
          <label>نام محصول</label>
          <input
            placeholder="لطفا نام محصول را وارد کنید"
            type="text"
          />
        </div>
        <div>
          <label>مبلغ محصول</label>
          <input
            placeholder="لطفا مبلغ محصول را وارد کنید"
            type="text"
          />
        </div>

        <div>
          <label>توضیحات کوتاه</label>
          <input
            placeholder="توضیحات کوتاه محصول"
            type="text"
          />
        </div>
        <div>
          <label>توضیحات بلند</label>
          <input
            placeholder="توضیحات بلند محصول"
            type="text"
          />
        </div>
        <div>
          <label>وزن</label>
          <input
            placeholder="وزن محصول"
            type="text"
          />
        </div>
        <div>
          <label>مناسب برای:</label>
          <input
            placeholder="مناسب برای ..."
            type="text"
          />
        </div>
        <div>
          <label>میزان بو</label>
          <input
            placeholder="میزان بو"
            type="text"
          />
        </div>
        <div>
          <label>تگ های محصول</label>
          <input
            placeholder="مثال: قهوه،قهوه ترک، قهوه اسپرسو"
            type="text"
          />
        </div>
        <div>
          <label>تصویر محصول</label>
          <input
            type="file"
          />
        </div>
      </div>
      <button >افزودن</button>
    </section>
  );
}

export default AddProduct;
