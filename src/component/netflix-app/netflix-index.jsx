import './netflix-index.css'
import {NetflixHeader} from  './netflix-header.jsx'
import {NetflixSection} from './netflix-section.jsx'

export function NetflixIndex(){
    return(
        <div className="banner">
            <div className="shade">
               <NetflixHeader />
               <NetflixSection />
            </div>
        </div>
    )

} 