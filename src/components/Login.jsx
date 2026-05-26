import React, {useState} from "react"; 



const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }
    return (
        <div className="auth-form-conatiner">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <lable htmlForm="email">email</lable>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email" name="email" />
                <lable htmlForm="password">password</lable>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="xxxxxxxxxx" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Dont have an account? Register here!</button>
        </div>
    );
}

export default Login ;