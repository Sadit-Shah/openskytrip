import db from '../../lib/db';
import Packages from '../../models/packages'



export async function GET(req) {
    try {
        await db.connect()
        const packages = await Packages.find({});
        console.log('Api-------------')
        console.log(packages)
        console.log('Api end-------------')
        return new Response(JSON.stringify(packages), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}