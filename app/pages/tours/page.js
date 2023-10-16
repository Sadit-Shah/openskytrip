import packagescss from './tours.module.scss';
import TourPackageCard from '../../components/tourPackageCard/tourPackageCard';

//Server fetching Try..

export const metadata = {
    title: 'Tour Package Details',
    description: 'Tour Package Details Page'
}

const getPackages = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/packageDetails`, {
            // const res = await fetch("http://localhost:3000/api/packageDetails", {
            // headers: {
            //   'Content-Type': 'application/json'
            // },
            // method: 'GET',
            cache: "no-store",
            // next:{revalidate:0}

        })
        if (!res.ok) {
            throw new Error("Failed to fetch packages...")
        }
        return res.json()
    } catch (error) {
        console.log(error)
    }
}
//---------


export default async function Tours() {
    //Server Try
    const packages = await getPackages()
    console.log(packages)

    //----------

    return (
        <>
            <div className={packagescss.packagescontainer}>
                {/* <TourPackage /> */}
                {packages?.map((pkg)=>(
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