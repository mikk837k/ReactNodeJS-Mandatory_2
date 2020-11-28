function Form_login() {

    function checkEmail(e) {
        const sEmailValue = e.target.value;

        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        //Check if user input matches regex expression for email address
        if (regex.test(sEmailValue)) {
            e.target.style.border = "2px solid lightgreen";
            return;
        } else {
            e.target.style.border = "2px solid red";
            return;
        }
    }

    async function submitForm(e) {
        //Collect user data from form
        let aUserData = e.target.parentElement.querySelectorAll(["[data-user]"]);
        let oUserData = [];

        //Iterate over array of user data
        aUserData.forEach(element => {
            //Get element name
            let sElementName = element["name"];
            //Get element value
            let sElementValue = element.value;
            //cCreate Object key value pairs based on element name(key) and value
            oUserData[sElementName] = sElementValue;
        })

        fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            body: oUserData,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => console.log(res))


        //Reset the form
        // e.target.parentElement.reset();
        // //Redirect user to index page
        // document.location.href = "./";

    }


    return (
        <form>
            <h1>Login</h1>
            <label>Email:</label>
            <input name="email" type="text" data-user onInput={checkEmail} placeholder="Type in your email here" required></input>
            <label>Password:</label>
            <input name="password" type="password" data-user placeholder="Type in your password here" required></input>
            <button type="button" onClick={submitForm}>Login</button>
        </form>
    )
}

export default Form_login;