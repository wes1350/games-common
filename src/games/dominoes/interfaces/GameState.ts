import { GameConfigDescription } from "@games-common/interfaces/GameConfigDescription";
import { Board } from "../Board";
import { Domino } from "../Domino";
import { Pack } from "../Pack";

export interface GameStatePlayer {
    index: number;
    score: number;
    hand: Domino[];
}

export interface MaskedGameStatePlayer {
    index: number;
    score: number;
    hand: Domino[] | null;
    handSize: number;
}

export interface GameState {
    config: GameConfigDescription;
    currentPlayerIndex: number;
    players: GameStatePlayer[];
    pack: Pack;
    board: Board;
    nPasses: number;
}

export interface MaskedGameState {
    config: GameConfigDescription;
    myIndex: number;
    currentPlayerIndex: number;
    players: MaskedGameStatePlayer[];
    packSize: number;
    board: Board;
    nPasses: number;
}
