import { Config } from "../Config";

export interface PlayerDescription {
    seatNumber: number;
    name: string;
    isMe: boolean;
}

export interface GameStartMessage {
    players: PlayerDescription[];
    config: Config;
}
