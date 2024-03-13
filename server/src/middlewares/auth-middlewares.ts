async function generateToken(payload: any) {
	return jwt.sign({ payload }, String(process.env.JWT_SECRET), {
		expiresIn: "1h",
	});
}
async function storeToken(req, res, next) {
	res.status(301).cookie("jwt", await generateToken(user._id), {
		maxAge: 1000 * 60 * 60,
		httpOnly: true,
	});
}
