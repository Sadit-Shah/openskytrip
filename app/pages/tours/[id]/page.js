
import TourItineraryCard from "@/app/components/tourItineraryCard/tourItineraryCard"
import itineraryCSS from './tourItinerary.module.scss'
import TourPackageCard from "@/app/components/tourPackageCard/tourPackageCard"

const getTour = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/packageDetails/${id}`, {
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


export default async function TourItinerary({ params }) {
    const tourItinerary = await getTour(params.id)

    return (
        <>
            <div className={itineraryCSS.itineraryContainer}>
                <div className={itineraryCSS.itineraryTourDetails}>
                    <TourPackageCard
                        id={tourItinerary._id}
                        packageName={tourItinerary.package_name}
                        packageDuration={tourItinerary.package_duration}
                        cities={tourItinerary.cities}
                        key={tourItinerary._id}
                        btndetails={false}
                    >
                    </TourPackageCard>
                </div>
                <div className={itineraryCSS.itineraryTour}>
                    <TourItineraryCard id={tourItinerary._id} />
                </div>


            </div>
        </>
    )

}