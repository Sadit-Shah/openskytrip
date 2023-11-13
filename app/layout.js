import Layout from './components/layout/layout'
import './globals.scss'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
// const poppins = Poppins({
//   weight: ['200', '300', '400', '500', '600', '700'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
//   display: 'swap',
// })

export const metadata = {
  title: 'Openskytrips',
  description: 'Openskytrips - The Best Travel Agency of Kashmir, Kashmir hotels, Kashmir tourism, Kashmir Vacations, Cheap Kashmir Vacations, Kashmir Holiday, Cheap Kashmir Holidays, Kashmir Honeymoon packages, Srinagar packages, Gulmarg Valley Kashmir tours, Sonmarg Kashmir tours, Drung valley Kashmir Tours, Gurez valley packages, Tulip garden Kashmir package, Khyber Kashmir packages, Kashmir Winter Packages, Kashmir Winter Holiday, Travel to Kashmir',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>OpenSkyTrips</title>
        <meta name="description" content="Openskytrips - The Best Travel Agency of Kashmir" />
        <meta name="description" content="Kashmir hotels, Kashmir tourism, Kashmir Vacations, Cheap Kashmir Vacations, Kashmir Holiday, Cheap Kashmir Holidays, Kashmir Honeymoon packages, Srinagar packages, Gulmarg Valley Kashmir tours, Sonmarg Kashmir tours, Drung valley Kashmir Tours, Gurez valley packages, Tulip garden Kashmir package, Khyber Kashmir packages, Kashmir Winter Packages, Kashmir Winter Holiday, Travel to Kashmir" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"></link>

      </head>
      <body><Layout>{children}</Layout></body>
    </html>
  )
}
