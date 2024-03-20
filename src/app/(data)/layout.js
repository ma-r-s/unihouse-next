import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Unihouse from "@/components/unihouse";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
export default function DataLayout({ children }) {
	return (
		<>
			<div className="container py-10">
				<div className="mb-6 flex gap-4">
					<Unihouse />
					<div className="flex-grow"></div>
					<Button className="hidden sm:block" variant="outline" asChild>
						<Link href="/login">Login</Link>
					</Button>
					<Button className="hidden sm:block" variant="outline" asChild>
						<Link href="/register">Register</Link>
					</Button>
					<ModeToggle />
					<DropdownMenu>
						<DropdownMenuTrigger>
							<Button className="sm:hidden" variant="ghost"></Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-56">
							<DropdownMenuItem href="/login">Login</DropdownMenuItem>
							<DropdownMenuItem href="/register">Register</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
				{children}
			</div>
		</>
	);
}
