import { app } from "./app";

const port: number = Number(process.env.PORT) || 9090; 
app.listen(port , () => {
    console.log(`Server is online and listening at => http://localhost:${port}`)
})