/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import SupplierLayout from '../../layouts/SupplierLayout';
import ViewOrder from './ViewOrder';


const ViewOrderPage = props => {

	return (
		<SupplierLayout>
         <ViewOrder isAdmin={true} />
		 </SupplierLayout>
	);
};

export default ViewOrderPage;
