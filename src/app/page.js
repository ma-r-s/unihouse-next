import { redirect } from "next/navigation";

export default async function Profile({ params }) {
	redirect("/listing");
	return { props: {} };
}
