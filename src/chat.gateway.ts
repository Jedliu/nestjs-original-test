import {
    ConnectedSocket,
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'http';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    handleConnection(client: Socket) {
        // Handle connection event
    }

    handleDisconnect(client: Socket) {
        // Handle disconnection event
    }

    @SubscribeMessage('message')
    handleMessage(
        @MessageBody() data: string,
        @ConnectedSocket() client: Socket,
    ) {
        // Handle received message
        this.server.emit('message', data); // Broadcast the message to all connected clients
    }
}
