let images = [
  {image: "./ProjecImages/project1.png",
    src: "https://github.com/HarshSepta12/Quiz_App",
    live: "https://quiz-app-gold-pi.vercel.app/"
  },
  {image: "./ProjecImages/project2.png",
    src: "https://github.com/HarshSepta12/Todo_App",
    live: "https://todo-app-lemon-nu.vercel.app/"
  },
  {image: "./ProjecImages/project3.png",
    src: "https://github.com/HarshSepta12/random_Copy_image",
    live: "https://random-copy-image.vercel.app/"
  },
  {image: "./ProjecImages/project5.png",
    src: "https://github.com/HarshSepta12/Bootstrap_project02",
    live: "https://bootstrap-project02.vercel.app/"
  },
  {image: "./ProjecImages/project7.png",
    src: "https://github.com/HarshSepta12/Country_Details_Using_API",
    live: "https://country-details-using-api.vercel.app/"
  },
  {image: "./ProjecImages/project8.png",
    src: "https://github.com/HarshSepta12/Calculator",
    live: "https://calculator-mu-sandy.vercel.app/"
  },
  {image: "./ProjecImages/project9.png",
    src: "https://github.com/HarshSepta12/Receipe_API",
    live: "https://receipe-api.vercel.app/"
  },
]
const live = document.querySelector('#live')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const img = document.querySelector('#screenShot')
const sourceCode = document.querySelector('#source')

let index = 0
img.src = images[0].image
live.href = images[0].live
source.href = images[0].src


const nextFunction = () => {
 
    index++;
    if(index < images.length){
      img.src = images[index].image
      live.href = images[index].live
  source.href = images[index].src
    }else if(index == images.length){
      index = 0;
      img.src = images[index].image
      live.href = images[index].live
  source.href = images[index].src
    }

}

const prevFunction = () => {
    index--;
    if(index > -1){
      img.src = images[index].image
      live.href = images[index].live
  source.href = images[index].src
    }else if( index == -1){
      index = images.length-1;
      img.src = images[index].image
      live.href = images[index].live
  source.href = images[index].src
    
  }
}

prev.addEventListener('click', prevFunction);
next.addEventListener('click', nextFunction)
const Slider = () => {
  setInterval(nextFunction,3000)
}
window.onload = Slider