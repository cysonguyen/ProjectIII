const jwtDecode = require("jwt-decode");

export default function({ redirect }) {
  let token = localStorage.getItem("token");
  if (token) {
    let decoded = jwtDecode(token);
    let userPermissions = decoded.permissions;

    if (userPermissions.length == 1 && userPermissions[0] === "guest") {
      return redirect("/");
    } else return redirect("/");
  }
}
