import db from '../../lib/db';
import Contact from '../../models/contact'
import { mailOptions, transporter} from '../../lib/nodemailer'

export function OPTIONS(req,res){
  return new Response(JSON.stringify({ message: 'Cors Passed' }), { status: 200, headers:{
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET,OPTIONS,PATCH,DELETE,POST,PUT',
    'Access-Control-Allow-Headers':'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
} })
}
export async function POST(req) {
    await db.connect()

    try {
        
        const { fname,
            lname,
            email,
            phone,
            message } = await req.json()
            const newContact = new Contact({ fname, lname, email, phone, message })
            await newContact.save();

            //Send Mail to Mail Server.
            try {
                await transporter.sendMail({
                  ...mailOptions,
                //   ...generateEmailContent(newEnquiry),
                  subject: "New Contact Message from " + fname + ' ' + lname,
                  text: "Hello", // plain text body
                  html: `<p style='margin-left:50px; font-size:24px'><b>Contact Message from ${email}</b></p>
                        <table style='margin-left:50px; font-size:20px'>
                        <tr><td>First Name</td><td>${fname}</td></tr>
                        <tr><td>Last Name</td><td>${lname}</td></tr>
                        <tr><td>Phone Number</td><td>${phone}</td></tr>
                        <tr><td>Message</td><td>${message}</td></tr>
                        </table>
                  `, // html body
                });                
              } catch (err) {
                console.log(err)
                return new Response(JSON.stringify({ message: err.message }), { status: 400, headers:{
                  'Access-Control-Allow-Origin':'*',
                  'Access-Control-Allow-Methods':'GET,OPTIONS,PATCH,DELETE,POST,PUT',
                  'Access-Control-Allow-Headers':'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
              } })
              }
            


            return new Response(JSON.stringify(newContact), { status: 200, headers:{
              'Access-Control-Allow-Origin':'*',
              'Access-Control-Allow-Methods':'GET,OPTIONS,PATCH,DELETE,POST,PUT',
              'Access-Control-Allow-Headers':'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          } })
        
        } catch (error) {
            console.log(error)
            return new Response(JSON.stringify(error), { status: 500, headers:{
              'Access-Control-Allow-Origin':'*',
              'Access-Control-Allow-Methods':'GET,OPTIONS,PATCH,DELETE,POST,PUT',
              'Access-Control-Allow-Headers':'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          } })
        }
    }

 