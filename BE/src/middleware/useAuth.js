import jwt from "jsonwebtoken";

export const useAuth = (roles) => {
	return (req, res, next) => {
		const privateKey = process.env.ACCESS_TOKEN_SECRET;

		try {
			const token = req.cookies.token;

			jwt.verify(token, privateKey, {}, (err, decodedToken) => {
				if (err) return res.status(401).json({error: "Unauthorised"});
				const isMatched = decodedToken.roles.some((role) => roles.includes(role));

				if (isMatched) {
					next();
				}
			});

		} catch (err) {
			res.status(401).json({error: "Unauthorised"});
		}
	};
};