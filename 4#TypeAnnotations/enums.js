// #16: Enums in Typescript Explained with Real-life Examples 👉 Used in Thapa Technical Website
// Enums in TypeScript
// user1 = login => normal user
// user2 = login => admin user
var Role;
(function (Role) {
    Role["user"] = "user";
    Role["admin"] = "admin";
})(Role || (Role = {}));
var user1 = {
    name: "Ravi",
    email: "ravi@gmail.com",
    password: "12345",
    role: Role.user,
};
var isAdmin = function (user) {
    var name = user.name, role = user.role;
    return role === Role.admin ? "".concat(name, " is admin") : "".concat(name, " is not admin");
};
console.log(isAdmin(user1));
