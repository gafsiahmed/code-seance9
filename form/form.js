console.log("----------form .js-------------");


let usernameInput = document.querySelector('#username');
let passwordInput = document.querySelector('#password');
let formElement = document.querySelector('.form');
let btnSubmit = document.querySelector('.btnSubmit');

console.log(usernameInput);
console.log(passwordInput);
console.log(formElement);
console.log(btnSubmit);


formElement.addEventListener('submit',function(e){
        e.preventDefault();
        // console.log("form just submitted");
        let username = usernameInput.value;
        let password = passwordInput.value;

        document.body.removeChild(formElement);
        let h1 = document.createElement('h1');
        h1.textContent = 'Welcome mr/ms '+ username.trim().toUpperCase();

        document.body.appendChild(h1);

        let image = document.createElement('img');
        image.src = "images/happy.png";
        image.alt = "happy image";

        document.body.appendChild(image);
        document.body.style.flexDirection = 'column';

})

console.log("----------end of the script-------------");


