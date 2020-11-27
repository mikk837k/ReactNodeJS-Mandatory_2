



function Form_signup() {

    function checkEmail(e) {
        const sEmailValue = e.target.value;
        let eValdationField = document.querySelector("[name=validation]")
    
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        //Check if user input matches regex expression for email address
        if(regex.test(sEmailValue)){
            e.target.style.border = "2px solid lightgreen";
            eValdationField.setAttribute("data-isset-email", "1")
            return;
        } else {
            eValdationField.setAttribute("data-isset-email", "0")
            e.target.style.border = "2px solid red";
            return;
        }
    }
    
    function checkPassword() {
        const aPwElements = document.querySelectoi("[daa-password]");
        let eValdationField = document.querySelector("[name=validation]");
     
        //Check if password and confirm password are identical
        if(aPwElements[0].value !== aPwElements[1].value){
            eValdationField.setAttribute("data-isset-password", "0")
            aPwElements[1].style.border = "2px solid red";
            return;
        }else {
            eValdationField.setAttribute("data-isset-password", "1")
            aPwElements[1].style.border = "2px solid lightgreen"
            return;
        }
    }
    
    function checkUserName(e) {
        
        //Check if the input field is empty or if the input value is less than the minimum allowed length
        if(e.target.value === "" || e.target.value.length < parseInt(e.target.dataset.min)){
            e.target.style.border = "2px solid red";
        }else {
            e.target.style.border = "2px solid lightgreen";
        }
    }
    
    function checkInputFields(aUserData) {
        
        let iFieldApproved = 0;
        
        //Iterate over array of elements containing user data.
        aUserData.forEach(element => {
            //Check if the input field is empty or if the input value is less than the minimum allowed length
            if(element.value === "" || element.value.length < parseInt(element.dataset.min)){
                element.style.border = "2px solid red";
            }else {
                element.style.border = "2px solid lightgreen";
                //Add to counter each time an element is ok
                iFieldApproved++;
            }
        })
        
        //Check if amount of approved fields are equal to the length of the array
        if(iFieldApproved === aUserData.length) {
            return true;
        } else {
            return false;
        }
    }
    
    function checkForm(e) {
        const aUserData = e.target.parentElement.querySelectoi(["[dta-user]"]);
        const eValdationField = document.querySelector("[name=validation]")
        
        //Check if password and email fields are filled out
        if(parseInt(eValdationField.getAttribute("data-isset-password")) && parseInt(eValdationField.getAttribute("data-isset-email"))) {
        } else {
            if(!parseInt(eValdationField.getAttribute("data-isset-password"))) {
                return;
            } else if(!parseInt(eValdationField.getAttribute("data-isset-email"))){
                return;
            }
        }
        
        let iFormApproved = checkInputFields(aUserData);
    
       //Check the return value in iFormApproved
        if(iFormApproved) {
            submitForm(e, aUserData);
        }
        
    }
    
    function submitForm(e, aUserData) {
        //Collect user data from form
        let oUserData = {};
        
        //Iterate over array of user data
        aUserData.forEach( element => {
            //Get element name
            let sElementName = element["name"];
            //Get element value
            let sElementValue = element.value;
            //cCreate Object key value pairs based on element name(key) and value
            oUserData[sElementName] = sElementValue;
        })

        //Send data to backend

        //Reset the form
        e.target.parentElement.reset();
        //Redirect user to index page
        document.location.href = "./";
    
    }
    return (
        <form>
            <h1>Signup</h1>
            <label>Firstname (min. 2 characters):</label>
            <input name="firstName" data-user onInput={checkUserName}type="text" data-min="2" placeholder="Type in your firstname here" required></input>
            <label>Lastname (min. 2 characters):</label>
            <input name="lastName" data-user onInput={checkUserName} type="text" data-min="2" placeholder="Type in your lastname here"required></input>
            <label>Email:</label>
            <input name="email" data-user onInput={checkEmail} type="email" data-min="2" placeholder="Type in your email here"required></input>
            <label>Password (min. 2 characters):</label>
            <input name="password" data-password onChange={checkPassword} data-user type="password" data-min="2" placeholder="Type in your password here"required></input>
            <label>Confirm password:</label>
            <input data-password type="password" onChange={checkPassword} placeholder="Type in your password here"required></input>
            <input name="validation" data-isset-email="0" data-isset-password="0" type="hidden"></input>
            <button type="button" onClick={checkForm}>Signup</button>
        </form>
    )
}

export default Form_signup;