import { GameType } from "@games-common/enums/GameType";

export interface GameConfigMessage {
    gameType: GameType.DOMINOES;
    nPlayers?: number;
    handSize?: number;
    check5Doubles?: boolean;
    winThreshold?: number;
}
