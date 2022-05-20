import type HttpStatus from '../types/HttpStatus.d'

/**
 * Send registration request to the server.
 *
 * @param runnerName Name of the runner.
 * @param runnerPhone Phone number of the runner.
 * @param sponsorName Name of the sponsor.
 * @param sponsorPhone Phone number of the sponsor.
 * @param sponsorAmount Amount of the sponsorship.
 *
 * @returns Promise that resolves when the request is sent to the status.
 */
const sendRegistration = async (
	runnerName: string,
	runnerPhone: string,
	sponsorName: string,
	sponsorPhone: string,
	sponsorAmount: number
): Promise<HttpStatus> => {
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
	const response = await fetch('/api/v1/registration', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(postData)
	})

	// Return the response.
	return {
		status: response.status,
		statusText: await response.text()
	}
}

export default sendRegistration
