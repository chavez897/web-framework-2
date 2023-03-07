const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const roles = Object.values(req.roles);
    console.log("roles", roles);
    console.log("allowedRoles", allowedRoles);
    if (roles.some((role) => allowedRoles.includes(role))) {
      return next();
    }
    return res.sendStatus(403);
  };
};

export default verifyRoles;
