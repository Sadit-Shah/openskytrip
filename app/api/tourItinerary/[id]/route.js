import db from '../../../lib/db'
import tourItinerary from '../../../models/tourItinerary'
import { revalidatePath } from 'next/cache';


export async function GET(request, context) {
    const { params } = context;
    try {
        await db.connect()
        const Itinerary = await tourItinerary.findOne({ package_id: params.id });
        const path = request.nextUrl.searchParams.get('path') || '/'
        revalidatePath(path)
        return new Response(JSON.stringify(Itinerary), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}
export async function POST(request, context) {
    const itinerary=await request.json();
    try {
        await db.connect()
        const newtourItinerary = new tourItinerary(itinerary)
            await newtourItinerary.save();
        return new Response(JSON.stringify({message:'Saved'}), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}