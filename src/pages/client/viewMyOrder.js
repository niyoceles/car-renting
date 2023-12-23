import React from 'react';
import ClientLayout from '../../layouts/ClientLayout';
import ViewOrder from '../supplier/ViewOrder';


export default function ViewMyOrder() {
	

	return (
		<ClientLayout>
			<ViewOrder isAdmin={false}/>
		</ClientLayout>
	);
}
