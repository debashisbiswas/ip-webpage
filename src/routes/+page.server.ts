import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (event) => {
	return {
		ip: event.getClientAddress(),
		host: event.request.headers.get('host')
	};
};
