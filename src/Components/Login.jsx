import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginWithGoogle from './LoginWithGoogle';

const Login = () => {
    const Navigate = useNavigate()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = () => {
        const userData = JSON.parse(localStorage.getItem('myData'));
        console.log(userData)
        let isLogin = userData.find(item => (item.email == email && item.password == password))
        console.log(isLogin)
        if (isLogin) {
            alert('Login successful');
            localStorage.setItem('Token',email)
            Navigate("/dashboard")
        } else {

            alert('Please enter the correct email and password');
        }
    };

    const formSubmitData = (e) => {
        //        console.log("form submit data");
        // localStorage.setItem('myData', JSON.stringify({ email: email, password: password }));
        // console.log(e.target.value)

    }
    useEffect(() => {
        let data = localStorage.getItem('userData')
        if (data) {
            Navigate('/dashboard')
        }
    }, [])

    return (
        <>
            <div className="wrapper">
                <div className="title-text">
                    <div className="title login">
                        Login Form
                    </div>
                </div>
                <div className="form-container">
                    <div className="form-inner">
                        <form action="#" className="login" onSubmit={formSubmitData}>
                            <div className="field">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="field">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <button onClick={handleLogin} type="submit">Login</button>
                            </div>
                            <h4 className="Or">Or</h4>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <button onClick={() => {
                                    Navigate("/")
                                }} type="submit">Signup</button>
                            </div>
                            <div className='Or'>
                            <LoginWithGoogle/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login