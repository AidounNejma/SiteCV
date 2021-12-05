/* Animation Carrousel */

let back = document.querySelector("#back");
let forward = document.querySelector("#forward");

let text = document.querySelector(".text");
let link = document.querySelector('.linkCarrousel');
let image = document.querySelector('.imageCarrousel');

back.addEventListener('click', slideBack);
forward.addEventListener('click', slideNext);

numImage = 1;

function slideBack(){
    numImage = numImage -1;
    if(numImage === 0){ // si j'arrive à l'image 0
        numImage = 4; // je mets numImage à 4
    }

    if(numImage === 1){
        link.setAttribute('href', "https://github.com/AidounNejma"); /* A chaque numéro de slide je change l'attribut href de mon lien*/
        text.innerHTML = "Projets Github"; /* A chaque numéro de slide je change le contenu de mon <p> */
    } else if(numImage === 2){
        link.setAttribute('href', "https://angular.nejma-aidoun.fr/");
        text.innerHTML = "Site de Streaming (Angular)";
    } else if(numImage === 3){
        link.setAttribute('href', "https://aidounnejma.github.io/");
        text.innerHTML = "Reproduction site Discord";
    } else if(numImage == 4){
        link.setAttribute('href', "https://github.com/AidounNejma/Shikeygami");
        text.innerHTML = "Site d'Escape Game";
    }
    
    image.src = 'assets/img/' + numImage + '.jpeg';
    image.classList.toggle('fadeIn');
            setTimeout(function(){
                image.classList.remove('fadeIn');
            }, 500);
}

function slideNext(){
    numImage += 1;
            if(numImage === 5){ // si j'arrive à l'image 5
                numImage = 1; // je mets numImage à 1
            }
            if(numImage === 1){
                link.setAttribute('href', "https://github.com/AidounNejma");
                text.innerHTML = "Projets Github";
            } else if(numImage === 2){
                link.setAttribute('href', "https://angular.nejma-aidoun.fr/");
                text.innerHTML = "Site de Streaming (Angular)";
            } else if(numImage === 3){
                link.setAttribute('href', "https://aidounnejma.github.io/");
                text.innerHTML = "Reproduction site Discord";
            } else if(numImage == 4){
                link.setAttribute('href', "https://github.com/AidounNejma/Shikeygami");
                text.innerHTML = "Site d'Escape Game";
            }
            image.src = 'assets/img/' + numImage + '.jpeg';
            image.classList.toggle('fadeIn');
            setTimeout(function(){
                image.classList.remove('fadeIn');
            }, 500);
}

/* -------------------------------------------------------------------------------------------------------------------------- */
/* Animation des blocs  */

/* Utilisation de l'API instersection Observer pour détecter quand un bloc est 
    visible à l'écran (voir tuto grafikart) */

    const ratio = .2
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
    }
    
    const handleIntersect = function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('reveal-visible')
                observer.unobserve(entry.target) //une fois que l'élément a été vu une fois, il ne fera plus aucun appel (éviter la répétition de l'animation)
            } 
        })
    }
    const observer = new IntersectionObserver(handleIntersect, options);
    document.querySelectorAll('[class*="reveal-"]').forEach(function (r){ /* boucle pour prendre plusieurs éléments dans l'animation */
        observer.observe(r)
    })
    
    
/* -------------------------------------------------------------------------------------------------------------------------- */
/* Animation menu burger */
    var imageBurger = document.querySelector('.mobile');
//console.log(imageBurger);

var sideMenu = document.querySelector('.sideMenu');
//console.log(sideMenu);

var closeButton = document.querySelector('.closeButton');
//console.log(closeButton);

let sideLinks = document.querySelectorAll('.sideLinks');
console.log(sideLinks);

imageBurger.addEventListener('click', openSideMenu);

function openSideMenu() {
    if (sideMenu.style.display == 'none') {
        sideMenu.classList.add('slideInRight');
        sideMenu.style.display = 'flex';
        sideMenu.classList.remove('slideOutRight');
    } else{
        sideMenu.style.display = 'none';
    }
}

closeButton.addEventListener('click', closeSideMenu);
for(let i = 0; i < sideLinks.length; i++){
    sideLinks[i].addEventListener('click', closeSideMenu);
}
function closeSideMenu(){
        if(sideMenu.style.display== 'flex'){
            sideMenu.classList.add('slideOutRight');
            sideMenu.classList.remove('slideInRight');
            setTimeout(function(){ 
                sideMenu.style.display = 'none';
            }
            , 1000);
        } else{
            sideMenu.style.display = 'flex';
        }

}

