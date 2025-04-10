import { useEffect, useState } from "react";


export default function ProfilePage() {
const [profile,setProfile] = useState({})
useEffect(()=>{
    (async()=>{
        try {
            const res = await fetch("http://localhost:8201/users/get-current-user",{method:"GET",credentials:"include"})
            const response = await res.json();
            setProfile(response)
        } catch (error) {
            console.log("user profile not found",error)
        }
    })();
},[])
{console.log(profile)}
  return (
    <div className="w-full h-screen ">
      <div className="w-full h-screen p-20 ">
        <div className="w-full h-[50vh]">
          <section className="w-full h-full border-2">
            {/* cover iamge */}
            <img src={profile?.data?.coverImage} alt="" className="w-full h-full object-cover" />
          </section>
          <section className="w-40 h-40 bg-red-600 rounded-full relative left-5 bottom-28 border-2">
            {/* profile-image */}
            <img src={profile?.data?.avatar} alt="" className="w-full h-full object-cover rounded-full" />
          </section>
        </div>
      </div>
    </div>
  );
}
