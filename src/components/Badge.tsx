// src/components/ui/badge.tsx
import React from 'react';
import clsx from 'clsx';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
	children: React.ReactNode;
}

export const Badge = ({ className = '', ...props }: BadgeProps) => {
	return (
		<div
			className={clsx(
				'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium',
				className
			)}
			{...props}
		/>
	);
};
