import jwt from "jsonwebtoken";

export const useAuth = (roles) => {
	return (req, res, next) => {
		const privateKey = process.env.ACCESS_TOKEN_SECRET;
		const token = req.cookies.token;

		if (!token) return res.status(401).json({error: "Unauthorised"});

		jwt.verify(token, privateKey, {}, (err, decoded) => {
			if (err) return res.status(401).json({error: "Unauthorised"});

			if (decoded.roles.some((role) => roles.includes(role))) {
				next();
			}

			res.status(401).json({error: "Unauthorised"});
		});
	};
};