export const PLAYER_POSITION = {
    // Goalkeepers
    GOALKEEPER: 'GK',

    // Defenders
    RIGHT_BACK: 'RB',
    LEFT_BACK: 'LB',
    CENTER_BACK: 'CB',
    SWEEPER: 'SW',              // optional, some systems still use it
    RIGHT_WING_BACK: 'RWB',
    LEFT_WING_BACK: 'LWB',

    // Midfielders
    DEFENSIVE_MIDFIELDER: 'CDM',
    CENTRAL_MIDFIELDER: 'CM',
    ATTACKING_MIDFIELDER: 'CAM',
    RIGHT_MIDFIELDER: 'RM',
    LEFT_MIDFIELDER: 'LM',

    // Forwards / Attackers
    RIGHT_WINGER: 'RW',
    LEFT_WINGER: 'LW',
    SECOND_STRIKER: 'SS',       // aka "support striker"
    CENTER_FORWARD: 'CF',
    STRIKER: 'ST',

    // Hybrid / modern roles
    INVERTED_LEFT_BACK: 'ILB',
    INVERTED_RIGHT_BACK: 'IRB',
    FALSE_NINE: 'F9',
    BOX_TO_BOX_MIDFIELDER: 'B2B',
    DEEP_LYING_PLAYMAKER: 'DLP',
    ADVANCED_PLAYMAKER: 'AP',
    POACHER: 'PCH',
    TARGET_MAN: 'TM',
    WIDE_FORWARD: 'WF',
} as const;

export type PlayerPosition = typeof PLAYER_POSITION[keyof typeof PLAYER_POSITION]