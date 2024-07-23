const jwt = require("jsonwebtoken");

export const jwtSign = async (id: number, role: string) => {
  return await jwt.sign(
    {
      id: id,
      role: role,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: 60 * 60,
    }
  );
};
