"use client";
import React, { FC, useState } from "react";

import Toast from "./Toast";

const JoinWaitlistForm: FC = () => {
  const [email, setEmail] = useState("");
  const [selection, setSelection] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState<string | null>(null); // New state for error message

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!selection) {
      setError("Please select an option");
      return;
    }
    setError(null);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  return (
    <div className=" p-4">
      <h1
        className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 mb-4 "
        style={{ marginBottom: "50px" }}
      >
        Join Our Waitlist
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-black  border p-2 w-full"
        />
        <select
          value={selection}
          onChange={(e) => setSelection(e.target.value)}
          className="text-black border p-2 w-full"
        >
          <option className="text-gray-500" value="" disabled>
            Select an option
          </option>
          <option value="Company">Company</option>
          <option value="Tester">Tester</option>
        </select>
        <button
          type="submit"
          className=" box-border relative w-full h-12 text-white font-semibold text-sm leading-6 text-center tracking-wide bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4
          focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-lg px-5 py-2.5 cursor-pointer transition-all duration-300 ease-in-out"
        >
          Join Waitlist
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}
      {showToast && <Toast message="Thank you for joining the waitlist!" />}
    </div>
  );
};

export default JoinWaitlistForm;
