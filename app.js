class CustomSwiper extends HTMLElement {
  constructor() {
    super()
    this.swiper = null
  }

  connectedCallback() {
    if (!this.swiper) {
      const shadow = this.attachShadow({ mode: 'open' })

      const stylesheetLink = document.createElement('link')

      stylesheetLink.href = 'style.css'

      stylesheetLink.rel = 'stylesheet'

      const swiperStylesheetLink = document.createElement('link')

      swiperStylesheetLink.href =
        'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'

      swiperStylesheetLink.rel = 'stylesheet'

      const mySwiper = document.createElement('div')
      mySwiper.classList.add('swiper', 'mySwiper')

      const swiperContainer = document.createElement('div')
      swiperContainer.classList.add('swiper-wrapper')

      const slot = document.createElement('slot')

      const images = `
    <div class="swiper-slide">
      <img src="assets/mobble-black-model-pos-1_900x.png" alt="model" />
    </div>
    <div class="swiper-slide">
      <img src="assets/mobble-ink-model-pos-7_900x.png" alt="model" />
    </div>
    <div class="swiper-slide">
      <img src="assets/mobble-black-model-pos-2_900x.png" alt="model" />
    </div>
    <div class="swiper-slide">
      <img src="assets/mobble-ink-model-pos-8_900x.png" alt="model" />
    </div>
    `

      const prevButton = document.createElement('div')
      prevButton.classList.add('swiper-button-prev')
      const prevButtonImage = document.createElement('img')
      prevButtonImage.src = 'assets/prev.png'
      prevButtonImage.alt = ''
      prevButton.appendChild(prevButtonImage)

      const nextButton = document.createElement('div')
      nextButton.classList.add('swiper-button-next')
      const nextButtonImage = document.createElement('img')
      nextButtonImage.src = 'assets/next.png'
      nextButtonImage.alt = ''
      nextButton.appendChild(nextButtonImage)

      shadow.appendChild(swiperStylesheetLink)
      shadow.appendChild(stylesheetLink)
      swiperContainer.innerHTML = images

      mySwiper.appendChild(swiperContainer)
      mySwiper.appendChild(prevButton)
      mySwiper.appendChild(nextButton)
      shadow.appendChild(mySwiper)

      this.swiper = new Swiper(mySwiper, {
        loop: true,
        slidesPerView: 'auto',
        navigation: {
          nextEl: nextButton,
          prevEl: prevButton,
        },
        on: {
          slideChangeTransitionEnd: function () {
            console.log(
              this.slides.find((el) =>
                el.classList.contains('swiper-slide-active')
              )
            )
            console.log(`CURRENT ACTIVE SLIDE INDEX: ${this.realIndex}`)
          },
        },
      })
    }
  }
}

customElements.define('custom-swiper', CustomSwiper)
