import { useState } from "react";
import styles from "./register.module.css";

const Register = ({ showloginForm }: { showloginForm: () => void }) => {

    const [isRegisterWithPass, setIsRegisterWithPass] = useState(false);
    const [isRegisterWithOtp, setIsRegisterWithOtp] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <div className={styles.form}>
                <input
                    className={styles.input}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    type="text"
                    placeholder="نام"
                />
                <input
                    className={styles.input}
                    type="text"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="شماره موبایل  "
                />
                <input
                    className={styles.input}
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="ایمیل (دلخواه)"
                />

                {isRegisterWithPass && (
                    <input
                        className={styles.input}
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="رمز عبور"
                    />
                )}

                <button
                    style={{ marginTop: ".7rem" }}
                    onClick={() => {
                        if (isRegisterWithPass) {
                            // signUp();
                        } else {
                            setIsRegisterWithPass(true);
                        }
                    }}
                    className={styles.btn}
                >
                    ثبت نام با رمزعبور
                </button>
                <p onClick={showloginForm} className={styles.back_to_login}>
                    برگشت به ورود
                </p>
            </div>
            <p className={styles.redirect_to_home}>لغو</p>
        </>
    );
};

export default Register;
