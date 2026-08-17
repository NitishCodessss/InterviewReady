import dotenv from "dotenv";
import app from "./src/app.js";
import connectToDB from "./src/config/database.js";
import main from "./src/services/ai.service.js";

dotenv.config();

connectToDB();
main()

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

