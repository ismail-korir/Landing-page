import Flownav from './components/navbar'
import Flowfooter from './components/footer'
import './App.css'
import Flowgallery from './components/gallery'
import Flowcarousel from './components/carousel'
import Flowarrivals from './components/arrivals'
import Flowhoodies from './components/hoodies'
import Flowwinter from './components/winter'

function App() {
  return (
    <>
      <Flownav></Flownav>
      <Flowcarousel></Flowcarousel>
      <Flowgallery></Flowgallery>
      <Flowarrivals></Flowarrivals>
      <Flowhoodies></Flowhoodies>
      <Flowwinter></Flowwinter>
      <Flowfooter></Flowfooter>
    </>
  )
}

export default App
