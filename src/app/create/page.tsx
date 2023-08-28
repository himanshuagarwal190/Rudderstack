"use client"
import { useEffect, useState } from "react";
import Header from "../../../pages/components/Header";
import { Modal } from "flowbite-react"
import TrackingPlan from "../../../pages/components/TrackingPlan";

async function onSubmit(data: any){
    console.log(data.get('jjj'))
}

async function getTrackingPlans() {
	const response = await fetch("/api/trackingPlan")
	const json = await response.json()
	if(json.message != "success") throw new Error('Error fetching tracking plans')
	return json.trackingPlans
}


export default function Create(){
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [trackingPlansDropDown, setTrackingPlansDropDown] = useState([])
	useEffect(() => {
		setTrackingPlans()
	}, [])

	async function setTrackingPlans(){
        try{
            const response = await getTrackingPlans()
		    setTrackingPlansDropDown(response)
        } catch(error: any){
            alert(error.message)
        }
		
	}
    return (
        <div className="w-full">
            <Header />
            <form action={onSubmit} className="flex justify-center space-x-10 mt-12">
                <p>Name:</p>
                <select name="trackingPlans" id="trackingPlans" className="w-64">
                    {trackingPlansDropDown.map((data: {name: string, trackingId: number}) => (
                        <option key={data.trackingId} value={data.name}>{data.name}</option>
                    ))}
                </select>
                <button onClick={() => setOpenModal(true)}> + </button>
            </form>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <TrackingPlan openModal={openModal} setOpenModal={setOpenModal} setTrackingPlans={setTrackingPlans}/>
            </Modal>
        </div>
    )
}