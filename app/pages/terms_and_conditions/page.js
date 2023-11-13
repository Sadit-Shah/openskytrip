
import termscss from './terms_and_conditions.module.scss'
export default function Termsandcond() {
    return (
        <div className={termscss.container}>
            <div className={termscss.content}>
                <h2>Terms and Conditions</h2>
            </div>
            <div className={termscss.heading}>
                <span>
                    Cancellation Policy
                </span>
            </div>
            <p>
            Once a partial or full payment has been made, cancellations must be submitted in writing to openskytrips@gmail.com. Cancellation fees will be applied based on the date that the written cancellation is received and based on the following days prior to departure date. Fees will be calculated as a percentage of the total package amount excluding ticketed airfare.
            </p>

            <div className={termscss.heading}>
                <span>
                    Flight Cancellation Policy
                </span>
            </div>
            <div className={termscss.lists}>
                <ul>
                    <li><i className="fa-solid fa-arrow-right fa-beat-fade fa-2xl"></i> As Per the Airline&apos;s Cancellation Policy.
                    </li>
                </ul>
            </div>
            <div className={termscss.heading}>
                <span>
                    Land Package Cancellation Policy
                </span>
            </div>
            <div className={termscss.lists}>
                <ul>
                    <li><i className="fa-solid fa-arrow-right fa-beat-fade fa-2xl"></i>Processing fee: 13% of the total package cost will be charged regardless of any reason, if you choose to cancel your trip post booking.</li>
                    <li><i className="fa-solid fa-arrow-right fa-beat-fade fa-2xl"></i>Between 45 days to 60 days from the trip start date: 25% of total package cost.</li>
                    <li><i className="fa-solid fa-arrow-right fa-beat-fade fa-2xl"></i>Between 44 to 31 days from the trip start date: 50% of total package cost.</li>
                    <li><i className="fa-solid fa-arrow-right fa-beat-fade fa-2xl"></i>Between 30 to 21 days from the trip start date: 60% of total package cost.</li>
                    <li><i className="fa-solid fa-arrow-right fa-beat-fade fa-2xl"></i>Between 20 and 14 days from the trip start date: 75% of total package cost.</li>
                    <li><i className="fa-solid fa-arrow-right fa-beat-fade fa-2xl"></i>Anything within 14 days from the trip start date : 100% of total package cost.</li>
                    <li><i className="fa-solid fa-arrow-right fa-beat-fade fa-2xl"></i>In case of no-show, booking stands non-refundable.</li>
                </ul>
            </div>
            <div className={termscss.heading}>
                <span>
                    Additional Information
                </span>
            </div>
            <div className={termscss.lists}>
                <ul>
                    <li><i className="fa-solid fa-arrow-right fa-beat-fade fa-2xl"></i>Pre-paid sim cards don&apos;t work in J&K due to security reasons, so postpaid connection is a must.</li>
                    <li><i className="fa-solid fa-arrow-right fa-beat-fade fa-2xl"></i>In Katra for Pithu / Palki / Pony services Municipal Committee Katra has fixed the rates and they are displayed on the rate card outside their booking office at Banganga. These rates are highly negotiable.</li>
                    <li><i className="fa-solid fa-arrow-right fa-beat-fade fa-2xl"></i>In Srinagar, if you are staying at a Houseboat, 1 hour Shikara Ride is complimentary from OpenSkyTrips.</li>
                    <li><i className="fa-solid fa-arrow-right fa-beat-fade fa-2xl"></i>For Vegetarian Food in Srinagar, Krishna Dhaba is the best place.</li>
                    <li><i className="fa-solid fa-arrow-right fa-beat-fade fa-2xl"></i>It is each traveler&apos;s responsibility to have a valid government issued Identity proof.</li>
                    <li><i className="fa-solid fa-arrow-right fa-beat-fade fa-2xl"></i>It is not mandatory for guest to take ponies in Gulmarg & Pahalgam to visit all the important tourist spots because most of the tourist attraction points are in close proximity & can be visited by foot.</li>
                    <li><i className="fa-solid fa-arrow-right fa-beat-fade fa-2xl"></i>For any optional activities like Rafting, Snow Skiing, Snow sledging, ATV motorbiking, pony rides etc rates are highly negotiable, so we recommend to bargain with the local vendors accordingly.</li>
                    <li><i className="fa-solid fa-arrow-right fa-beat-fade fa-2xl"></i>Traveler is required to hire a union cab locally on direct payment basis to visit Aru, Betab valley & Chandanwari sightseeing trips in Pahalgam.</li>
                    <li><i className="fa-solid fa-arrow-right fa-beat-fade fa-2xl"></i>Traveler is required to hire a union cab locally on direct payment basis to visit Fish Point, Zero Point & Thajiwas Glacier sightseeing trips in Sonamarg.</li>
                    <li><i className="fa-solid fa-arrow-right fa-beat-fade fa-2xl"></i>In addition to all the above, if a traveler wants to go to any off route destinations that is not included in their package, additional charges to be paid by traveler locally on direct payment basis.</li>
                </ul>
            </div>
        </div>
    )
}