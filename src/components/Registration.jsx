import React, {useState} from "react"; 


const Registration = (props) => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name, setName] = useState('');
    const [num, setNum] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }
    return (
        <div className="auth-form-conatiner">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <lable htmlForm="name">Full Name</lable>
                <input value={name} type="name" placeholder="Full Name" id="name" name="name" />
                <lable htmlForm="email">email</lable>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email" name="email" />
                <lable htmlForm="password">password</lable>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="xxxxxxxxxx" id="password" name="password" />
                <lable htmlForm="number">Phone Number</lable>
                <input value={num} type="num" placeholder="Phone Number" id="num" name="num" />
                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('Login')} >Already have an account? Login here!</button>
        </div>
    );
}

export default Registration ;
