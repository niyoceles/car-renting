import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Link as ReactLink } from 'react-router-dom';
import constructionImage from '../../assets/images/home/construction1.jpg';
import constructionImage2 from '../../assets/images/home/construction2.jpg';
import constructionImage3 from '../../assets/images/home/construction3.jpg';

const useStyles = makeStyles(theme => ({
	slide: {
	  height: '340px',
	  width: '100%',
	  position: 'relative', // Added for positioning the overlay text
	},
	imageContainer: {
	  position: 'relative',
	},
	image: {
	  height: '100%',
	  width: '100%',
	},
	overlayText: {
	  position: 'absolute',
	  top: '50%',
	  left: '50%',
	  transform: 'translate(-50%, -50%)',
	  zIndex: 1000,
	  color: '#fff', // Adjust text color as needed
	  // Additional styling for the overlay text
	},
	link: {
	  height: '340px',
	  width: '100%',
	},
  }));
  

export const HomeSlide = () => {
	const classes = useStyles();
	return (
		<Carousel autoPlay={9000} infinite slidesPerPage={1} slidesPerScroll={1}>
			{[
				{
					image: constructionImage,
					title: 'image 1',
					link: '/#',
					overlayText:'Welcome to our car rental services website, where we make it easy and convenient for you to rent a car for your travel needs'
				},
				{
					image: constructionImage2,
					title: 'image 2',
					link: '/#',
					overlayText:`We offer a range of vehicles to suit your needs, whether you're looking for a small, fuel-efficient car for city driving, a spacious SUV for a family vacation, or a luxury sedan for a special occasion and you are planning a road trip or need a temporary car for business purposes`
				},
				{
					image: constructionImage3,
					title: 'image 3',
					link: '/#',
					overlayText:'Our online booking system is easy to use and allows you to select the ideal vehicle for your trip. We provide detailed information about each rental car, including its features, size, and pricing. You can choose from a range of rental options, such as daily, weekly, or monthly rentals, to suit your needs'
				},
			].map(i => (
				<div key={i.title} className={classes.slide}>
					<ReactLink to={i.link}>
						<div className={classes.imageContainer}>
							<img src={i.image} className={classes.image} alt={i.title} />
							<div className={classes.overlayText}>
								<h2 	
								style={{
							background: 'rgba(0,0,0,0.5)',
							fontSize: 16,
							fontWeight: 900,
							color: 'white',
							padding:'10px',
							borderRadius: 25,
						}}>{i.overlayText}</h2>
							</div>
						</div>
					</ReactLink>
				</div>
			))}
		</Carousel>
	);
};
