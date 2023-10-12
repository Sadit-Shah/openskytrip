
import cardCSS from './packagecard.module.scss'
import { getPackages } from '@/app/lib/packageDetails'
// export const metadata={
//   title:'Package Details',
//   description:'Package Details Page'
// }

// const getPackages = async () => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/packageDetails`, {
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       method: 'GET',
//       cache: "no-store"
  
//     })
//     if (!res.ok) {
//       throw new Error("Failed to fetch packages...")
//     }
//     return res.json()
//   } catch (error) {
//     console.log(error)
//   }
// }


export default async function PackageCard() {
  const { packages } = await getPackages()

  return (
    <>
      {packages.map((pkg) => (
        <div className={cardCSS.cardcont} key={pkg._id}>
          <div className={cardCSS.imgcont}>
            <img src="../images/srinagar.jpg" />
          </div>

          <div className={cardCSS.desc}>
            <h3>
              <strong>{pkg.package_name}</strong> <br></br>

            </h3>
            <div className={cardCSS.star}>
              <i className="fa-solid fa-star "></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>

            <h6>
              <strong> {pkg.package_duration}</strong> |  Customizable
            </h6>
            <h6>
              <strong>Cities</strong> : {pkg.cities}
            </h6>

            <ul>
              <li> <i className="fa-solid fa-hotel"></i> <br />   Hotels</li>
              <li> <i className="fa-sharp fa-solid fa-bus"></i> <br />Transfer</li>
              <li> <i className="fa-sharp fa-solid fa-bowl-rice"></i> <br /> Meals</li>
              <li> <i className="fa-regular fa-images"></i> <br /> Sightseeing</li>
            </ul>

          </div>

          <div className={cardCSS.details}>
            <span>
              <i className="fa-solid fa-indian-rupee-sign"></i> <br /> On request
            </span>
            <div className={cardCSS.button} >
              <input type="button" value="Details" />
            </div>
            <div className={cardCSS.button}>
              <input type="button" value="Book Now" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};