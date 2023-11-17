import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		padding: 5,
		marginRight: 10,
	},
	links: {
		textDecoration: 'none !important',
		color: 'inherit',
		padding: 2,
	},
}));

const AddCart = props => {
	const classes = useStyles();
	const [submitted, setSubmitted] = useState(false);
	const [dayNumber, setDayNumber] = useState(1);

	const handleSubmit = e => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<form className={classes.form} noValidate onSubmit={handleSubmit}>
			<TextField
				variant='outlined'
				margin='normal'
				required
				type='number'
				id='dayNumber'
				label='Day'
				name='dayNumber'
				defaultValue={'10'}
				helperText={
					submitted && !dayNumber ? 'please add Number of days you want' : null
				}
				value={dayNumber}
				error={submitted && !dayNumber ? 'is-invalid' : null}
				onChange={e => setDayNumber(e.target.value)}
				autoComplete='dayNumber'
				autoFocus
			/>
			<br />
			<Button
				type='submit'
				variant='contained'
				color='primary'
				size='medium'
				style={{ width: '40%' }}
				className={classes.submit}
				onClick={e => props.addItemCart1(e, props.selected1, dayNumber)}
				// startIcon={<AddShoppingCartIcon />}
			>
				Book now
			</Button>
			{/* <Link href='/cart' variant='body2' className={classes.links}>
				<Button
					variant='contained'
					color='secondary'
					size='medium'
					style={{ width: '33%' }}
					className={classes.submit}
				>
					Buy Now
				</Button>
			</Link> */}
		</form>
	);
};

export default AddCart;
