export async function GET (request: Request) {

	const response = await fetch(`${process.env.REST_API_URL}/apis/earl-grey`, {next: {
revalidate: 0
	},credentials: "include"})

	console.log("response", response)
	return response
}