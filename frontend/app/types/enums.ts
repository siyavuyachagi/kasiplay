// Enums for better type safety

//#region A
export enum AnnouncementAudience {
  ALL = "all",             // Everyone
  PLAYERS = "players",     // All players
  COACHES = "coaches",     // All coaches
  OFFICIALS = "officials", // Referees, league/club officials
  STAFF = "staff",         // Team or medical staff
  SPECIFIC_PERSON = "specific_person", // Individual(s)
}

export enum AnnouncementType {
  GENERAL = "general",               // General club-wide info, e.g., holiday notice, admin updates
  MATCH_UPDATE = "match_update",     // Changes in fixtures, results, cancellations
  TRAINING_UPDATE = "training_update", // Schedule or venue changes for trainings
  SYSTEM_ALERT = "system_alert",     // Platform maintenance, bug fixes, or updates
  EVENT_INVITE = "event_invite",     // Tournaments, workshops, special club events
  TRANSFER_UPDATE = "transfer_update", // Player transfers in/out, loans, signings
  INJURY_REPORT = "injury_report",   // Serious injuries or medical updates
  AWARD_ANNOUNCEMENT = "award_announcement", // Player or staff awards, recognitions
  CLUB_ACHIEVEMENT = "club_achievement", // Milestones, league wins, promotions
  POLICY_UPDATE = "policy_update",   // Rule or regulation changes, disciplinary notices,
  OTHER = "other"
}

//#endregion


//#region C
export enum ClubDivision {
  FIRST = 'first',
  SECOND = 'second',
  THIRD = 'third',
}

export enum ContractStatus {
  PENDING = "pending",
  ACTIVE = "active",
  TERMINATED = "terminated",
  EXPIRED = "expired"
}

export enum ContractType {
  PERMANENT = "permanent",
  LOAN = "loan",
  TRIAL = "trial",
  YOUTH = "youth",
  FREE_AGENT = "free_agent",
  OFFICIAL = "official",
  STAFF = "staff",
  SHORT_TERM_ENGAGEMENT = "short_term_engagement"
}

//#endregion



//#region F
export enum FinancialTransactionType {
  INCOME = 'income',
  EXPENSE = 'expense',
  OTHER = 'other'
}

export enum CardType {
  YELLOW_CARD = "yellow_card",
  RED_CARD = "red_card"
}
//#endregion



//#region G
export enum GoalMatchEventType {
  OPEN_PLAY = "open_play",         // regular goals
  PENALTY = "penalty",             // in-game penalty kick
  OWN_GOAL = "own_goal",           // against own team
  FREE_KICK = "free_kick",         // direct or indirect
  HEADER = "header",               // scored with head
  VOLLEY = "volley",               // shot in the air
  PENALTY_SHOOTOUT = "penalty_shootout" // in tie-breakers
}

//#endregion


//#region I
export enum InjuryType {
  MUSCLE = 'muscle',
  BONE = 'bone',
  LIGAMENT = 'ligament',
  CONCUSSION = 'concussion',
  OTHER = 'other'
}

export enum InjurySeverity {
  MINOR = 'minor',
  MODERATE = 'moderate',
  MAJOR = 'major',
  CAREER_THREATENING = 'career_threatening'
}
//#endregion


//#region M
export enum MatchEventType {
  KICK_OFF = "kick_off",
  GOAL = "goal",
  FOUL = "foul",
  SUBSTITUTION = "substitution",
  INJURY = "injury",
  OFFSIDE = "offside",
  PENALTY_AWARDED = "penalty_awarded",
  PENALTY_MISSED = "penalty_missed",
  PENALTY_SCORED = "penalty_scored",
  OWN_GOAL = "own_goal",
  CORNER = "corner",
  FREE_KICK = "free_kick",
  THROW_IN = "throw_in",
  GOAL_KICK = "goal_kick",
  SAVE = "save",           // goalkeeper save
  YELLOW_CARD = "yellow_card", // sometimes separated from FOUL/CARD
  RED_CARD = "red_card",
  HALF_TIME = "half_time",
  FULL_TIME = "full_time",
  EXTRA_TIME_START = "extra_time_start",
  EXTRA_TIME_END = "extra_time_end",
  PENALTY_SHOOTOUT_START = "penalty_shootout_start",
  PENALTY_SHOOTOUT_END = "penalty_shootout_end",
  VIDEO_ASSIST_DECISION = "var_decision", // VAR/Video review events
}

export enum MatchResult { //Optional until match is COMPLETED
  WIN = "win",
  LOSS = "loss",
  DRAW = "draw",
  FORFEIT = "forfeit"
}

export enum MatchStatus {
  SCHEDULED = 'scheduled',
  LIVE = 'live',
  COMPLETED = 'completed',
  POSTPONED = 'postponed',
  CANCELLED = 'cancelled',
  ABANDONED = 'abandoned'
}

export enum MatchType {
  LEAGUE = 'league',
  CUP = 'cup',
  FRIENDLY = 'friendly',
}

//#endregion

//#region O
export enum OfficialRole {
  // Club Officials
  MANAGER = "manager",
  COACH = "coach",
  ASSISTANT_COACH = "assistant_coach",
  PRESIDENT = "president",
  DIRECTOR = "director",

  // League / Match Officials
  REFEREE = "referee",
  ASSISTANT_REFEREE = "assistant_referee",
  FOURTH_OFFICIAL = "fourth_official",
  VIDEO_ASSISTANT_REFEREE = "var",
  MATCH_OBSERVER = "match_observer",
  TECHNICAL_DELEGATE = "technical_delegate",

  // Other / Flexible
  OTHER = "other"
}

//#endregion

//#region P
export enum PaymentFrequency {
  DAILY = "daily",
  WEEKLY = "weekly",
  MONTHLY = "monthly",
  YEARLY = "yearly",
}

export enum PlayerPosition {
  GOALKEEPER = 'GK',
  RIGHT_BACK = 'RB',
  LEFT_BACK = 'LB',
  CENTER_BACK = 'CB',
  DEFENSIVE_MIDFIELDER = 'CDM',
  CENTRAL_MIDFIELDER = 'CM',
  ATTACKING_MIDFIELDER = 'CAM',
  RIGHT_WINGER = 'RW',
  LEFT_WINGER = 'LW',
  STRIKER = 'ST',
  CENTER_FORWARD = 'CF'
}

export enum PlayerStatus {
  ACTIVE = 'active',
  INJURED = 'injured',
  SUSPENDED = 'suspended',
  LOANED_OUT = 'loaned_out',
  RETIRED = 'retired',
  RELEASED = 'released'
}
//#endregion



//#region T
export enum TrainingType {
  FITNESS = 'fitness',
  TECHNICAL = 'technical',
  TACTICAL = 'tactical',
  RECOVERY = 'recovery',
  MATCH_PREPARATION = 'match_preparation'
}

export enum TransferStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  FAILED = 'failed',
  CANCELLED = 'cancelled'
}

export enum TransferType {
  PURCHASE = 'purchase',
  SALE = 'sale',
  LOAN_IN = 'loan_in',
  LOAN_OUT = 'loan_out',
  FREE_TRANSFER = 'free_transfer',
  RELEASE = 'release'
}
//#endregion





//#region S
export enum SocialPlatform {
  WEBSITE = "website",
  FACEBOOK = "facebook",
  TWITTER = "twitter",
  INSTAGRAM = "instagram",
  YOUTUBE = "youtube",
}

export enum SponsorshipType {
  MAIN = "main",
  KIT = "kit",
  TRAINING = "training",
  PARTNER = "partner",
}

export enum StaffRole {
  TRAINER = "trainer",              // fitness & conditioning
  PHYSIOTHERAPIST = "physiotherapist",
  MEDICAL_DOCTOR = "medical_doctor",
  ANALYST = "analyst",
  KIT_MANAGER = "kit_manager",
  MEDIA_OFFICER = "media_officer",
  OTHER = "other"
}

export enum SubstitutionReason {
  TACTICAL = "tactical",         // coach's decision
  INJURY = "injury",             // due to injury
  FATIGUE = "fatigue",           // tiredness/fitness
  DISCIPLINARY = "disciplinary", // punishment, e.g. bad attitude
  STRATEGIC = "strategic",       // e.g. penalty specialist, late-game tactic
  OTHER = "other"                // fallback for unexpected cases
}
//#endregion