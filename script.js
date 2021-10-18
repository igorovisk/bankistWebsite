'use strict'

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const header = document.querySelector('.header')
const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')

const openModal = function (event) {
    event.preventDefault()
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

// btnsOpenModal?.forEach(btn => btn.addEventListener('click', openModal))

// btnCloseModal.addEventListener('click', closeModal)
// overlay.addEventListener('click', closeModal)

// document.addEventListener('keydown', function (e) {
//     if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//         closeModal()
//     }
// })

// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)

// const header = document.querySelector('.header')

// const allSections = document.querySelectorAll('.section')
// console.log(allSections)

// document.getElementById('#section--1')
// const allButtons = document.getElementsByTagName('button') //retorna html collection, é atualizada se o DOM mudar
// // const allButtons = document.getElementsByClassName('button') //retorna html collection, é atualizada se o DOM mudar

// //CREATING AND INSERTING ELEMENTS

// const message = document.createElement('div')
// message.classList.add('cookie-message')
// message.textContent = 'We use cookies for improved functionality and analytics.'
// message.innerHTML =
//     'We use cookies for improved functionality and analytics. <button class= "btn btn--close-cookie"> Got it!</button>'
// // header.prepend(message) //add before the first child
// // header.append(message.cloneNode(true)) //add after the father element
// header.append(message) //add before the first child
// // header.before(message)
// // header.after(message)

// //Delete elements

// document.querySelector('.btn--close-cookie').addEventListener('click', event => {
//         message.remove()
// })

// //Styles:
// message.style.backgroundColor = '#37383d'
// message.style.width = '120%'

// // console.log(getComputedStyle(message)) //pega todas as propriedades
// console.log(getComputedStyle(message).color) //pega todas as propriedades
// console.log(getComputedStyle(message).height)
// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10)+ 40 + 'px' //o 10 é pq é base 10 e não binaria. TEM QUE SER PARSEFLOAT POR CONTA DO MESSAGE.HEIGHT SER 48.9844 PX

// document.documentElement.style.setProperty('--color-primary', 'orangered') //tipo o replace. ACESSA O ROOT

// //ATTRIBUTES:

// const logo = document.querySelector('.nav__logo') //logo é um objeto
// console.log('logo alt:', logo.alt)
// console.log(logo.src)
// console.log(logo.blablabla) //não funciona pq não existe esse atributo. Caso fosse um atributo normal ele criaria, por exemplo:
// logo.alt = 'bankist logo created by js'
// console.log(logo.alt)
// console.log(logo.designer) //n existe
// console.log(logo.getAttribute('designer')) //assim funciona pra pegar o atributo, mesmo q ele n seja padrao da TAG

// logo.setAttribute('company', 'Bankist')
// console.log(logo.getAttribute('company'))

// console.log(logo.src) //absolute version
// console.log(logo.getAttribute('src')) //relative version

// const link = document.querySelector('.nav__link--btn')
// console.log(link.href) //absolute version
// console.log(link.getAttribute('href')) //relative version

// //DATA ATTRIBUTES
// console.log(logo.dataset.versionNumber) //dataset Object

// //CLASSES
// logo.classList.add()
// logo.classList.remove()
// logo.classList.toggle()
// logo.classList.contains()
// logo.className = 'Jonas' //cuidado, esse metodo tira todas as outras classes e deixa só a que eu incluir aqui

//PROJECT IMPLEMENTATION

//SMOOTH SCROLL


// btnScrollTo.addEventListener('click', function (event) {  
//     const s1coords = section1.getBoundingClientRect() //PEGA AS COORDENADAS
//     // console.log(s1coords)
//     // console.log(event.target.getBoundingClientRect())
//     // console.log('Current Scroll (x/y)', window.pageXOffset, pageYOffset)
//     // window.scrollTo(
//     //   s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset //current position to the current scroll
//     // )

//     //OLD WAY OF MAKING SMOOTH SCROLL
//     // window.scrollTo({
//     //   left: s1coords.left + window.pageXOffset, 
//     //   top: s1coords.top + window.pageYOffset,
//     //   behavior: 'smooth'
//     // })

//     //MODERN WAY FOR MODERN BROWSERS:

//     section1.scrollIntoView({behavior: 'smooth'})
// })


// const alertH1 = function(e){
//   alert('addEventListener')
//   h1.removeEventListener('mouseenter', alertH1)
// }

// h1.addEventListener('mouseenter', alertH1)


//old school way:
// h1.onmouseenter = function(e){
  
// }

// const randomInt = (min,max) => Math.floor(Math.random() * (max-min + 1) + min)

// const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`

// document.querySelector('.nav__link').addEventListener('click', function (e){
//   this.style.backgroundColor = randomColor()
//   console.log('LINK', e.target, e.currentTarget)
//   //current target é o mesmo que o eventListener tá attached
//   console.log(e.currentTarget === this)

//   //STOP PROPAGATION

//   e.stopPropagation()
// })

// document.querySelector('.nav__links').addEventListener('click', function (e){
//   this.style.backgroundColor = randomColor()
//   console.log('CONTAINER', e.target, e.currentTarget)
// })

// document.querySelector('.nav').addEventListener('click', function (e){
//   this.style.backgroundColor = randomColor()
//   console.log('NAV', e.target, e.currentTarget)
// })
//true) //QUANDO TÁ EM TRUE O EVENTO QUE SAIR DO TOPO DO DOM É CAPTURADO NA DESCIDA, SE NÃO TIVER NADA OU TIVER FALSE, O EVENTO É CAPTURADO NA VOLTA PARA O TOPO DA ARVORE DOM

//PAGE NAVIGATION
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault()
//     const id = this.getAttribute('href')
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})
    
//   })
// })

//event delegation  - USAMOS PRA N TER QUE ADICIONAR EVENT LISTENER PRA CADA ELEMENTO. ASSIM ADICIONAMOS SOMENTE AO ELEMENTO PAI:

// 1. ADD EVENT LISTENER TO COMMON PARENT ELEMENT
// 2. DETERMINE WHAT ELEMENT ORIGINATED THE EVENT

document.querySelector('.nav__links').addEventListener('click', event =>{
  event.preventDefault()
  // console.log(event.target)
  //matching strategy

  if(event.target.classList.contains('nav__link')){
    const id = event.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }
})

//DOM TRAVERSING - WALKING THE DOM


//GOING DOWNWARDS: SELECTING CHILDS
const h1 = document.querySelector('h1')

// console.log(h1.querySelectorAll('.highlight'))
// console.log(h1.childNodes)
// // console.log(h1.children)
// h1.firstElementChild.style.color = 'blue'
// h1.lastElementChild.style.color = 'orange'

//GOING UPWARDS

// console.log(h1.parentNode)
// console.log(h1.parentElement) // it is not always a parentNode

// h1.closest('header').style.color = 'purple'

// h1.closest('h1').style.background = 'var(--gradient-primary)'

// console.log(h1.previousElementSibling)
// console.log(h1.nextElementSibling)

// console.log(h1.parentElement.children);
;
[...h1.parentElement.children].forEach(element => {
  if(element !== h1){
    element.style.transform= 'scale(0.5)'
  }
})

//TABBED CONTENT:



tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab')
 

  //guard clause
  if(!clicked) return

  //remove active classes
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'))
  tabsContent.forEach(tabContent => tabContent.classList.remove('operations__content--active'))
  
  //active tab
  clicked.classList.add('operations__tab--active')

  //activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})


//MENU FADE ANIMATION
//event handler so pode ter 1 argumento que é o evento, porem conseugimos passar com o metodo bind outros parametros que tornam-se o "this"
const handleHover = function (event) {
  if(event.target.classList.contains('nav__link')){
    const link = event.target
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')
    const logo = link.closest('.nav').querySelector('img')

    siblings.forEach(element =>{
      if(element !== link){
        element.style.opacity = this
      }
      logo.style.opacity = this
    })
  }
}

//passing an 'argument' into a event Handler
nav.addEventListener('mouseover', handleHover.bind(0.5))

nav.addEventListener('mouseout', handleHover.bind(1))


//STICKY NAVIGATION BAR
// const initialCoords = section1.getBoundingClientRect()

// window.addEventListener('scroll', () =>{
//   console.log(window.scrollY)

//   if(window.scrollY > initialCoords.top){
//     nav.classList.add('sticky')
    
//   } else{
//     nav.classList.remove('sticky')
//   }
// })

//CRIANDO UM OBSERVER:
//INTERSECTION OBSERVER API

// const obsCallBack = function (entries, observer){
//   entries.forEach(entry => {
//     console.log(entry)
//   })
// }

// const observerOptions = {
//   root: null,
//   threshold: [0, 0.2] //0.1 //10% //porcentagem que vai detectar de interceptação na root. Nesse caso a root é nula, então ele pega a viewport
// }

// const observer =  new IntersectionObserver (obsCallBack, observerOptions)
// observer.observe(section1)

const navHeight = nav.getBoundingClientRect().height


const stickyNav = function(entries){
  const [entry] = entries
  
  if(entry.isIntersecting){
    nav.classList.remove('sticky')
  } else if(!entry.isIntersecting){
    nav.classList.add('sticky')
  }
}


const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, //betwenn 0 and 1
  rootMargin: `-${navHeight}px` //adianta o disparo do evento, como se fosse um threshold negativo, já que o threshold so pode ser entre 0 e 1 (0% a 100%)
})

headerObserver.observe(header)

//REVEALING SECTIONS IN SCROLL

const revealSection = function(entries,observer){
  const [entry] = entries  

  if(!entry.isIntersecting) return
  
    entry.target.classList.remove('section--hidden')

  observer.unobserve(entry.target) //remove o observador pra n pesar o site, ja que tudo ja foi carregado
  
}

const allSections = document.querySelectorAll('.section')

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
  // rootMargin
})

allSections.forEach(section => {
  sectionObserver.observe(section)
  section.classList.add('section--hidden')
})

//LAZY LOADING IMAGES - GOOD PERFORMANCE

const imgTargets = document.querySelectorAll('img[data-src]')

const loadImg = function (entries, imgObserver) {
  const [entry] = entries
  console.log(entry)
  if(!entry.isIntersecting) return //Guard clause, se n tiver interceptando n faça nada

  //replace the lazy imgs with the real ones: replace src with data-src
  if(entry.isIntersecting){
    entry.target.src = entry.target.dataset.src
    // entry.target.classList.remove('lazy-img') // não é bom trocar direto, ao simular 3g mostra q a imagem carrega, mas ela ainda fica borrada
//entao fazemos assim:
    entry.target.addEventListener('load', function(){
      entry.target.classList.remove('lazy-img')
    })

    imgObserver.unobserve(entry.target)

  }

}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
})

imgTargets.forEach(img => imgObserver.observe(img))

//SLIDER COMPONENT:
const sliderFunction = function(){
    const btnLeft = document.querySelector('.slider__btn--left')
    const btnRight = document.querySelector('.slider__btn--right')
    const dotContainer = document.querySelector('.dots')

    const createDots = function(){
      slides.forEach(function (_, index){
        dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${index}"></button>`
        )
      })
    }

    let currentSlide = 0
    const maxSlide = slides.length - 1

    const goToSlide = function (slide){
      slides.forEach((s,index) =>{
        s.style.transform = `translateX(${100 * (index-slide)}%)`
        activateDot(slide)
      })
      
    }

    const activateDot = function(slide){
      document.querySelectorAll('.dots__dot').forEach(dot =>{
        dot.classList.remove('dots__dot--active')
        
        document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
      })
    }

    const nextSlide = function(){
      if(currentSlide === maxSlide){
        currentSlide = 0
      } else{
        currentSlide++
      }   
      goToSlide(currentSlide)
      activateDot(currentSlide)
    }

    const previousSlide = function(){
      if(currentSlide === 0){
        currentSlide = maxSlide
      } else{
        currentSlide--
      }     
      goToSlide(currentSlide) 
      activateDot(currentSlide)
    }

    const init = function(){
      goToSlide(0)
      createDots()  
      activateDot(0)
    }
    init()

    //next slide:
    btnRight.addEventListener('click', nextSlide)   
    //previous slide
    btnLeft.addEventListener('click', previousSlide)

    setInterval(nextSlide, 10000)

    document.addEventListener('keydown', function(e){
      if(e.key == 'ArrowLeft') previousSlide()
      e.key ==='ArrowRight' && nextSlide()
    })

    dotContainer.addEventListener('click', function(e){
      if(e.target.classList.contains('dots__dot')){    
        const { slide } = e.target.dataset //esse dataset veio do elemento dot que criamos na função createDots(), então da pra usar destructuring pra variavel slide ser o dataset
        goToSlide(slide)
      }
    })
}

sliderFunction()

