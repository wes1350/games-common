import { Board } from "../Board";
import { Config } from "../Config";
import { Pack } from "../Pack";
import { Player } from "../Player";

export interface GameState {
    config: Config;
    currentPlayerIndex: number;
    players: Player[];
    pack: Pack;
    board: Board;
    nPasses: number;
}

export interface MaskedGameState {
    config: Config;
    myIndex: number;
    currentPlayerIndex: number;
    players: Player[];
    packSize: number;
    board: Board;
    nPasses: number;
}
