console.log('***********start of the script *********');
// DOM : Document Object Model
// Dom is an object representation of the html document

let title = document.querySelector('.title');
let paragraphe = document.querySelector('.paragraphe');
let container = document.querySelector('.container')
let darkBtn = document.querySelector('.darkBtn')
let body = document.body
// let lightBtn = document.querySelector('.lightBtn')




console.log(title);
console.log(container);

title.innerText = "Welcome to session number 9"
paragraphe.textContent = "This is the content of the paragraphe in the training session number 9";


container.innerHTML = "<h2>A Code illustration </h2><p> this is a picture of a red head student using his computer</p>"


// how we create elements in javascript and then inject them to the body 

let image = document.createElement('img')
console.log(image);
// set the src/alt/width and height attribute of the image
image.src = 'images/picture.avif'
image.alt = 'this is a picture of a men coding'
image.width = 400;
image.height = 180;
// lets inject the image into the conatainer div 
container.appendChild(image)



// Event listners part 
//-------------------------
darkBtn.addEventListener("click", function(){

    if(body.classList.contains('dark-mode')){
        darkBtn.innerText = "🌚"
        body.classList.remove('dark-mode')
    }
    
    else{

        darkBtn.innerText = "🌞"
        body.classList.add('dark-mode')
       
        
    }

})

// lightBtn.addEventListener("click", function(){
//     document.body.classList.remove('dark-mode')
//  })


function writeText(){
let newParagraphe = document.createElement('p')
newParagraphe.textContent = ' You just clicked the title'
document.body.insertBefore(newParagraphe,darkBtn)
}

// writeText()