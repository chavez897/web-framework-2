import { refreshTokenService } from "../services/refreshTokenService.js";

//Return a new access token given a refresh token
export const refreshToken = async (req, res) => {
  console.log("refreshToken initiated");
  const refreshToken = req.cookies.jwt;
  if (!refreshToken) {
    console.log("No refresh token");
    res.sendStatus(401);
    return;
  }
  try {
    const accessToken = await refreshTokenService(refreshToken);
    if (accessToken) {
      res.status(200).json({ accessToken });
    }
  } catch (error) {
    if (error.message === "Not valid refresh token") {
      res.sendStatus(401);
    } else {
      res.status(503).json({ message: error.message });
    }
  }
};
