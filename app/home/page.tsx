// pages/profile.tsx
"use client"
import { useSession, signOut, signIn } from "next-auth/react";
import { useEffect } from "react";
import { Divider } from "antd";
import Logo from "../images/logo.svg";
import MSLogo from "../images/microsoft.png";
import Image from "next/image";
import styled from "styled-components";

const CustomButton = styled.button`

  color: white;
  text-shadow: 0 1px 0 #000;
  
  --border-angle: 0turn; // For animation.
  --main-bg: conic-gradient(
      from var(--border-angle),
      #213,
      #112 5%,
      #112 60%,
      #213 95%
    );
  
  border: solid 5px transparent;
  border-radius: 2em;
  --gradient-border: conic-gradient(from var(--border-angle), transparent 25%, #e7cb8a2b, #ffb400 99%, transparent);
  
  background: 
    // padding-box clip this background in to the overall element except the border.
    var(--main-bg) padding-box,
    // border-box extends this background to the border space
    var(--gradient-border) border-box, 
    // Duplicate main background to fill in behind the gradient border. You can remove this if you want the border to extend "outside" the box background.
    var(--main-bg) border-box;
  
  background-position: center center;

  animation: bg-spin 3s linear infinite;
  @keyframes bg-spin {
    to {
      --border-angle: 1turn;
    }
  }

  /* &:hover {
    animation-play-state: paused;
  } */

  @property --border-angle {
    syntax: "<angle>";
    inherits: true;
    initial-value: 0turn;
  }
`;

const HomePage = () => {
  const { data: session, status } = useSession();
  const handleLogout = () => {
    signOut({ callbackUrl: "/home", redirect: true }); // Redirects to the home page after logout
  };

  useEffect(() => {
    if (status) {
      console.log(status);
    }
    if (session) {
      console.log(session);
    }
  }, [status, session]);


  if (session) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="p-6 max-w-3xl mx-auto">
          <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-2">Welcome, {session?.user?.name}!</h2>
            <p className="text-gray-600">Email: {session?.user?.email}</p>
            {/* Add other user data here */}
            <button
              onClick={handleLogout}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Log Off
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 space-y-6 bg-white rounded-xl shadow-md">

        <form>
          <section className="flex flex-col justify-center items-center content-center">
            <div>
              <Image src={Logo} alt="Teccelerates" />
            </div>
          </section>
          <h1 className="text-[#ffb400] text-2xl font-semibold text-center">User Portal</h1>
          <Divider />
          <CustomButton
            type="button"
            onClick={() => signIn("azure-ad", { callbackUrl: process.env.NEXTAUTH_URL })}
            className="flex flex-row items-center justify-center gap-2 w-full p-2 mt-4 bg-[#ffb3006a] text-white rounded-md"
          >
            <Image src={MSLogo} alt="" height={40} />
            <div className="text-white">Sign In with Microsoft Account</div>
          </CustomButton>
        </form>
      </div>
    </main>
  );
  

};

export default HomePage;