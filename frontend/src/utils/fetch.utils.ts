import {Status} from "@/utils/models/Status";

export function parseFetchResponse(message: string): (response: Response) => Promise<Status> {
    return function (response: Response) {
        if (response.status === 200 || response.status === 304) {
            console.log(response.headers)
            return response.json()
        }
        throw new Error(message)
    }
}


