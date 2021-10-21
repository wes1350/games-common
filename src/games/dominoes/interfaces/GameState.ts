import { Board } from "../Board";
import { Config } from "../Config";
import { Pack } from "../Pack";
import { Opponent, Player } from "../Player";

export interface GameState {
    config: Config;
    currentPlayerIndex: number;
    players: Player[];
    pack: Pack;
    board: Board;
    nPasses: number;
    fresh: boolean;
}

export interface MaskedGameState {
    config: Config;
    currentPlayerIndex: number;
    me: Player;
    opponents: Opponent[];
    packSize: number;
    board: Board;
    nPasses: number;
    fresh: boolean;
}
