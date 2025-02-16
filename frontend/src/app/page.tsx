import Image from 'next/image'
import {SignInFormComponent} from "@/app/sign-in-form.component";

export default function() {
    return (
        <>

            <main className="hero min-h-screen py border-rounded" >
                <h1>If i go to x.com and I get redirected to twitter.com its still twitter.</h1>
                <div className="hero-content border-2 rounded-2xl border-neutral-content flex bg-neutral gap-10  border-roun flex-col md:flex-row">
                    <Image className="" src={"/login-hero.jpg"} alt="person holding phone staring at twitter login page Photo by Akshar Dave🌻 on Unsplash" priority={true} width={300} height={450}></Image>
                    <div className={""}>
                        <SignInFormComponent />
                    </div>
                </div>
            </main>
        </>

    )
}
