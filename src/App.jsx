import './assets/Style.css'
import image from './assets/image.png'
import image2 from './assets/image 3.png'

function App() {

  return (
  <div className='container'>
    <div className="box1">
      <img className='image' src={image} />
      <div>
        <p className='font'>Listen Music Summary</p>
        <p className='font1'>Fix your mood with music you like with AI.</p>
      </div>
      <div className='box2'>
        <div className='box3'>
          <img className='image2' src={image2} />
          <div className='box4'>
            <p className='font2'>Falling in Love</p>
            <p className='font3'>Yoga ganteng</p>
          </div>
          <button  className='font4'><b>Play</b></button>
        </div>
      </div>
      <div>
        <button className='font5 '>View Price</button>
      </div>
    </div>
  </div> 
  )
}

export default App
