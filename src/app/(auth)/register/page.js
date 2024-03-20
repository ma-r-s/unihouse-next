"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
export default function LoginForm() {
	const [date, setDate] = useState();
	return (
		<div>
			<h2 className="mb-4 text-xl font-bold">Sign Up</h2>
			<p className="mb-6">
				Or{" "}
				<Link href="/login" className="underline">
					log in
				</Link>{" "}
				if you alredy have an account.
			</p>
			<form className="flex flex-col gap-4">
				<div>
					<label>Name</label>
					<Input name="name" placeholder="Enter your name" />
				</div>
				<div>
					<label>Email</label>
					<Input name="email" placeholder="Enter your email" />
				</div>
				<div>
					<label>Username</label>
					<Input name="username" placeholder="Choose a unique username" />
				</div>

				<Popover>
					<label>Date of Birth</label>

					<PopoverTrigger asChild>
						<Button variant={"outline"} className={cn(" justify-start text-left font-normal w-full", !date && "text-muted-foreground")}>
							{date ? format(date, "PPP") : <span>Pick a date</span>}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0" align="start">
						<Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
					</PopoverContent>
				</Popover>
				<div>
					<label>Password</label>
					<Input name="password" type="password" placeholder="Enter your password" />
				</div>
				<div>
					<label>Confirm Password</label>
					<Input name="confirmpassword" type="password" placeholder="Enter your password again" />
				</div>
				<Button type="submit">Sign Up</Button>
			</form>
		</div>
	);
}
