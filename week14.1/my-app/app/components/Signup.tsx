"use client";
import { useState } from "react";
import { signup } from "@/app/actions/user";

// OLD LOGIC (kept for reference):
// import axios from "axios";
// async function fetchdata({ username, password, name }: { username: string; password: string; name: string }) {
//   const response = await axios.post("http://localhost:3000/api/user", {
//     username,
//     password
//   })
//   console.log("response is" + JSON.stringify(response.data));
//   return response.data;
// }

export default function Signupcomponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow"
        >
          <div>
            <div className="px-10">
              <div className="text-3xl font-extrabold">
                Sign Up
              </div>
            </div>

            <div className="pt-2">
              <LabelledInput
                onChange={(e) => {
                  setName(e.target.value);
                }}
                label="name"
                placeholder="harkirat"
                type="text"
              />
              <LabelledInput
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                label="Username"
                placeholder="harkirat@gmail"
                type="text"
              />
              <LabelledInput
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                label="Password"
                type="password"
                placeholder="password"
              />

              <button
                type="button"
                className="mt-8 w-full text-white bg-blue-500"
                onClick={async () => {
                  const ok = await signup(username, password);
                  console.log(ok ? "Signed up!" : "Signup failed");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({
  label,
  placeholder,
  type,
  onChange
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded"
        onChange={onChange}
      />
    </div>
  );
}
// postgresql://neondb_owner:npg_m7bV0UYxeNWG@ep-plain-breeze-axkzksqb-pooler.c-4.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require