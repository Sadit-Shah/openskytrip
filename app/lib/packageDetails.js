import db from './db';
import Packages from '../models/packages'



export const getPackages = async () => {
    try {
        await db.connect()
        const result = await Packages.find({});
        return {packages:result}
    } catch (error) {
        return (error)
    }
}