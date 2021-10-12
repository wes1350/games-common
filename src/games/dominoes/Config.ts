import { GameConfigSettings } from "./interfaces/GameConfigSettings";

export interface Config {
    nPlayers: number;
    handSize: number;
    winThreshold: number;
    check5Doubles: boolean;
}

export const InitializeConfig = (config?: GameConfigSettings) => ({
    nPlayers: config?.nPlayers ?? 4,
    handSize: config?.handSize ?? 7,
    winThreshold: config?.winThreshold ?? 150,
    check5Doubles: config?.check5Doubles ?? true
});
