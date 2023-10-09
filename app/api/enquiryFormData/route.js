import db from '../../lib/db';
import Enquiry from '../../models/enquiry'


export async function POST(req) {
    await db.connect()

    try {
        // const newEnquiry = new Enquiry(req.json())
        const { name,
            email,
            mobile,
            city,
            arrivalcity,
            dov,
            persons,
            days,
            remarks } = await req.json()
        const dovParts = dov.split('-');
        if (dovParts.length === 3) {
            const year = parseInt(dovParts[2]);
            const month = parseInt(dovParts[1]) - 1; // Month is 0-based (0 = January, 1 = February, ...)
            const day = parseInt(dovParts[0]) + 1;

            // Create a Date object
            const formattedDate = new Date(year, month, day);

            // Now, you can format it as needed
            const isoFormattedDate = formattedDate.toISOString();
        
            const newEnquiry = new Enquiry({ name, email, mobile, city, arrivalcity, dov: isoFormattedDate, persons, days, remarks })
            await newEnquiry.save();
            return new Response(JSON.stringify(newEnquiry), { status: 200 })
        }
        } catch (error) {
            console.log(error)
            return new Response(JSON.stringify(error), { status: 500 })
        }
    }