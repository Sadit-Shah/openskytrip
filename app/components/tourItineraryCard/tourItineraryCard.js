import itenarycss from './tourItineraryCard.module.scss'

const getItinerary = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/tourItinerary/${id}`, {
            method: 'GET', // Set the HTTP method to GET
            cache: 'no-store', // Cache control, if necessary
        });
        if (!res.ok) {
            throw new Error('Failed to fetch Tour Itinerary...');
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function TourItineraryCard({ id }) {
    const itinerary = await getItinerary(id)
    return (
        <>
            {itinerary &&
                <div className={itenarycss.itenarycont}>
                    <div className={itenarycss.overview}>
                        <h3>Overview</h3>
                        <p>{itinerary.overview}</p>

                    </div>
                    <div className={itenarycss.trip_highlights}>
                        <h3>Trip Highlights</h3>
                        <ul>
                                    {itinerary.trip_highlights?.map((highlights, index) => (
                                        <li key={index}><i className="fa-solid fa-arrow-right fa-beat-fade fa-2xl"></i>{highlights}</li>
                                    ))}
                                </ul>

                    </div>

                    <h3>Recommended Itinerary</h3>
                    {itinerary.recomended_itinerary?.map((day, index) => (
                        <div key={index}>
                            <div className={itenarycss.dayinfo}>
                                <span>Day - {index + 1} </span>
                                {day.heading}
                            </div>
                            <p>{day.description} </p>
                        </div>
                    ))}



                    <div className={itenarycss.incluexclu}>
                        {itinerary.included.length > 0 &&
                            <>
                                <h4> Whats Included</h4>
                                <ul>
                                    {itinerary.included?.map((incl, index) => (
                                        <li key={index}><i className="fa-solid fa-arrow-right fa-beat-fade fa-2xl"></i>{incl}</li>
                                    ))}
                                     {/* fa-beat-fade fa-2xl */}
                                </ul>
                            </>
                        }
                        {itinerary.excluded.length > 0 &&
                            <>
                                <h4> Whats Excluded</h4>
                                <ul>
                                    {itinerary.excluded?.map((excl, index) => (
                                        <li key={index}><i className="fa-solid fa-arrow-right fa-beat-fade fa-2xl"></i><span>{excl}</span></li>
                                        
                                    ))}
                                </ul>
                            </>
                        }
                    </div>

                </div>
            }
            {!itinerary &&
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px' }}>
                    <p>Itinerary Not Found 404</p>
                </div>
            }

        </>
    )
}