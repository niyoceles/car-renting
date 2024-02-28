import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	image: {
		backgroundImage: `url(${require('../../assets/images/cover.jpg')})`,
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[150]
				: theme.palette.grey[100],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
}));

export default function Informing() {
	const classes = useStyles();
	return (
		<Grid item xs={false} sm={4} md={7} className={classes.image}>
			<Box mt={5}>
				<Container maxWidth='sm'>
					<br />
					<br />
					<br />
					<Typography
						component='h1'
						variant='h2'
						align='center'
						color='textPrimary'
						gutterBottom
						style={{
							fontSize: '48 !important',
							color:'white'
						}}
					>
						<b>Car Rental</b>
					</Typography>
					<br />
					<br />
					<br />
					<br />
					<Divider />
					<Typography
						variant='h4'
						align='center'
						color='textPrimary'
						paragraph
						style={{
							background: 'rgba(0,0,0,0.5)',
							fontSize: 38,
							fontWeight: 900,
							color: 'white',
							padding:'10px',
							borderRadius: 25,
						}}
					>
						Rent your choose car with us!
					</Typography>
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					{/* <div className={classes.heroButtons}>
						<Grid container spacing={2} justify='center'>
							<Grid item>
								<Button variant='contained' color='primary'>
									<h3>Start Now</h3>
								</Button>
							</Grid>
							<Grid item>
								<Button variant='contained' color='#009688'>
									<h3>Be our supplier</h3>
								</Button>
							</Grid>
						</Grid>
					</div> */}
				</Container>
			</Box>
		</Grid>
	);
}
