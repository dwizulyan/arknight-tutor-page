
export type Stage = {
    id: number;
    title: string,
    code: string;
    chapter: {
        id: number;
        title: string;
        cover: string;
    };
    mode: [
        {
            id: number,
            mode: string,
            stageId: number,
            rewards: Drops
            conditions: Conditions
        }
    ]
};

// types for rewards
export type Drops = {
    id: number,
    modeId: number,
    items: Item[]
}
export type Item = {
    id: number,
    dropId: number,
    itemName: string,
    rarity: string,
    type: string,
}
// types for conditions
export type Conditions = {
    id: number;
    mode: string;
    description: string[];
};
