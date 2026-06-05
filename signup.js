
// let users = []
// let Name = document.querySelector("#login").elements.name
// let Email = document.querySelector("#login").elements.email
// let Password = document.querySelector("#login").elements.password

// let isinlockalestorage = localStorage.getItem('Users')







let users = []
let Name = document.querySelector("#signup").elements.name
let Email = document.querySelector("#signup").elements.email
let Password = document.querySelector("#signup").elements.password



let signup = (event)=>{

    event.preventDefault()

  users.push({
    Name: Name.value ,
    Email: Email.value ,
    Password: Password.value 
  })



  localStorage.setItem( "Users",JSON.stringify(users))
    users =JSON.parse( localStorage.getItem( "Users"))
    // console.log(users); 
    
  console.log(localStorage.length);
  
  console.log(users);
  
}





    console.log(users);

