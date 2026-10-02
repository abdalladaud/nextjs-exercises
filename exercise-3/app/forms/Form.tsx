"use client";

import { useActionState } from "react";
import { submitForm } from "../actions/formActions";

const initialState = {
  success: false,
  message: "",
};

export default function Form() {
  const [state, formAction, isPending] = useActionState(
    submitForm,
    initialState
  );

  return (
    <form
      action={formAction}
      className="bg-white p-8 rounded-2xl shadow-lg space-y-5"
    >
      {/* First Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          First Name
        </label>

        <input
          type="text"
          name="firstName"
          required
          placeholder="Enter your first name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Last Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Last Name
        </label>

        <input
          type="text"
          name="lastName"
          required
          placeholder="Enter your last name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>

        <input
          type="email"
          name="email"
          required
          placeholder="example@gmail.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>

        <input
          type="password"
          name="password"
          required
          placeholder="Minimum 6 characters"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
      >
        {isPending ? "Submitting..." : "Submit"}
      </button>

      {/* Message */}
      {state.message && (
        <p
          className={`text-center font-medium ${
            state.success ? "text-green-600" : "text-red-600"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}