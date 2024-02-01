import { opine, json } from "https://deno.land/x/opine/mod.ts";
const app = opine();
const port = 3000;
app.use(json());
app.listen(port, () => {
    console.log(`Server is running`);
  });
app.post("/", (req, res) => {
    const payload = req.body; // Access parsed body with req.body
    console.log("Received GitHub webhook payload:", payload);
    
    // processWebhook(payload);
res.send("POST request to /start endpoint\n");
});