import packagescss from './tours.module.scss';
import TourPackageCard from '../../components/tourPackageCard/tourPackageCard';
import { BASE_API_URL } from '@/app/lib/utils/utils';


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


