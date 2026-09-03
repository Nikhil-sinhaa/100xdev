"use client"
export default function Signincomponent() {
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
                Sign in
              </div>
            </div>

            <div className="pt-2">
              <LabelledInput
                label="Username"
                placeholder="harkirat@gmail"
                type="text"
              />
              <LabelledInput
                label="Password"
                type="password"
                placeholder="password"
              />

              <button
                type="button"
                className="mt-8 w-full text-white bg-blue-500"
              >
                Sign in
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
}

function LabelledInput({
  label,
  placeholder,
  type,
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
      />
    </div>
  );
}