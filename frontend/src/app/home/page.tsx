"use server"
import Image from "next/image";
import {Thread, ThreadSchema} from "@/utils/models/Thread";
import {ThreadCard} from "@/app/home/thread-card";
import {Profile, ProfileSchema} from "@/utils/models/Profile";
import {ThreadForm} from "@/app/home/thread-form";
import {fetchSession, getSession} from "@/utils/fetchSession";



export default async function () {
    const {threads, profiles} = await getData()

    const session = await getSession()

    console.log("session in home", session)

    return (
        <>
            <main className="container lg:w-2/3 grid pt-5 mx-auto">
                    <ThreadForm session={session} />
                <div className="col-span-full border border-base-content">
                    <div className="card bg-neutral rounded-none border-white text-neutral-content">
                        {threads.map(thread => <ThreadCard key={thread.threadId} profile={profiles[thread.threadProfileId]} thread={thread}/>)}
                    </div>
                </div>
            </main>
        </>
    )
}

async function getData():Promise<{threads: Thread[], profiles:{[index:string]: Profile}}> {
    const result = await fetch(`${process.env.REST_API_URL}/apis/thread`)
        .then(response=> { console.log(response.status)
            if (response.status === 200 || response.status === 304) {
                return response.json()
            }
            throw new Error("retrieving data failed")
        }).catch(error => {console.error(error)})
    const threads =ThreadSchema.array().parse(result?.data)

    const profiles: {[index:string]: Profile} = {}

    //{"9d23b0c0-3d60-420c-9785-c3a077add0cd": Profile}

    for(let thread of threads) {
        const result = await fetch(`${process.env.REST_API_URL}/apis/profile/${thread.threadProfileId}`) .then(response=> { console.log(response.status)
            if (response.status === 200 || response.status === 304) {
                return response.json()
            }
            throw new Error("retrieving data failed")
        }).catch(error => {console.error(error)})
        const profile = ProfileSchema.parse(result?.data)
        profiles[thread.threadProfileId] = profile
    }


    return {threads, profiles}
}
