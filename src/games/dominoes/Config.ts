import { GameType } from "../../enums/GameType";
import { GameConfig } from "../../interfaces/GameConfig";

export interface Config extends GameConfig {
    gameType: GameType.DOMINOES;
    nPlayers: number;
    handSize: number;
    winThreshold: number;
    check5Doubles: boolean;
}

export const InitializeConfig = (config?: Partial<Config>) => ({
    gameType: GameType.DOMINOES,
    nPlayers: config?.nPlayers ?? 4,
    handSize: config?.handSize ?? 7,
    winThreshold: config?.winThreshold ?? 150,
    check5Doubles: config?.check5Doubles ?? true
});
