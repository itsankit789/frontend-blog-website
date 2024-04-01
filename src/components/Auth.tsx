import { SignupInputType } from "@ankityadav0001/blog-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const Navigate = useNavigate();
  const [postInputs, setpostInputs] = useState<SignupInputType>({
    name: "",
    email: "",
    password: "",
  });

  async function sendRequests() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      Navigate("/Blogs");
    } catch (e) {
      //alert user to signup failed try again
    }
  }
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-3xl font-extrablod ">Create an account</div>
            <div className="text-slate-400">
              {type === "signin"
                ? "Don't have an account"
                : "Already have an account"}
              <Link
                className="pl-2 underline"
                to={type === "signin" ? "/signup" : "/signin"}
              >
                {type === "signin" ? "/signup" : "/signin"}
              </Link>
            </div>
            <div className="pt-8">
              {type === "signup" ? (
                <LabelledInputs
                  label="Name"
                  placeholder="Jhon sinu"
                  onChange={(e) => {
                    setpostInputs({
                      ...postInputs,
                      name: e.target.value,
                    });
                  }}
                />
              ) : null}
              <LabelledInputs
                label="Email"
                placeholder="xyz1233@gmail.com"
                onChange={(e) => {
                  setpostInputs({
                    ...postInputs,
                    email: e.target.value,
                  });
                }}
              />{" "}
              <LabelledInputs
                label="Password"
                type={"password"}
                placeholder="123456789"
                onChange={(e) => {
                  setpostInputs({
                    ...postInputs,
                    password: e.target.value,
                  });
                }}
              />
              <button
                onClick={sendRequests}
                type="button"
                className=" mt-8 w-full  text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                {type === "signup" ? "sign up" : "sign in"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInputs({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-black pt-2">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
}
