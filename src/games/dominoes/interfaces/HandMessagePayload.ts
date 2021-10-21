import { Domino } from "../Domino";
import { MaskedGameState } from "./GameState";

export interface HandMessagePayload {
    hand: Domino[];
    gameState: MaskedGameState;
}
