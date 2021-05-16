const $main = document.getElementById("main")
const $userName = document.getElementById("userName")
const $password = document.getElementById("password")
const $sendRegistr = document.getElementById("sendRegistr")
const sendNewRegistr = document.getElementById("sendNewRegistr")
sendNewRegistr.addEventListener('click',sendNewUser)
$sendRegistr.addEventListener("click", sendRegistration)

function sendRequest(method, url, body = null) {
    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest

        xhr.open(method, url)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onload = () => {
            if (xhr.status >= 400) {
                rej(xhr.response)
            } else {
                res(xhr.response)
            }
        }
        xhr.onerror = () => {
            rej(xhr.response)
        }
        xhr.send(JSON.stringify(body))
    })
}

requestUrl = `https://powerful-reef-54827.herokuapp.com/`

requestUrlPost = `https://powerful-reef-54827.herokuapp.com/registr`

requestUrlPostNewUser = `https://powerful-reef-54827.herokuapp.com/newRegistr`

requestUrlContact = `https://powerful-reef-54827.herokuapp.com/contact`

// sendRequest('GET', requestUrl)
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((er) => console.log(er))


function sendRegistration(e) {
    let bodyRegister = {
        name: $userName.value,
        password: $password.value
    }
    sendRequest('POST', requestUrlPost, bodyRegister)
        .then((data) => {
            console.log(JSON.parse(data))
            return data
        })
        .then((data) => {
            if (true) {
                data = JSON.parse(data)
                console.log(data)
                $main.innerHTML = `${data.html}`
            } else {
                alert("неверное имя или пароль")
                return
            }
        })
        .catch((er) => console.log(er))
}
function sendNewUser(e){
    let bodyRegister = {
        name: $userName.value,
        password: $password.value
    }
    sendRequest('POST', requestUrlPostNewUser, bodyRegister)
        .then((data) => {
            console.log(JSON.parse(data))
            return data
        })
        .then((data) => {
            if (true) {
                data = JSON.parse(data)
                console.log(data)
                $main.innerHTML = `${data.html}`
            } else {
                alert("неверное имя или пароль")
                return
            }
        })
}