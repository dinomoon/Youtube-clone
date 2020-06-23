export const home = (req, res) => res.render("home", { pageTitle: "home" });
export const search = (req, res) => {
  //const searchingBy = req.query.term;
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "search", searchingBy });
};
