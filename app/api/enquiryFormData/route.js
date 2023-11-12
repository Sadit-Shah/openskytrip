import db from '../../lib/db';
import Enquiry from '../../models/enquiry'
import { mailOptions, transporter} from '../../lib/nodemailer'


export async function POST(req,res) {

  if(req.method === "OPTIONS"){
    res.setHeader("Allow","POST")
    return res.status(200).json({message:'Cors Passed'})
  }
  else if(req.method === "POST"){
    await db.connect()
    try {
        
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

            //Send Mail to Mail Server.
            try {
                await transporter.sendMail({
                  ...mailOptions,
                //   ...generateEmailContent(newEnquiry),
                  subject: "New Quick Enquiry from " + name,
                  text: "Hello", // plain text body
                  html: `<p style='margin-left:50px; font-size:24px'><b>Quick Enquiry Request from ${email}</b></p>
                        <table style='margin-left:50px; font-size:20px'>
                        <tr><td>Name</td><td>${name}</td></tr>
                        <tr><td>Mobile</td><td>${mobile}</td></tr>
                        <tr><td>City</td><td>${city}</td></tr>
                        <tr><td>Arrival City</td><td>${arrivalcity}</td></tr>
                        <tr><td>Date of Visit</td><td>${dov}</td></tr>
                        <tr><td>No of Persons</td><td>${persons}</td></tr>
                        <tr><td>No of Days</td><td>${days}</td></tr>
                        <tr><td>Remarks</td><td>${remarks}</td></tr>
                        </table>
                  `, // html body
                });                
              } catch (err) {
                console.log(err)
                return new Response(JSON.stringify({ message: err.message }), { status: 400, headers:{
                  'Access-Control-Allow-Origin':'*',
                  'Access-Control-Allow-Methods':'POST',
                  'Access-Control-Allow-Headers':'Content-Type, application/json',
              } })
              }
            


            return new Response(JSON.stringify(newEnquiry), { status: 200, headers:{
              'Access-Control-Allow-Origin':'*',
              'Access-Control-Allow-Methods':'POST',
              'Access-Control-Allow-Headers':'Content-Type, application/json',
          } })
        }
        } catch (error) {
            console.log(error)
            return new Response(JSON.stringify(error), { status: 500, headers:{
              'Access-Control-Allow-Origin':'*',
              'Access-Control-Allow-Methods':'POST',
              'Access-Control-Allow-Headers':'Content-Type, application/json',
          } })
        }
      }
    }

 