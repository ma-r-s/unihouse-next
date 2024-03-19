"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Filters from "./Filters";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://uni-next.pockethost.io");
export default function Page() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const record = await pb.collection("posts").getList();
				setPosts(record.items);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	const getImageURL = (collectionId, recordId, fileName) => {
		return `https://uni-next.pockethost.io/api/files/${collectionId}/${recordId}/${fileName}`;
	};

	return (
		<>
			<Filters />
			<Separator className="my-6" />

			<div className="grid w-full grid-cols-1 justify-between gap-4 px-6 md:grid-cols-2 xl:grid-cols-3">
				{posts && posts.length > 0 ? (
					posts.map((post) => (
						<Card key={post.id} className="grow overflow-hidden">
							<CardContent>
								<img src={getImageURL(post.collectionId, post.id, post.pictures[0])} alt={post.name} className="h-60 w-full overflow-hidden object-cover" />
							</CardContent>
							<CardHeader>
								<CardTitle>{post.name}</CardTitle>
								<div className="flex justify-between py-2">
									{post.price.toLocaleString("en-US", { style: "currency", currency: "COP" })}
									<Badge>{post.size}</Badge>
								</div>
								<CardDescription className="line-clamp-3 text-pretty">{post.description}</CardDescription>
							</CardHeader>
						</Card>
					))
				) : (
					<p>No posts found.</p>
				)}
			</div>
		</>
	);
}
