import {z} from "zod";
export const ThreadSchema = z.object({
    threadId: z.string({required_error: 'please provide a valid threadId or null'}).uuid({message: 'please provide a valid uuid for threadId'}).nullable(),
    threadProfileId: z.string({required_error: 'please provide a valid threadProfileId'}).uuid({message: 'please provide a valid uuid for threadProfileId'}),
    threadReplyThreadId: z.string({required_error: 'please provide a valid threadReplyThreadId or null'}).uuid({message: 'please provide a valid uuid for threadReplyThreadId'}).nullable(),
    threadContent:
        z.string().max(255, {message: 'please provide a valid threadContent'}),
    threadDatetime: z.coerce.date({required_error: 'please provide a valid threadDatetime or null'}).nullable(),
    threadImageUrl:z.string({required_error: 'please provide a valid threadImageUrl or null'}).trim().url({message: 'please provide a valid URL for threadImageUrl'}).max(255, {message: 'please provide a valid threadImageUrl (max 255 characters)'}).nullable(),
})

export type Thread = z.infer<typeof ThreadSchema>