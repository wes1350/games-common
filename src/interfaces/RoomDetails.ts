import { LobbyMemberDetails } from "./LobbyMemberDetails";

export interface RoomDetails {
    private: boolean;
    players: LobbyMemberDetails[];
    owner: string;
}
