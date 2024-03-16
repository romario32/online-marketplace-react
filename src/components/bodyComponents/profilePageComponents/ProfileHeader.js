import React from 'react'

const ProfileHeader = () => {
  return (
    <div className="h-screen">
        <div className="h-full m-5">
            <div className="relative h-52 w-full rounded-lg bg-slate-300">
                <div className="absolute profileImage sm:left-5 -bottom-16  bg-slate-400 rounded-full h-40 w-40"></div>
                <div className="flex profileInformation ml-auto bg-slate-50 opacity-60 w-min h-full text-right p-5">
                    <div className="block w-1/2 ml-auto border text-right space-y-1">
                      <p className="text-lg font-bold">Rohan Store</p>
                      <p className="text-sm">Email:rohanbedward@gmail.com</p>
                      <p className="text-sm">Phone Number:1(876)-328-6920</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileHeader