import app from "./init";
import globalRouter from "./routers/globalRouter";

const PORT = "5000";

app.use("/", globalRouter);

app.listen(PORT, console.log(`Listening on http://localhost:${PORT}`));
