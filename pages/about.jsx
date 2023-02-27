import { Inter } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import profile_pic from '../assets/mi-pic.jpg'
const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <div className="viewport">
        <div className="container-md card p-5 ">
          <div className="row">
            <div className="col-6">
              <h1 className='text-center text-wrap text-uppercase fs-1 fw-bold'>Mi nombre es Maria Ramirez</h1>

            </div>
            <div className="col-6">
              <Image src={profile_pic} className="profile-pic" alt="mi-pic"></Image>

            </div>
          </div>
          <div className="row container">
            <p className='container p-5' > 
              Ciudad Ojeda. Comence con el arte de la manicura en 2022 cuando empece a sentirme atraida por este hermoso mundo. Poco a poco fui entendiendo que es un arte que requiere mucha practica y necesitaba de mucho empeño para lograr resultados decentes. Por esa razon he dado todo de mi para mejorar cada dia mas en este arte y poder ofrecer un trabajo de calidad a mi clientela. Realizo todo tipo de esculpidos, en polygel, resina, rubber, y me adapto a las tendencias actuales de diseño
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
