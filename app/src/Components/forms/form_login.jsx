function Form_login() {
    return (
        <form>
            <h1>Login</h1>
            <label>Email:</label>
            <input type="text" placeholder="Type in your email here"></input>
            <label>Password:</label>
            <input type="text" placeholder="Type in your password here"></input>
            <button>Login</button>
        </form>
    )
}

export default Form_login;