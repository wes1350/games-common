import { GameType } from "@games-common/enums/GameType";

export interface GameConfigDescription {
    nPlayers: number;
    handSize: number;
    winThreshold: number;
    check5Doubles: boolean;
}
