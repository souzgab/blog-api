import { PostEntity } from './../repositories/models/post.model';
import { env } from './env.config';
import { createConnection } from 'typeorm'

createConnection({
    type: 'mongodb',
    url: env.db_url,
    ssl: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    entities: [
        PostEntity
    ],
    logging: 'all',
    logger: 'simple-console',
    synchronize: false
}).then((conn: { isConnected: any; }) => {
    console.log(`is Successfully connected to DB? => ${conn.isConnected}`)
}).catch((e: any) => { throw e })