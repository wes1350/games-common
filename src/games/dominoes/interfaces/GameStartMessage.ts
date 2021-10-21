import { GameType } from "../../../enums/GameType";
import { MaskedGameState } from "./GameState";

export interface GameStartMessage {
    gameType: GameType.DOMINOES;
    gameState: MaskedGameState;
}
