'use client'

import {Thread} from "@/utils/models/Thread";
import {Profile} from "@/utils/models/Profile";
import Image from "next/image";

type ThreadCardProps = {
    thread: Thread,
    profile: Profile
}

export function ThreadCard(props: ThreadCardProps) {
    const {thread, profile} = props
    return (
        <>
            <div className="col-span-full border border-base-content">
                <div className="card bg-neutral rounded-none border-white text-neutral-content">
                    <div className="card-body">
                        <div className="card-title">
                            <ProfileAvatarImage profileImageUrl={profile.profileImageUrl}/>
                            <span className='text-lg'>{profile.profileName}</span>

                        </div>
                        {thread.threadContent}
                        <div className="card-actions">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

type ProfileAvatarImageProps = {
    profileImageUrl: string|null
}
function ProfileAvatarImage (props: ProfileAvatarImageProps) {
    const {profileImageUrl} = props
    if (profileImageUrl) {
        return (
            <img className={'mask mask-circle'} src={profileImageUrl} alt="profile image" width={50} height={50}/>
        )
    } else {
        return <></>
    }

}