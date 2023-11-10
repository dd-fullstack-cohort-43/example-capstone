import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";

export function earlGreyController(request: Request, response: Response) : Response<Status> {

	console.log(request.headers)
	const tea = request.session.jwt
		return response.json({status: 200, message: null, data: tea})
}