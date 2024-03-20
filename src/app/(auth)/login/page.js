import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function LoginForm() {
	return (
		<div>
			<h2 className="mb-4 text-xl font-bold">Log In</h2>
			<p className="mb-6">
				Or{" "}
				<Link href="/register" className="underline">
					sign up
				</Link>{" "}
				if you dont have an account yet.
			</p>

			<form className="flex flex-col gap-4">
				<div>
					<label>Email</label>
					<Input name="email" placeholder="Enter your email" />
				</div>
				<div>
					<label>Password</label>
					<Input name="password" type="password" placeholder="Enter your password" />
				</div>
				<Button type="submit">Log In</Button>
			</form>
		</div>
	);
}
