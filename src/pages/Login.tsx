import { Icon } from "@iconify/react";
import React, { useState } from "react";

type Props = {};

export default function Login({}: Props) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async() =>{
try {
    
} catch (error) {
    console.log(error)
}
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="form-container mdm:w-1/2 w-full flex flex-col mx-auto">
        <div className="header bg-brand-blue p-6 text-[#FFF] font-bold text-3xl">
          <h1>Admin Header</h1>
        </div>
        <div className="form-body p-3  mdm:w-2/3 w-full mx-auto h-[560px] flex justify-center items-center">
          <form action="" className="flex flex-col gap-4 w-full">
            <div className="form-group flex flex-col gap-1">
              <label htmlFor="email">EMAIL</label>
              <input
                className="input p-3 border border-[#51515183] rounded-md focus:border-brand-blue/60"
                type="email"
                name="email"
                id="email"
                placeholder=" Enter a valid email"
                required
              />
            </div>

            <div className="form-group flex flex-col gap-1 relative">
              <label htmlFor="password">PASSWORD</label>
              <div className="relative flex w-full">
                <input
                  className="input p-3 border border-[#51515183] rounded-md focus:border-brand-blue/60 w-full"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder=" Enter a valid password"
                  required
                />
                <div className="absolute top-1/2 right-2 -translate-y-1/2">
                  {
                    <Icon
                    className="cursor-pointer"
                      icon={
                        showPassword ? "mdi:eye-off-outline" : "mdi:eye-outline"
                      }
                      width="16"
                      height="16"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  }
                </div>
              </div>
            </div>
            <button className="w-full text-[#FFF] disabled:bg-[#51515183] rounded-md p-3 bg-brand-blue">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
