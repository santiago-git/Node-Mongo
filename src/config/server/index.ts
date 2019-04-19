import * as http from 'http';
import * as serverHandlers from './serverHandlers';
import app from './server';

const Server: http.Server = http.createServer(app);

/**
 * Binds and listens for connections on the specified host
 */
Server.listen(app.get('port'));

/**
 * Server Events
 */
Server.on('error',
    (error: Error) => serverHandlers.onError(error, app.get('port')));
Server.on('listening',
    serverHandlers.onListening.bind(Server));
