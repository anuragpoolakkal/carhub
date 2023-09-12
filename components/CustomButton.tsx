"use client";

import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
	isDisabled,
	btnType,
	containerStyles,
	textStyles,
	title,
	rightIcon,
	handleClick,
}: CustomButtonProps) => {
	return (
		<button
			disabled={isDisabled}
			type={btnType || "button"}
			onClick={handleClick}
			className={`custom-btn ${containerStyles}`}
		>
			<span className={`flex-1 ${textStyles}`}>{title}</span>
			{rightIcon && (
				<div className="relative w-6 h6">
					<Image src={rightIcon} alt="arrow_left" fill className="object-contain" />
				</div>
			)}
		</button>
	);
};
export default CustomButton;
