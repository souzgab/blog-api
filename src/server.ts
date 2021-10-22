import { app } from "./app";
import './config/conn'

const port: number = Number(process.env.PORT) || 30; 
app.listen(port , () => {
    console.log(`Server is online and listening at: http://localhost:${port}`)
})