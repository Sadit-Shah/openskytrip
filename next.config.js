/** @type {import('next').NextConfig} */
const nextConfig = {

}

module.exports = nextConfig
// module.exports = {
//     async headers() {
//       return [
//         {
//           // matching all API routes
//           source: "/api/:path*",
//           headers: [
//             { key: "Access-Control-Allow-Credentials", value: "true" },
//             { key: "Access-Control-Allow-Origin", value: "*" },
//             { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
//             { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
//           ]
//         }
//       ]
//     }
//   };

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     async headers() {
//         return [
//             {
//                 // matching all API routes
//                 source: "/api/:path*",
//                 headers: [
//                     { key: "Access-Control-Allow-Credentials", value: "true" },
//                     { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
//                     { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
//                     { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
//                 ]
//             }
//         ]
//     }
// }

// module.exports = nextConfig
// const nextConfig = {
//     async headers() {
//       return [
//         {
//           // Routes this applies to
//           source: "/api/(.*)",
//           // Headers
//           headers: [
//             // Allow for specific domains to have access or * for all
//             {
//               key: "Access-Control-Allow-Origin",
//               value: "*",
//               // DOES NOT WORK
//               // value: process.env.ALLOWED_ORIGIN,
//             },
//             // Allows for specific methods accepted
//             {
//               key: "Access-Control-Allow-Methods",
//               value: "GET, POST, PUT, DELETE, OPTIONS",
//             },
//             // Allows for specific headers accepted (These are a few standard ones)
//             {
//               key: "Access-Control-Allow-Headers",
//               value: "Content-Type, Authorization",
//             },
//           ],
//         },
//       ];
//     },
//   }
  
//   module.exports = nextConfig;