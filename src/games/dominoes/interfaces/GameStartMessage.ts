import { GameConfigDescription } from "@games-common/interfaces/GameConfigDescription";

export interface PlayerDescription {
    seatNumber: number;
    name: string;
    isMe: boolean;
}

export interface GameStartMessage {
    players: PlayerDescription[];
    config: GameConfigDescription;
}
