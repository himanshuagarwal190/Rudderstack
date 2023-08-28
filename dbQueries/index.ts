import prisma from '../lib/prisma'
import { ICreateTrackingPlan, ITrackingPlansItem } from '../interfaces'

export async function createTrackingPlan(data: ICreateTrackingPlan): Promise<void>{
    try {
        await prisma.$connect()
        await prisma.trackingPlan.create({ data: {...data, createdAt: new Date(), updatedAt: new Date() }})
    } finally {
        await prisma.$disconnect();
    }
    
}


export async function getTrackingPlan(): Promise<Array<ITrackingPlansItem>>{
    try {
        await prisma.$connect()
        const allTrackingPlans: Array<ITrackingPlansItem> = await prisma.trackingPlan.findMany()
        return allTrackingPlans
    } finally {
        await prisma.$disconnect();
    }
}
