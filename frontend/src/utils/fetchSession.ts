import {Profile, ProfileSchema} from "@/utils/models/Profile";
import {cookies} from "next/headers";
import {jwtDecode} from "jwt-decode";

export type Session = {
	profile: Profile,
	authorization: string
	exp: number
}

export async function getSession(): Promise<Session> {
	const result = fetch(`/apis/earl-grey`, {next: {revalidate: 0}}).then(response => {
		response.json()
	})
	console.log("result", result)
}


export function setSession(jwtToken: string) : Session | undefined {
	try {
		const parsedJwtToken = jwtDecode(jwtToken) as any

			return {
				profile: ProfileSchema.parse(parsedJwtToken.auth),
				authorization: jwtToken,
				exp: parsedJwtToken.exp
			}


	} catch (error) {

	return undefined
	}
}
