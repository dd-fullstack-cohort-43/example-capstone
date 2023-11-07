import Image from 'next/image'
import {SignInFormComponent} from "@/app/sign-in-form.component";

export default function() {
    return (
        <>

            <main className="hero min-h-screen py border-rounded" >
                <div className="hero-content  rounded-2xl  flex bg-neutral gap-10  border-roun flex-col md:flex-row">
                    <Image className="flex-grow" src={"/login-hero.jpg"} alt="person holding phone staring at twitter login page Photo by Akshar Dave🌻 on Unsplash" width={300} height={450}></Image>
                    <div className={""}>
                        <SignInFormComponent />
                    </div>
                </div>
            </main>
        </>

    )
}

