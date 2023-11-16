import {Request, Response,  Router} from 'express'
import {isSessionActive} from "../../utils/controllers/isLoggedIn.controller";
import {earlGreyController} from "./earl-grey.controller";

const basePath = '/apis/earl-grey/'


const router = Router()

router.route('/')
	.get(earlGreyController)

export const earlGreyRoute = { basePath, router }
