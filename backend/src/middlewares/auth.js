// const argon2 = require("argon2");
// const jwt = require("jsonwebtoken");

// const hashingOptions = {
//   type: argon2.argon2id,
//   memoryCost: 2 ** 16,
//   timeCost: 5,
//   parallelism: 1,
// };

// const hashPassword = async (req, res, next) => {
//   const { password } = req.body;

//   try {
//     const hashedPassword = await argon2.hash(password, hashingOptions);

//     req.body.hashed_password = hashedPassword;

//     delete req.body.password;

//     next();
//   } catch (error) {
//     next(error);
//   }
// };

// const verifyPassword = async (req, res, next) => {
//   const { hashed_password: hashedPassword } = req.user;
//   const { password } = req.body;

//   console.log(req.user);

//   try {
//     const isPasswordCorrect = await argon2.verify(hashedPassword, password);

//     if (!isPasswordCorrect) {
//       return res.sendStatus(401);
//     }

//     const payload = {
//       sub: req.user,
//     };

//     const token = jwt.sign(payload, process.env.JWT_SECRET, {
//       expiresIn: 60 * 60,
//     });

//     delete req.user.hashed_password;
//     res.status(200).send({ token, user: req.user });
//   } catch (error) {
//     next(error);
//   }
// };

// const verifyToken = async (req, res, next) => {
//   try {
//     const authorization = req.get("Authorization");

//     if (!authorization) {
//       throw new Error("Authorization header is missing");
//     }

//     console.log(authorization);

//     const token = req.headers.authorization.split(" ")[1];
//     const payload = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = payload.sub;
//     next();
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports = { hashPassword, verifyPassword, verifyToken };
