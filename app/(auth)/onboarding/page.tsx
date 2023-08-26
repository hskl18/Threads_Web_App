import AccountProfile from "@/components/forms/AccountProfile"
import { currentUser } from "@clerk/nextjs"

async function page() {
    const user = await currentUser()
    const userInfor ={

    }
    const userData ={
        id: user?.id,
        objectId: userInfor?.id,
        username: userInfor?.username || user?.username,
        name: userInfor?.name || user?.firstName || "",
        bio: userInfor?.bio || "",
        image: userInfor?.image || user?.imageUrl,

    }
    return (
        <main className=" mx-auto flex max-w-3xl flex-col justify-start py-20 px-10">
            <h1 className=" head-text ">onboarding</h1>

            <p className=" mt-3 text-base-regular text-light-2">
                compelete your profile to use threads
            </p>

            <section className="mt-9 bg-dark-2 p-10 ">
                <AccountProfile 
                    user = {userData}
                    btnTitle = "Continue"
                />
            </section>
        </main>
    )
}
export default page