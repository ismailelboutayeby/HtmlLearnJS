
let users = []
let Name = document.querySelector("#login").elements.name
let Email = document.querySelector("#login").elements.email
let Password = document.querySelector("#login").elements.password

let isinlockalestorage = localStorage.getItem('Users')



let signup = (event) => {



    event.preventDefault()



    console.log("usersLocalStorage : ", isinlockalestorage);


    if (isinlockalestorage === null) {
        localStorage.setItem("Users", JSON.stringify(
            [{
                'Name': Name.value,
                'Email': Email.value,
                'Password': Password.value,
            }]
        ))

        console.log('the first user are created');

    } else {

        users = [JSON.parse(localStorage.getItem('users'))]

        users.push(
            {
                Name: Name.value,
                Email: Email.value,
                Password: Password.value,
            }
        )


        console.log(users);
        

        localStorage.setItem("Users", JSON.stringify(
            users
        ))


        console.log('another user created');

    }

}








