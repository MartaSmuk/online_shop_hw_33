const parrotBreeds = document.querySelector('.parrot__breeds').children;
const singleParrots = document.querySelector('.parrot__single');
const singleParrotBreed = document.querySelectorAll('.parrot__single ul li');
const singleParrotsContainer = document.querySelector('.parrot__single--wrapper');
const showOrdersButtons = document.querySelector('.parrot__orders');

let chosenBird;

Array.from(parrotBreeds).forEach((breed, index) => {
    breed.addEventListener('click', () => {
        Array.from(singleParrots.children).forEach((parrot) => {
            parrot.classList.add('hidden');
        });
        singleParrotsContainer.classList.remove('hidden');
        Array.from(singleParrots.children)[index].classList.remove('hidden');  
    })
})

Array.from(singleParrotBreed).forEach((bird) => {
    bird.addEventListener('click', () => {
        const birdId = bird.id;
        //singleParrotsContainer.classList.remove('hidden');
        //document.querySelector('.parrot__single ul').classList.remove('hidden');
        parrots.forEach((parrot) => {
            if (parrot.id == birdId) {
                chosenBird = parrot;
                document.getElementById("selectedProduct").
                    innerHTML = `
                            <img class="parrot__chosen" src="${chosenBird.img}">
                            <h2>${chosenBird.name}</h2>
                            <p><div class="parrot__feature">Age: </div>${chosenBird.age}</p>
                            <p><div class="parrot__feature">Breed: </div>${chosenBird.breed}</p>
                            <p><div class="parrot__feature">Character: </div>${chosenBird.character}</p>
                            <p><div class="parrot__feature">Sex: </div>${chosenBird.sex}</p>
                            <p><div class="parrot__feature">Price: </div>${chosenBird.price}</p>
                            <button class="parrot__buy">Buy</button>
                            `;
                            document.getElementById("selectedProduct").classList.remove('hidden');

                            document.querySelector('.parrot__buy').addEventListener('click', () => {
                                document.getElementById("selectedProduct").classList.add('hidden');
                                singleParrotsContainer.classList.add('hidden');

                                document.getElementById('parrot__popup').classList.remove('hidden');
                                document.getElementById('parrot__popup').
                                innerHTML = `
                                        <p>Congratulations! You have just bought a parrot ${chosenBird.name}</p>
                                        <button class="parrot__popup--button" type="button">Ok</button>
                                        `
                                document.querySelector('.parrot__popup--button').addEventListener('click', () => {
                                    document.getElementById('parrot__popup').classList.add('hidden');
                                })
                                document.getElementById('parrotOrdersList').
                                    innerHTML += `
                                        <div>${chosenBird.name}</div>
                                        <div>${chosenBird.sex}</div>
                                        <div>${chosenBird.age}</div>
                                        <div>${chosenBird.price}</div>
                                        <button>X</button>
                                    `
                            });
                            
            }
        } )
    })
})

showOrdersButtons.addEventListener('click', () => {
    document.getElementById('parrotOrdersList').classList.remove('hidden');
})










