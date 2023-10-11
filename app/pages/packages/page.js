import packagescss from './packages.module.scss';
import Packagecard from '../../components/packagecard/packageCard';
export default function Packages() {
    return (
        <>
            <div className={packagescss.packagescontainer}>
                <Packagecard/>
            </div>
            
        </>
    )
}