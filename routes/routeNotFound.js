export const routeNotFound = (req, res, next) => {
	const error = new Error("Route not Match");
	error.status = 404;
	res.status(error.status).send({ message: error.message });
}