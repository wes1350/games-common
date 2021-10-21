import { GameType } from "../../../enums/GameType";
// import { MaskedGameState } from "./GameState";

export interface GameStartMessagePayload {
    gameType: GameType.DOMINOES;
    // gameState: MaskedGameState;
}
