"use server"
import Image from "next/image";
import {Thread, ThreadSchema} from "@/utils/models/Thread";
import {ThreadCard} from "@/app/home/threadCard";
import {Profile, ProfileSchema} from "@/utils/models/Profile";



export default async function () {
    const {threads, profiles} = await getData()
    console.log(profiles)
    return (
        <>
            <main className="container lg:w-2/3 grid pt-5 mx-auto">
                <div className="col-span-full p-0 border border-base-content">
                    <h1 className="text-3x p-4 font-bold">Home</h1>
                    <form className={"px-4"}>
                        <div className="form-control">
                            <label className="text-lg pb-3" htmlFor="tweetContent">tweet</label>
                            <textarea className="textarea textarea-bordered" name="tweetContent" id="tweetContent"
                                      cols={30} rows={3}></textarea>
                        </div>
                        <div className="form-control">
                            <button type="submit" className="btn btn-accent">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
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
