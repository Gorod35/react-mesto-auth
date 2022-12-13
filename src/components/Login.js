import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onLogin({ password, email });
    }

    return (
        <>
            <main className='register'>
                <h1 className='register__title'>Войти</h1>
                <form className='register__form' onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <input value={email} name="email" type="email" className="register__input register__input_type_email" placeholder="Email" minLength="2" maxLength="40" required onChange={handleEmailChange}/>
                            <span className="username-error popup__error"></span>
                        </div>
                        <div>
                            <input value={password} name="password" type="password" className="register__input register__input_type_password" placeholder="Пароль" minLength="2" maxLength="200" required onChange={handlePasswordChange}/>
                            <span className="description-error popup__error"></span>
                        </div>
                    </div>
                    <div className='register__buttons'>
                        <button type="submit" className="register__submit-btn">Войти</button>
                    </div>
                </form>

            </main>
        </>
    )
}

export default Login;