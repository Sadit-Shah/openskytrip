import db from '../../lib/db';
import Enquiry from '../../models/enquiry'
import { mailOptions, transporter} from '../../lib/nodemailer'

// const CONTACT_MESSAGE_FIELDS = {
//     name: "Name",
//     email: "Email",
//     subject: "Subject",
//     message: "Message",
//   };
  
//   const generateEmailContent = (data) => {
//     const stringData = Object.entries(data).reduce(
//       (str, [key, val]) =>
//         (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
//       ""
//     );
//     const htmlData = Object.entries(data).reduce((str, [key, val]) => {
//       return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`);
//     }, "");
//     return {
//         text: stringData,
//         html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>New Contact Message</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
//       };
//     };
    

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

            //Send Mail to Mail Server.
            try {
                await transporter.sendMail({
                  ...mailOptions,
                //   ...generateEmailContent(newEnquiry),
                  subject: "New quick enquiry from " + name,
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
                return new Response(JSON.stringify({ message: err.message }), { status: 400 })
              }
            


            return new Response(JSON.stringify(newEnquiry), { status: 200 })
        }
        } catch (error) {
            console.log(error)
            return new Response(JSON.stringify(error), { status: 500 })
        }
    }

 