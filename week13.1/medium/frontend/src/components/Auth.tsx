import { type ChangeEvent, type MouseEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { signschema } from "@nikhil2211/zod-schema";
import { BACKEND_URL } from "../config";
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<signschema>({
    name: "",
    email: "",
    password: "",
  });
  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type == "signup" ? "signup" : "signin"}`,
        postInputs,
      );
      const jwt = response.data.jwt;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      console.error(e);
      alert("error while sending request");
    }
  }
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="pl-10 text-center justify-center">
        <div className="text-center text-3xl font-extrabold">
          Create an Account
        </div>
        <div className="text-slate-400">
          {type === "signin"
            ? "Dont have an Account"
            : " Already have an account?"}
          <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
            {type === "signin" ? "Sign up" : "Sign in"}
          </Link>
        </div>
        <div className="flex justify-center">
<div className="pt-4 justify-center text-center">
          {type === "signup" ? (
            <LabelledInput
              label="Name"
              placeholder="Enter Your Name"
              type="text"
              onChange={(e) => {
                setPostInputs({ ...postInputs, name: e.target.value });
              }}
            />
          ) : null}
          <LabelledInput
            label="UserName"
            placeholder="Enter Your Mail id"
            type="text"
            onChange={(e) => {
              setPostInputs({ ...postInputs, email: e.target.value });
            }}
          />
          <LabelledInput
            label="Password"
            placeholder="Enter Your Password"
            type="password"
            onChange={(e) => {
              setPostInputs({ ...postInputs, password: e.target.value });
            }}
          />
          <Button
            label={type === "signup" ? "Sign up" : "Sign in"}
            onClick={sendRequest}
          />
        </div>

        </div>
        
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({
  label,
  placeholder,
  type,
  onChange,
}: LabelledInputType) {
  return (
    <div>
      <div className="w-full max-w-sm min-w-[200px] relative mt-4">
        <label className="block mb-2 text-sm text-slate-600">{label}</label>
        <div className="relative">
          <input
            type={type}
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-3 pl-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}
interface ButtonInputType {
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

function Button({ label, onClick }: ButtonInputType) {
  return (
    <div className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">
      <button type="button" onClick={onClick}>
        {label}
      </button>
    </div>
  );
}