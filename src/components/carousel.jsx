import { Carousel } from 'flowbite-react'
export default function Flowcarousel() {
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={5000}>
          <img src="/src/assets/slider_01.jpg" alt="..." />
          <img src="/src/assets/slider_02.jpg" alt="..." />
          <img src="/src/assets/slider_03.jpg" alt="..." />
        </Carousel>
      </div>
    </>
  )
}
