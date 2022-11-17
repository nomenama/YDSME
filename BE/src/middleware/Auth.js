import jwt from "jsonwebtoken";
import fs from "fs";

export const Auth = (roles) => {
	return (req, res, next) => {
		const publicKey = fs.readFileSync("./certs/public.pem");
		const token = req?.cookies?.token;

		jwt.verify(token, publicKey, {algorithm: "RS256"}, (err, decodedToken) => {
			if (err) return res.status(401).json({message: "Unauthorised"});
			const isMatched = decodedToken.roles.some((role) => roles.includes(role));

			if (isMatched) {
				next();
			} else {
				res.status(401).json({message: "Unauthorised"});
			}
		});
	};
};