import { MaskedGameState } from "./GameState";

export interface ScoreMessagePayload {
    gameState: MaskedGameState;
    index: number;
    score: number;
}
