import Link from "next/link";

export default function Unihouse() {
	return (
		<Link className="flex gap-2" href="/">
			<h1 className="text-2xl font-bold">Unihouse</h1>
			<Logo className="h-8 w-8 shrink-0" />
		</Link>
	);
}

export function Logo(props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
			<path fill="currentColor" d="M23 5v14q0 .825-.587 1.413T21 21h-3q-.425 0-.712-.288T17 20q0-.425.288-.712T18 19h3V5h-9v.5q0 .425-.288.713T11 6.5q-.425 0-.712-.288T10 5.5v-.55q0-.8.575-1.375T11.95 3H21q.825 0 1.413.588T23 5M1 12.025q0-.5.225-.925t.625-.7l5-3.575q.275-.2.563-.288T8 6.45q.3 0 .588.088t.562.287l5 3.575q.4.275.625.7t.225.925V19q0 .825-.587 1.413T13 21h-2q-.825 0-1.412-.587T9 19v-3H7v3q0 .825-.587 1.413T5 21H3q-.825 0-1.412-.587T1 19zM3 12v7h2v-3q0-.825.588-1.412T7 14h2q.825 0 1.413.588T11 16v3h2v-7L8 8.45zm8 7v-5H5v5v-5h6zm6.5-10h1q.2 0 .35-.15T19 8.5v-1q0-.2-.15-.35T18.5 7h-1q-.2 0-.35.15T17 7.5v1q0 .2.15.35t.35.15m0 4h1q.2 0 .35-.15t.15-.35v-1q0-.2-.15-.35T18.5 11h-1q-.2 0-.35.15t-.15.35v1q0 .2.15.35t.35.15m0 4h1q.2 0 .35-.15t.15-.35v-1q0-.2-.15-.35T18.5 15h-1q-.2 0-.35.15t-.15.35v1q0 .2.15.35t.35.15"></path>
		</svg>
	);
}
