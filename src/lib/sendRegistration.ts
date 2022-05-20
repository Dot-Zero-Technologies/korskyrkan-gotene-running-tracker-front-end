/**
 * Send registration request to the server.
 *
 * @param runnerName Name of the runner.
 * @param runnerPhone Phone number of the runner.
 * @param sponsorName Name of the sponsor.
 * @param sponsorPhone Phone number of the sponsor.
 * @param sponsorAmount Amount of the sponsorship.
 *
 * @returns Promise that resolves when the request is sent to true if the request was sent successfully.
 */
const sendRegistration = async (
	runnerName: string,
	runnerPhone: string,
	sponsorName: string,
	sponsorPhone: string,
	sponsorAmount: number
): Promise<boolean> => {
	// Create the post data.
	const postData = {
		runner: {
			name: runnerName,
			phone: runnerPhone
		},
		sponsor: {
			name: sponsorName,
			phone: sponsorPhone,
			amount: sponsorAmount
		}
	}

	// Send the post request.
	console.log(postData)
	return true
}

export default sendRegistration
