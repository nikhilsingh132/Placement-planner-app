import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import success from "../assets/success.jpeg";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(false);
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `https://placement-planner-app.onrender.com/${param.id}/verify/${param.token}`;
        console.log("hiiii")
        const { data } = await axios.get(url);
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <>
      {validUrl ? (
        <div className="w-[100vw] h-[100vh] flex justify-center">
         <div className="flex items-center justify-center flex-col">
          <img src={success} alt="success_img" className="w-[30rem]" />
          <h1 className="text-center text-[1.5rem]">Email verified successfully</h1>
          
          <Link to="/">
            <button className="p-[12px] w-[25rem] bg-[#3bb19b] rounded-lg font-bold text-[1rem] cursor-pointer">Login</button>
          </Link>
          </div>
        </div>
      ) : (
        <h1>404 Page Not Found!</h1>
      )}
    </>
  );
};

export default EmailVerify;