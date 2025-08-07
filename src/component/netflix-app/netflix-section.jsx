import './netflix-section.css'
import {NetflixMain} from './netflix-main.jsx'


export function NetflixSection() {
    return (
        <section>
            <div className="d-flex align-items-center justify-content-center text-white  ">
                <div>
                    <div className="unlimited ">Unlimited movies, TV </div>
                    <div className='shows text-center '>shows and more</div>
                    <div className=" text-center pricing fs-5">Starts at ₹149. Cancel at any time.</div>

                    <NetflixMain />
                </div>

            </div>
        </section>


    )
}