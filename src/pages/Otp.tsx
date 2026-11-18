import { useRef, useState } from 'react';


const OTP_LENGTH = 4;


export default function Otp() {

	const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
	const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
	const isComplete = otp.every(Boolean);

	const focusInput = (index: number) => {
		inputRefs.current[index]?.focus();
	};

	const updateDigit = (index: number, value: string) => {
		const digit = value.replace(/\D/g, '').slice(-1);
		
		setOtp((prevOtp) => {
			const newOtp = [...prevOtp];
			newOtp[index] = digit;
			return newOtp;
		});

		if (digit && index < OTP_LENGTH - 1) {
			focusInput(index + 1);
		}
	};

	const handleKeyDown = (
		index: number,
		event: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (event.key === 'Backspace' && !otp[index] && index > 0) {
			focusInput(index - 1);
		}
	};

	const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
		event.preventDefault();
		const pastedOtp = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH);

		if (!pastedOtp) {
			return;
		}

		setOtp([...pastedOtp.padEnd(OTP_LENGTH, '').split('')]);
		focusInput(Math.min(pastedOtp.length, OTP_LENGTH - 1));
	};

	const resetOtp = () => {
		setOtp(Array(OTP_LENGTH).fill(''));
		focusInput(0);
	};

	return (
		<div
			style={{
				minHeight: 'calc(100dvh - 100px)',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '24px',
				textAlign: 'center'
			}}
		>
			<div>
				<h1>Enter verification code</h1>
				<p>Enter the 4-digit code sent to you.</p>
			</div>

			<div style={{ display: 'flex', gap: '12px' }}>
				{otp.map((digit, index) => (
					<input
						key={index}
						ref={(input) => { inputRefs.current[index] = input; }}
						value={digit}
						onChange={(event) => updateDigit(index, event.target.value)}
						onKeyDown={(event) => handleKeyDown(index, event)}
						onPaste={handlePaste}
						inputMode="numeric"
						maxLength={1}
						aria-label={`Digit ${index + 1}`}
						style={{
							width: '48px',
							height: '56px',
							border: '1px solid #999',
							borderRadius: '6px',
							textAlign: 'center',
							fontSize: '2rem'
						}}
					/>
				))}
			</div>

			<p aria-live="polite" style={{ minHeight: '24px' }}>
				{isComplete ? 'Code entered successfully.' : ' '}
			</p>

			<button type="button" onClick={resetOtp}>
				Clear code
			</button>
		</div>
	);
}
