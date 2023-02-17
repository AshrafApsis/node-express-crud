import * as dotenv from "dotenv";
dotenv.config();
import ip from "ip";

export const server = (app) => {
	const port = process.env.PORT || 4000;
	app.listen(port, (_) =>
		console.log(`App is running on http://${ip.address()}:${port}`)
	);
};
