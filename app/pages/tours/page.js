import packagescss from './tours.module.scss';
import TourPackageCard from '../../components/tourPackageCard/tourPackageCard';
import { BASE_API_URL } from '@/app/lib/utils/utils';

//Server fetching Try..
// export const dynamic = "force-dynamic";
export const metadata = {
    title: 'Tour Package Details',
    description: 'Tour Package Details Page'
}

const getPackages = async () => {
    try {
      const res = await fetch(`${BASE_API_URL}/api/packageDetails`, {
        // const res = await fetch(`http://localhost:3000/api/packageDetails`, {
        method: 'GET', // Set the HTTP method to GET
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        // cache: 'no-store', // Cache control, if necessary
        next:{
            revalidate:0,
        }
      });
  
      if (!res.ok) {
        throw new Error('Failed to fetch packages...');
      }
  
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  
//---------


export default async function Tours() {
    if(!BASE_API_URL){
        return null;
    }
    //Server Try
    const packages = await getPackages()
    console.log(packages)

    //----------

    return (
        <>
            <div className={packagescss.packagescontainer}>
                {/* <TourPackage/> */}
                {packages?.map((pkg) => (
                    <TourPackageCard
                        id={pkg._id}
                        packageName={pkg.package_name}
                        packageDuration={pkg.package_duration}
                        city={pkg.city}
                        key={pkg._id}
                    >
                    </TourPackageCard>
                ))}

            </div>
        </>
    )
}