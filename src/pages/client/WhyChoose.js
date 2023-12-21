import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import ClientLayout from '../../layouts/ClientLayout';

const useStyles = makeStyles(theme => ({
	cardGrid: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(2),
		marginBottom: 40,
		borderRadius: '10px',
	},
	card: {
		height: 'auto',
		display: 'flex',
		flexDirection: 'column',
	},
	cardContent: {
		flexGrow: 1,
		width: '100%',
		paddingLeft:'5%',
		paddingRight: '5%'
	},
}));

const terms = [
	{
		id: 1,
		title:
			'Variety of vehicles:',
			body:'We offer a wide range of vehicles to choose from, including economy cars, mid-size sedans, SUVs, and vans. Our vehicles are well-maintained and reliable, ensuring that you have a smooth and worry-free ride.'
	},
	{
		id: 2,
		title:
			'Competitive pricing:',
			body: ' We offer competitive rates for our car rental services, so you can enjoy the convenience of renting a car without breaking the bank. We also offer various deals and discounts throughout the year to help you save even more'
	},
	{
		id: 3,
		title:
			'Flexible rental options:',
			body: ` We offer daily, weekly, and monthly rental agreements, making it easy for you to choose the rental period that suits your needs. We understand that life can be unpredictable, so if you need to extend your rental, just give us a call and we'll make the necessary arrangements`
	},
	{
		id: 4,
		title:
			'Convenient pick-up and drop-off:',
			body: ` Renting a car from us is easy and hassle-free. We offer online bookings, so you can reserve your vehicle in advance and skip the line when you arrive. Our pick-up and drop-off locations are convenient, making it easy for you to collect and return your car.`
	},
	{
		id: 5,
		title:
			'Insurance options:',
			body: ` We offer various insurance options, including collision damage waiver and liability protection, to give you peace of mind while driving our rental vehicles`
	},
	{
		id: 6,
		title:'Driver Services:',
			body: ` we offer Professional Driver services.

			At our car rental website, we are committed to providing excellent customer service. Our friendly and helpful staff is available to answer any questions you may have about our rental cars or the rental process.
			
			We also offer a range of additional services, such as child seats, and additional drivers. Whatever your travel needs, we have you covered.
			
			Whether you are making a business trip, embarking on a family vacation, or simply need a car for a weekend getaway, we are here to help. Explore our website to find the right rental car for you and make your booking today.
			
			
			At our car rental services, we are committed to providing our customers with the best possible rental experience. So why wait? Book your rental car today and enjoy the freedom and convenience that comes with renting a car from us.
			`
	},
	// {
	// 	id: 7,
	// 	title:
	// 		'The payment will be made in the currency of Rwandan Francs or dollars.',
	// },
	// {
	// 	id: 8,
	// 	title:
	// 		'Returns and refunds will only be made on damaged goods, less or excess goods, and poor quality goods. Returns and refunds will be done in respect of the product price, and this will be communicated to us immediately after the arrival of goods.',
	// },
	// {
	// 	id: 9,
	// 	title:
	// 		'Your content, this is to mean all materials including videos, audios, audio-visuals, graphics, text, images, scripts and software to mention but a few, which you submit to us to communication and other business-related purposes, must be complete, accurate, and authentic.',
	// },
	// {
	// 	id: 10,
	// 	title:
	// 		'The content must abide with generally accepted standards of etiquette and behavior on the internet.',
	// },
	// {
	// 	id: 11,
	// 	title:
	// 		'The content must not be a subject to any kind of offense, racial segregation, sexual assault, hatred, violence and menace.',
	// },
	// {
	// 	id: 12,
	// 	title:
	// 		'The content must be fully yours, thus raising no concerns about counterfeit and piracy. If you decide to use others’ content, you must always give credits to whom they are due.',
	// },
	// {
	// 	id: 13,
	// 	title:
	// 		'By submitting your content to us, you grant us full rights to use it for business-related purposes with no further payments.',
	// },
	// {
	// 	id: 14,
	// 	title:
	// 		'By submitting your content to us, you grant us full rights to use, reproduce, store, adapt, publish, translate and distribute your content across our marketing channels and any existing or future media.',
	// },
];

export default function WhyChooseUs() {
	const classes = useStyles();
	return (
		<ClientLayout>
			<main container >
				<Container item className={classes.cardGrid} maxWidth='lg'>
					<Grid container spacing={3} alignItems='center'>
						<Grid item xs={12} sm={12} md={12}>
							<Card className={classes.card} elevation={2}>
								<CardContent className={classes.cardContent}>
									<Typography
										component='h1'
										variant='h4'
										align='left'
										color='textPrimary'
									>
								WHY CHOOSE US
									</Typography>
									<br />
									<Typography
										variant='h6'
										color='textPrimary'
										component='h2'
									>	Here's what you can expect from our car rental services:
									
									</Typography>
								
									<br />

									{terms &&
										terms.map(i => (
											<>
											<Typography
												variant='header'
												color='textSecondary'
												component='p'
												gutterBottom
											>
												<b>{i.id}. {i.title}</b>
												<br/>

											</Typography>
												<Typography
												variant='body2'
												color='textSecondary'
												component='p'
												gutterBottom
											>
												 {i.body}
												<br/>

											</Typography>
											</>
										))}
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Container>
				<Divider />
			</main>
		</ClientLayout>
	);
}
