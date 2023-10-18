import db from '../../../lib/db'
import Packages from '../../../models/packages'
import { revalidatePath } from 'next/cache';


export async function GET(request, context) {
    const { params } = context;
    try {
        await db.connect()
        const TourItinerary = await Packages.findOne({ _id: params.id });
        const path = request.nextUrl.searchParams.get('path') || '/'
        revalidatePath(path)
        return new Response(JSON.stringify(TourItinerary), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}