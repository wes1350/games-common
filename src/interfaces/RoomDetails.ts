export interface RoomDetails {
    private: boolean;
    players: { id: string; name: string }[];
}
