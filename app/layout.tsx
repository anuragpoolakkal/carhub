import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "CarHub",
	description: "Car Showcase App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" type="image/x-icon" href="/model-icon.png" sizes="any" />
			</head>
			<body className="relative">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
