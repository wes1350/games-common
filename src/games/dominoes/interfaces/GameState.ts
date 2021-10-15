import { GameConfigDescription } from "@games-common/interfaces/GameConfigDescription";
import { Board } from "../Board";
import { Domino } from "../Domino";
import { Pack } from "../Pack";
import { Player } from "../Player";

export interface GameState {
    config: GameConfigDescription;
    currentPlayerIndex: number;
    players: Player[];
    pack: Pack;
    board: Board;
    nPasses: number;
}

export interface MaskedGameState {
    config: GameConfigDescription;
    myIndex: number;
    currentPlayerIndex: number;
    players: Player[];
    packSize: number;
    board: Board;
    nPasses: number;
}
