
import React, { useEffect } from "react";
import styles from "@/styles/p-user/accountDetails.module.css";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";

function AccountDetails() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const updateUser = async () => { };

    return (
        <main>
            <div className={styles.details}>
                <h1 className={styles.title}>
                    <span> جزئیات اکانت</span>
                </h1>
                <div className={styles.details_main}>
                    <section>
                        <div>
                            <label>نام کاربری</label>
                            <input
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                placeholder="لطفا نام کاربری خود را وارد کنید"
                                type="text"
                            />
                        </div>
                        <div>
                            <label>ایمیل</label>
                            <input
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="لطفا ایمیل خود را وارد کنید"
                                type="text"
                            />
                        </div>
                        <div>
                            <label>شماره تماس</label>
                            <input
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                                placeholder="لطفا شماره تماس خود را وارد کنید"
                                type="number"
                            />
                        </div>
                    </section>
                    <section>
                        <div className={styles.uploader}>
                            <img src="/images/shahin.jpg" alt="" />
                            <div>
                                <div>
                                    <button>
                                        <IoCloudUploadOutline />
                                        تغییر
                                    </button>
                                    <input type="file" name="" id="" />
                                </div>
                                <button>
                                    <MdOutlineDelete />
                                    حذف
                                </button>
                            </div>
                        </div>
                        <div>
                            <label>رمز عبور</label>
                            <div className={styles.password_group}>
                                <input type="password" />
                                <button>تغییر رمز عبور</button>
                            </div>
                        </div>
                    </section>
                </div>
                <button
                    type="submit"
                    onClick={updateUser}
                    className={styles.submit_btn}
                >
                    ثبت تغییرات
                </button>
            </div>
        </main>
    );
}

export default AccountDetails;