"use client";
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const sizes = [
	{ label: "Small", value: "sm" },
	{ label: "Medium", value: "md" },
	{ label: "Large", value: "lg" },
	{ label: "X-Large", value: "xl" },
];

export default function Filters() {
	const [size, setSize] = useState("");
	const [price, setPrice] = useState([0.5, 5]);
	const [distance, setDistance] = useState([10]);

	const handlePriceChange = (value) => {
		setPrice(value);
	};

	const handleDistanceChange = (value) => {
		setDistance(value);
	};

	return (
		<div className="flex items-center gap-4 overflow-auto p-1 [&::-webkit-scrollbar]:hidden">
			<p className="font-semibold">Filter:</p>
			<Popover>
				<PopoverTrigger asChild>
					<Button className="w-28">{price[0] === 0.5 && price[1] === 5 ? "Price" : price[0] === 0.5 ? `Max: ${price[1]} M` : price[1] === 5 ? `Min: ${price[0]} M` : `${price[0]}M - ${price[1]}M`}</Button>
				</PopoverTrigger>
				<PopoverContent>
					<div className="mb-4 flex w-full justify-between">
						<p>Min: {price[0]} M</p>
						<p>Max: {price[1]} M</p>
					</div>
					<Slider defaultValue={price} onChange={handlePriceChange} min={0.5} max={5} step={0.1} className="w-full" />
				</PopoverContent>
			</Popover>

			<Popover>
				<PopoverTrigger>
					<Button className="w-28">{distance[0] === 10 ? "Distance" : `Max: ${distance[0]} km`}</Button>
				</PopoverTrigger>
				<PopoverContent>
					<div className="mb-4 flex w-full justify-between">
						<p>Max: {distance[0]} km</p>
					</div>
					<Slider defaultValue={distance} onChange={handleDistanceChange} max={10} step={0.1} className="w-full" />
				</PopoverContent>
			</Popover>

			<Select selected={size} onChange={(value) => setSize(value)}>
				<SelectTrigger className="w-32 shrink-0">
					<SelectValue placeholder="Sizes" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{sizes.map((size) => (
							<SelectItem key={size.value} value={size.value}>
								{size.label}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
}
