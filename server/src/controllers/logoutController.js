import { logoutService } from "../services/logOutService.js";
export const handleLogout = async (req, res) => {
  console.log("handleLogout initiated");
  const refreshToken = req.cookies.jwt;
  if (!refreshToken) {
    console.log("No refresh token");
    res.sendStatus(204);
    return;
  }
  try {
    await logoutService(refreshToken);

    //Clear cookies in response
    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.sendStatus(204); //No content
  } catch (error) {
    res.status(503).json({ message: error.message }); //Service unavailable
  }
};
