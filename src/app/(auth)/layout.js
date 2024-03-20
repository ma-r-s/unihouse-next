import Unihouse from "@/components/unihouse";

export default function AuthLayout({ children }) {
	return (
		<div className="flex h-screen">
			<div className=" w-full shrink-0 overflow-auto p-10 sm:w-1/4 sm:min-w-[28rem]">
				<div className="mb-6 flex justify-between overflow-auto">
					<Unihouse />
				</div>
				{children}
			</div>
			<img alt="The project logo" src={"/eje_ambiental.jpg"} className="h-screen w-full overflow-hidden object-cover" />
		</div>
	);
}
