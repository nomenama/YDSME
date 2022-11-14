import jwt from "jsonwebtoken";

export const Auth = (roles) => {
	return (req, res, next) => {
		const privateKey = process.env.ACCESS_TOKEN_SECRET;
		const token = req?.cookies?.token;

		jwt.verify(token, privateKey, {}, (err, decodedToken) => {
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