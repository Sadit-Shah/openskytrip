import packagescss from './tours.module.scss';
import TourPackageCard from '../../components/tourPackageCard/tourPackageCard';
import { BASE_API_URL } from '@/app/lib/utils/utils';

export const metadata = {
    title: 'Openskytrips',
    description: 'Openskytrips - The Best Travel Agency of Kashmir, Kashmir hotels, Kashmir tourism, Kashmir Vacations, Cheap Kashmir Vacations, Kashmir Holiday, Cheap Kashmir Holidays, Kashmir Honeymoon packages, Srinagar packages, Gulmarg Valley Kashmir tours, Sonmarg Kashmir tours, Drung valley Kashmir Tours, Gurez valley packages, Tulip garden Kashmir package, Khyber Kashmir packages, Kashmir Winter Packages, Kashmir Winter Holiday, Travel to Kashmir',
  }
  
const getPackages = async () => {
    try {
        const res = await fetch(`${BASE_API_URL}/api/packageDetails`, {
            method: 'GET', // Set the HTTP method to GET
            cache: 'no-store', // Cache control, if necessary
        });
        if (!res.ok) {
            throw new Error('Failed to fetch packages...');
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
}


export default async function Tours() {
    if (!BASE_API_URL) {
        return null;
    }
    const packages = await getPackages()
    return (
        <>
            <div className={packagescss.packagescontainer}>               
                {packages?.map((pkg) => (
                    <TourPackageCard
                        id={pkg._id}
                        packageName={pkg.package_name}
                        packageDuration={pkg.package_duration}
                        cities={pkg.cities}
                        key={pkg._id}                        
                    >
                    </TourPackageCard>
                ))}

            </div>
        </>
    )
}


