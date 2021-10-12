import { GameConfigDescription } from "@games-common/interfaces/GameConfigDescription";
import { Board } from "../Board";
import { Domino } from "../Domino";
import { Pack } from "../Pack";

export interface GameState {
    config: GameConfigDescription;
    currentPlayerIndex: number;
    players: {
        index: number;
        score: number;
        hand: Domino[];
    }[];
    pack: Pack;
    board: Board;
    nPasses: number;
}

export interface MaskedGameState {
    config: GameConfigDescription;
    myIndex: number;
    currentPlayerIndex: number;
    players: {
        index: number;
        score: number;
        hand: Domino[] | null;
        handSize: number;
    }[];
    packSize: number;
    board: Board;
    nPasses: number;
}
