import db from '../../lib/db';
import Packages from '../../models/packages'
import { revalidatePath } from 'next/cache';


export async function GET(request) {
    try {
        await db.connect()
        const packages = await Packages.find({});
        const path = request.nextUrl.searchParams.get('path')||'/'
        revalidatePath(path)
        return new Response(JSON.stringify(packages), { status: 200, headers:{
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET',
            'Access-Control-Allow-Headers':'Content-Type, Authorization',
        }})
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500,  headers:{
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET',
            'Access-Control-Allow-Headers':'Content-Type, Authorization',
        } })
    }
}