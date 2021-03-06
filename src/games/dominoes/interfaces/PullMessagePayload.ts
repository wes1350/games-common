import { MaskedGameState } from "./GameState";

export interface PullMessagePayload {
    playerIndex: number;
    gameState: MaskedGameState;
}
