export interface ICreateTrackingPlanFormData {
    name: string;
    description: string
}

export interface ICreateTrackingPlan {
    name: string;
    description: string;
}

export interface ITrackingPlansItem {
    trackingId: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}