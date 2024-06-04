// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@nextui-org/button";
import { Star } from "./icons";
import { motion } from "framer-motion";

function ContactForm() {
	const [state, handleSubmit] = useForm("xvonnjkj");
	if (state.succeeded) {
		return (
			<div className="flex gap-3 items-center justify-center text-xl font-Kodchasan text-sky w-full h-40">
				Form sent! Thanks for reaching out.{" "}
				<motion.div
					animate={{
						scale: [1, 1.5, 1.5, 1, 1],
						rotate: [0, 0, 270, 270, 0],
					}}
					transition={{
						duration: 2,
						ease: "easeInOut",
						repeat: 2,
						repeatDelay: 2,
					}}
				>
					<Star fill="sky" width={"15px"} />
				</motion.div>
			</div>
		);
	}
	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6">
			<label htmlFor="email" className="text-plum montserrat-bold">
				Email Address
				<br />
			</label>
			<input
				id="email"
				type="email"
				name="email"
				className="h-10 pl-2 bg-white"
			/>
			<ValidationError
				prefix="Email"
				field="email"
				errors={state.errors}
			/>

			<label htmlFor="message" className="text-plum montserrat-bold">
				Message
				<br />
			</label>
			<textarea id="message" name="message" className="h-40 p-2" />

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
