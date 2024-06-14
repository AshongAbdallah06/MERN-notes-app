const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
	const token = req.cookies.jwt;

	if (!token) {
		return res.status(401).json({ message: "Unauthorized" });
	}

	jwt.verify(token, "secretString", (err, decodedToken) => {
		if (err) {
			return res.status(403).json({ message: "Invalid token" });
		}

		// If valid token, attach decoded payload to request object
		req.user = decodedToken;
		next();
	});
};

module.exports = { verifyToken };
