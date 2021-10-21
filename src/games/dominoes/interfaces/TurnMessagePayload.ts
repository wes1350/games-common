import { Direction } from "../enums/Direction";
import { Domino } from "../Domino";
import { MaskedGameState } from "./GameState";

export interface TurnMessagePayload {
    gameState: MaskedGameState;
    index: number;
    domino: Domino;
    direction: Direction;
}
