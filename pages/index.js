// import { startConnection } from '@/mongoose/connection'
import carousel_1 from '../assets/Carousel-1.jpeg';
import carousel_2 from '../assets/Carousel-2.jpeg';
import carousel_3 from '../assets/Carousel-3.jpeg';
import { Inter } from '@next/font/google'
import Link from 'next/link'
import Image from 'next/image';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  


  return (
    <>
      <div className='viewport container-fluid text-center  px-0'>
        <div className="container-md p-0 ">
          <div className="row justify-content-center p-0 m-0 container-md">
            <div className="col-12 col-lg-6">
              <div id="carouselExampleCaptions" className="carousel slide p-0 container-md  ">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <a target='_blank'className='justify-content-center d-flex'  href="https://www.instagram.com/p/CoFi1SWOPc-/"><Image  src={carousel_3} className="d-block carousel" alt="..." /></a>
              
                  </div>
                  <div className="carousel-item">
                    <a target='_blank'className='justify-content-center d-flex'  href='https://www.instagram.com/p/CovThYip5f_/'><Image  src={carousel_1} className="d-block carousel" alt="..." /></a>
              
                  </div>
                  <div className="carousel-item">
                    <a target='_blank'className='justify-content-center d-flex'  href="https://www.instagram.com/p/Co49_UiuSdV/"><Image  src={carousel_2} className="d-block carousel" alt="..." /></a>
              
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className='col-12 col-lg-6'>
              <div className='container card'>
                <p>
                  Acá, puedes ver el resultado de algunos de mis trabajos. En caso de querer ver mas, te invito a ingresar en mi perfil de Instagram <a href="https://instagram.com/nailsbymariangeles" target="_blank"><strong>acá</strong></a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <h2 >This is the home page</h2>
          </div>
          <div className="col-4">
            <button className='btn-warning'>hola</button>
          </div>
        </div>
        <div className="row">
          <input type='textarea' className='col textarea' />
          <div className="col">
            <button type='button' className='btn-success'>Prueba 2</button>
          </div>
        </div>
      </div>
    </>
  )
}

// export async function getServerSideProps(){
//   try {
//     await startConnection()
//   } catch (error) {
//     console.log(error);
//   }
  
// }

// getServerSideProps();