export const home = (req, res) => res.render("home", { pageTitle: "home" });
export const search = (req, res) => res.send("search", { pageTitle: "search" });
