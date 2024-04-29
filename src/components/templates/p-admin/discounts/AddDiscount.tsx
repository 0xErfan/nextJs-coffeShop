
import React, { useEffect, useState } from "react";
import styles from "./table.module.css";

function AddDiscount() {

  return (
    <section className={styles.discount}>
      <p>افزودن کد تخفیف جدید</p>
      <div className={styles.discount_main}>
        <div>
          <label>شناسه تخفیف</label>
          <input
            onChange={(event) => { }}
            placeholder="لطفا شناسه تخفیف را وارد کنید"
            type="text"
          />
        </div>
        <div>
          <label>درصد تخفیف</label>
          <input
            onChange={(event) => { }}
            placeholder="لطفا درصد تخفیف را وارد کنید"
            type="text"
          />
        </div>
        <div>
          <label>حداکثر استفاده</label>
          <input
            onChange={(event) => { }}
            placeholder="حداکثر استفاده از کد تخفیف"
            type="text"
          />
        </div>
        <div>
          <label>محصول</label>
          <select name="" id="">
            <option value="">قهوه ترک</option>
            <option value="">قهوه عربیکا</option>
            <option value="">قهوه اسپرسو</option>
          </select>
        </div>
      </div>
      <button onClick={() => { }}>افزودن</button>
    </section>
  );
}

export default AddDiscount;