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
	},
}));

export default function AboutUs() {
	const classes = useStyles();
	return (
		<ClientLayout>
			<main container>
				<Container item className={classes.cardGrid} maxWidth='lg'>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={12} md={8}>
							<Card className={classes.card} elevation={1}>
								<CardContent className={classes.cardContent}>
									<Typography
										component='h3'
										variant='h6'
										align='left'
										color='textPrimary'
									>
										About us
									</Typography>
									GoDiscover Africa is a premium Tours and Travel company with its headquarters in Kigali Rwanda and company representatives in Nairobi, Kenya operating inbound and outbound tours within the region and Africa as a whole.

 

We specialize in creating exceptional tourism experiences and our service is anchored on the root mandate which is to cater for all our client travel expectations by developing and facilitating tourism packages that offer adventure, mystery, tranquility, excitement, education and most important safety.

 

We invite you to come to join the exciting GoDiscover Africa adventure as we spread our wings across the continent of Africa with our professional tour operators who will guide you in discovering the mystery of the African continent, explore our detailed packages and itineraries which lead you to pre-arranged adventures or request for customized adventures and we will develop one for you that meets all your requirements. Discover our beautiful continent by partnering with GoDiscover Africa- we will take you there in comfort and style
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} sm={12} md={4}>
							<Card className={classes.card} elevation={1}>
								<CardContent className={classes.cardContent}>
									<Typography
										component='h3'
										variant='h6'
										align='left'
										color='textPrimary'
									>
										Cores values
									</Typography>
									<br />
									<Typography
										variant='body1'
										color='textSecondary'
										component='p'
									>
										• Credibility <br />
										• Commitment <br />
										• Punctuality <br />
										• Collaboration <br />• Permanence
									</Typography>
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
