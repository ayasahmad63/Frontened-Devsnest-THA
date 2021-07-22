// console.log(fetch(`https://dog.ceo/api/breeds/image/random`))

// fetch(`https://dog.ceo/api/breeds/image/random`)
// .then(res=>res.json())
// .then(data => console.log(data.message))



const inputE1 = document.querySelector('input');
const btDog = document.querySelector('button');
const article = document.querySelector(`article`);

btDog.addEventListener('click', fetchDOg)

function fetchDOg() {
    article.innerHTML = "";
    let query = inputE1.value;
    // console.log(query);
    fetch(`https://dog.ceo/api/breed/${query}/images/random/3`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.message);
            getResponce(data)
        })
}

function getResponce(data) {
    console.log(data.message);

    if (data.status = "success") {
        data.message.forEach(dog => {
            console.log(dog);

            let dogDiv = document.createElement('div')
            dogDiv.className = "doggo";
            dogDiv.innerHTML = `<img src=${dog}>`
            article.append(dogDiv)
        })
    }
    else {
        
        let dogDiv = document.createElement('div')
        dogDiv.className = "doggo";
        dogDiv.innerHTML = 'Breed Not Found'
        article.innerHTML='';

        article.append(dogDiv)
        
       
    }


}

fetchDOg();
