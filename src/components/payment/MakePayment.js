import 'dotenv/config';
import React from 'react';
import Button from '@material-ui/core/Button';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
const { REACT_APP_FLUTTERWAVE_PUBLIC_KEY } = process.env;

const MakePayment = (props) => {
	const config = {
		public_key: `${REACT_APP_FLUTTERWAVE_PUBLIC_KEY}`,
		tx_ref: Date.now(),
		amount: props.totalPrice,
		currency: 'RWF',
		payment_options: 'card,mobilemoney',
		customer: {
			email: props.email,
			phonenumber: props.phonenumber,
			name: props.names,
		},
		customizations: {
			title: 'Make your payment at Car rent',
			description: 'Payment for items in cart',
			logo:
				'https://res.cloudinary.com/dfsai53mw/image/upload/v1700398863/WEBS/godiscover/Godiscover_ystvkb.png',
		},
	};

	const handleFlutterPayment = useFlutterwave(config);

	return (
		<div className='App'>
			<Button
				color='primary'
				size='medium'
				variant='contained'
				style={{
					width: '100%',
				}}
				onClick={() => {
					handleFlutterPayment({
						callback: response => {
							console.log(response);
							closePaymentModal(); // this will close the modal programmatically
						},
						onClose: () => {},
					});
				}}
			>
				Pay Now
			</Button>
		</div>
	);
};

export default MakePayment;
