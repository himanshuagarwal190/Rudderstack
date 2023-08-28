import { NextRequest, NextResponse } from "next/server";
import { createTrackingPlan, getTrackingPlan } from "../../../../dbQueries";
import { ICreateTrackingPlan } from "../../../../interfaces";

export async function GET(req: NextRequest){
    const allTrackingPlans = await getTrackingPlan()
    let json_response = {
        message: "success",
        trackingPlans: allTrackingPlans
      };
    return NextResponse.json(json_response)
}

export async function POST(req: NextRequest){
  try {
    const body: ICreateTrackingPlan  = await req.json()
  
    await createTrackingPlan({ 
      name: body.name,
      description: body.description,
    })
    let json_response = {
        message: "success",
        success: true
      };
    return NextResponse.json(json_response)
  } catch (error: any) {
    return NextResponse.json({
      message: error.message.includes("Unique constraint failed on the fields") ? "There is already a tracking name exists. Please choose another name" : error.message
    }, {
      status: 400
    })
  }
  
}