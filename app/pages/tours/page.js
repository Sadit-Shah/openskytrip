import packagescss from './tours.module.scss';
import TourPackage from '../../components/tourPackage/tourPackage';

export default function Tours() {
    return (
        <>
               <div className={packagescss.packagescontainer}>
              <TourPackage/>

            </div>
        </>
    )
}