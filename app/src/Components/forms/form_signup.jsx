
function Form_signup() {
    return (
        <form>
            <h1>Signup</h1>
            <label>Firstname:</label>
            <input type="text" placeholder="Type in your firstname here"></input>
            <label>Lastname:</label>
            <input type="text" placeholder="Type in your lastname here"></input>
            <label>Email:</label>
            <input type="text" placeholder="Type in your email here"></input>
            <label>Password:</label>
            <input type="text" placeholder="Type in your password here"></input>
            <label>Confirm password:</label>
            <input type="text" placeholder="Type in your password here"></input>
            <button>Signup</button>
        </form>
    )
}

export default Form_signup;