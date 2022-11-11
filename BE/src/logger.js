import {createLogger, transports, format} from "winston";

export const logger = createLogger({
	format: format.combine(format.timestamp(), format.json()),
	transports: [
		new transports.File({ filename: 'logs/error.log', level: 'error' }),
		new transports.File({ filename: 'logs/server.log', level: 'info' }),
		new transports.Console({format: format.simple()})
	],
});