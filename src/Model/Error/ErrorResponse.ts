export class ErrorResponse extends Error {
	constructor(public code: number, message: string) {
		super(message);
	}
}