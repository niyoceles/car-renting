/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import PaymentForm from '../../components/payment/PaymentForm';
import { Grid, Item } from '@material-ui/core';


const Pay = () => {
   const bookingID= localStorage.getItem('bookingID');
   const bookingEmail= localStorage.getItem('bookingEmail');
   const amountToPay= localStorage.getItem('amountToPay');

	return (
        <Grid container 
        spacing={2}  
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item xs={8}>
          <PaymentForm
            bookingEmail={bookingEmail}
            bookingID={bookingID}
            amountToPay={amountToPay}
        />
        </Grid>
      </Grid>
	

	);
};

export default Pay;
