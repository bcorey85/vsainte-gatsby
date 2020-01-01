import React from 'react';

const EventListing = ({ event, date, location }) => {
	return (
		<li>
			{event} - {date} - {location}
		</li>
	);
};

export default EventListing;
