export default function TrackingPlan({ openModal, setOpenModal, setTrackingPlans }: { openModal: boolean; setOpenModal: Function, setTrackingPlans: Function }) {
	async function onSubmit(formData: FormData) {
		try {
			const name = formData.get("name");
			const description = formData.get("description");
			if (typeof name !== "string" || typeof description !== "string" || name === "" || description === "")
				throw new Error("Enter Correct values");
			const response = await fetch('/api/trackingPlan', {
				method: "POST",
				body: JSON.stringify({name, description})
			})
			const json = await response.json()
			if(!json.success) alert(json.message)
			else setTrackingPlans()
		} catch (error: any) {
			alert(error.message)
		}
		
	}

	async function onClose(){
		setOpenModal(false)
	}

	return (
		<div className="w-full h-300px">
			<div className="w-full flex justify-end">
				<div onClick={onClose} className="mr-15px mt-1 text-lg cursor-pointer">
					X
				</div>
			</div>
			<form action={onSubmit} className="trackingPlanForm">
				<div className="trackingFormItem">
					<p className="font-bold">Name: </p>
					<input type="text" name="name" id="name" className="trackingPlanInput" />
				</div>

				<div className="trackingFormItem">
					<p className="font-bold">Description: </p>
					<input type="text" name="description" id="description" className="trackingPlanInput" />
				</div>
				<div className="mr-48px flex justify-end space-x-4">
					<button className="button" onClick={onClose}>
						Cancel
					</button>
					<button type="submit" className="button">
						Save
					</button>
				</div>
			</form>
		</div>
	);
}
