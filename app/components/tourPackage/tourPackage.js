
// import TourPackageCard from '@/app/components/tourPackageCard/tourPackageCard'


// export const metadata = {
//   title: 'Tour Package Details',
//   description: 'Tour Package Details Page'
// }

// const getPackages = async () => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/packageDetails`, {
//       method: 'GET', // Set the HTTP method to GET
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       cache: 'no-store', // Cache control, if necessary
//     });

//     if (!res.ok) {
//       throw new Error('Failed to fetch packages...');
//     }

//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default async function TourPackage({
// }) {
//   const  packages  = await getPackages()
//   console.log(packages)
//   return (
//     <>
//       {packages?.map((pkg) => (
//         <TourPackageCard
//           id={pkg._id}
//           packageName={pkg.package_name}
//           packageDuration={pkg.package_duration}
//           city={pkg.city}
//           key={pkg._id}
//         >
//         </TourPackageCard>
//       ))}
//     </>
//   );
// };