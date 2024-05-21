// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@nextui-org/button";

function ContactForm() {
	const [state, handleSubmit] = useForm("xvonnjkj");
	if (state.succeeded) {
		return <p>Thanks reaching out!</p>;
	}
	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 ">
			<label htmlFor="email">Email Address</label>
			<input id="email" type="email" name="email" />
			<ValidationError
				prefix="Email"
				field="email"
				errors={state.errors}
			/>
			<textarea id="message" name="message" />
			<ValidationError
				prefix="Message"
				field="message"
				errors={state.errors}
			/>
			<Button
				type="submit"
				disabled={state.submitting}
				className="text-sm montserrat-bold text-sand bg-lilac tracking-wide"
			>
				Submit
			</Button>
		</form>
	);
}

export default ContactForm;
