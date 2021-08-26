function nameHand(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(myData => getName(myData))
}
function getName(myData){
    const ul = document.getElementById('userName')
    for (user of myData){
        const li = document.createElement('li')
        li.innerText = `Name: ${user.name}`
        ul.appendChild(li)
    }
}
function emailHand(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (Response => Response.json())
    .then (UserEmail => getEmail(UserEmail))
}
function getEmail(UserEmail){
    const ul = document.getElementById('userEamil')
    for (singleEmail of UserEmail){
        const li = document.createElement('li')
        li.innerText = `Email: ${singleEmail.email}`
        ul.appendChild(li)

    }
}
function userName(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(userName => getUserName(userName))
}
function getUserName(userName){
    const ul = document.getElementById('mainUserName')
    for (const singaleUserNmae of userName){
        const li = document.createElement('li')
        li.innerText = `User Name: ${singaleUserNmae.username}`
        ul.appendChild(li)
    }
}
