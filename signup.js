let users = []
let Name = document.querySelector("#signup").elements.name
let Email = document.querySelector("#signup").elements.email
let Password = document.querySelector("#signup").elements.password
users = JSON.parse(localStorage.getItem("Users"))

let signup = (event) => {

  event.preventDefault()
  if (users === null) {
    console.log('users is null');
    users = []
  }

  users.push({
    Name: Name.value,
    Email: Email.value,
    Password: Password.value
  })

  localStorage.setItem('Users', JSON.stringify(users))
  console.log(users);

  Name.value = ''
  Email.value = ''
  Password.value = ''

}





