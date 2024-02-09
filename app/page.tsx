"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/home");
  }, [router]);
  return <></>
};

export default HomePage;