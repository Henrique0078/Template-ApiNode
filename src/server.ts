import Express, { NextFunction, Request, Response } from "express";

const app = Express();
app.use(Express.json());

const PORT = 8000;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof Error) {
		return res.status(400).json({
			error: err.message,
		});
	}

	return res.status(500).json({
		status: "error",
		message: "Internal Server Error",
	});
});

app.get("/", (request, response) => {
	return response.send({message: "Hello World!"});
});

app.listen(PORT, () => {
	console.log("Server is running in port " + PORT);
});
