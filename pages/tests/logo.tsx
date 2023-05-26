import React from 'react';
import styles from '@/styles/components/Logo.module.scss';

function Logo() {
	const left = (
		<path
			d="M20.499 29.92c-1.426-3.025-4.432-5.156-7.95-5.316-.14.005-.28.005-.426.005V21.37c.14 0 .286.005.426.005a9.175 9.175 0 0 0 6.118-2.697 9.204 9.204 0 0 0 2.707-6.554h3.219c0 3.335-1.296 6.467-3.654 8.825a12.464 12.464 0 0 1-2.673 2.045 12.559 12.559 0 0 1 3.842 3.392A13.93 13.93 0 0 0 20.5 29.92z"
			className={styles.logo__left}
		></path>
	);

	const right = (
		<path
			d="M23.885 19.583a13.83 13.83 0 0 0 1.604-3.552c1.474 3.161 4.679 5.36 8.39 5.36v3.219h-.029c-5.098 0-9.25 4.156-9.25 9.265h-3.214c-.01-4.669 2.557-8.743 6.355-10.884a12.485 12.485 0 0 1-3.856-3.408z"
			className={styles.logo__right}
		></path>
	);

	return (
		<div className="grid place-items-center h-screen">
			<svg className="w-10">
				{left}
				{right}
			</svg>
		</div>
	);
}

export default Logo;
