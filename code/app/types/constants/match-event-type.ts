export const MATCH_EVENT_TYPE = {
    KICK_OFF: "kick_off",
    GOAL: "goal",
    FOUL: "foul",
    SUBSTITUTION: "substitution",
    INJURY: "injury",
    OFFSIDE: "offside",
    PENALTY_AWARDED: "penalty_awarded",
    PENALTY_MISSED: "penalty_missed",
    PENALTY_SCORED: "penalty_scored",
    OWN_GOAL: "own_goal",
    CORNER: "corner",
    FREE_KICK: "free_kick",
    THROW_IN: "throw_in",
    GOAL_KICK: "goal_kick",
    SAVE: "save",
    YELLOW_CARD: "yellow_card",
    RED_CARD: "red_card",
    HALF_TIME: "half_time",
    FULL_TIME: "full_time",
    EXTRA_TIME_START: "extra_time_start",
    EXTRA_TIME_END: "extra_time_end",
    PENALTY_SHOOTOUT_START: "penalty_shootout_start",
    PENALTY_SHOOTOUT_END: "penalty_shootout_end",
    VIDEO_ASSIST_DECISION: "var_decision",

    // Added / missing events
    INJURY_TIME_START: "injury_time_start",
    INJURY_TIME_END: "injury_time_end",
    SUBSTITUTION_ON: "substitution_on",
    SUBSTITUTION_OFF: "substitution_off",
    YELLOW_CARD_SECOND: "second_yellow_card", // ejection after 2nd yellow
    RED_CARD_DIRECT: "direct_red_card",        // straight red
    GOAL_ASSIST: "goal_assist",
    PENALTY_SAVED: "penalty_saved",
    FREE_KICK_GOAL: "free_kick_goal",
    CORNER_GOAL: "corner_goal",
    TEAM_TACTIC_CHANGE: "tactic_change",
    COACH_TIMEOUT: "coach_timeout", // if applicable
} as const;

export type MatchEventType = typeof MATCH_EVENT_TYPE[keyof typeof MATCH_EVENT_TYPE];
