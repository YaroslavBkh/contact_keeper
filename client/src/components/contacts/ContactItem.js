import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
	const { id, name, email, phone, type } = contact;
	return (
		<div className="card bg-light" style={{ margin: '0 auto' }}>
			<h3 className="text-primary text-left">
				{name}{' '}
				<span
					// style={{ float: 'right' }}
					className={`badge
						${type === 'professional' ? 'badge-success' : 'badge-primary'}`}
				>
					{// Start from uppercase
					type.charAt(0).toUpperCase() + type.slice(1)}
				</span>
			</h3>
			<ul className="list">
				{email && <li className="fas fa-envelope-open bl"> {email}</li>}
				{phone && <li className="fas fa-phone bl"> {phone}</li>}
			</ul>
			<p>
				<button type="button" className="btn btn-dark btn-sm">
					Edit
				</button>
				<button type="button" className="btn btn-danger btn-sm">
					Delete
				</button>
			</p>
		</div>
	);
};

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
};

export default ContactItem;