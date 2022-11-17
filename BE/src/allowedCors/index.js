export const allowedCors = {
	origin: [
		process.env.NODE_ENV === "production"
			? process.env.REQUEST_ORIGIN
			: "http://localhost:3000"
	],
	credentials: true
};