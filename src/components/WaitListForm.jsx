import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function WaitlistForm() {
  const [state, handleSubmit] = useForm("mzzgvbkg");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full flex flex-col p-4 items-center "
    >
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your email"
        className="bg-orange-200 p-3 rounded-md w-full outline-none"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="mt-5 py-4 px-6 bg-orange-500 rounded-full text-xl font-bold text-white "
      >
        Join Waitlist
      </button>
    </form>
  );
}

export default WaitlistForm;
