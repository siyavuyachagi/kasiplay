// Enums for better type safety

//#region A
export enum AdminRole {
  // System-level (your organization)
  SYSTEM = "system",                       // You
  SYSTEM_ADMIN = "system_admin",           // Senior administrators
  SYSTEM_MANAGER = "system_manager",       // Department managers

  // Customer organizations
  FEDERATION_PRESIDENT = "federation_president",
  FEDERATION_SECRETARY = "federation_secretary",
  FEDERATION_TREASURER = "federation_treasurer",
  CLUB_PRESIDENT = "club_president",
  CLUB_DIRECTOR = "club_director",
  CLUB_MANAGER = "club_manager"
}

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

export enum CupBracketStyle {
  TRADITIONAL = 'traditional',          // Vertical progression
  MIRRORED = 'mirrored',               // Left/right converging to center
  LADDER = 'ladder'                    // Step-ladder format
}

export enum CupFormat {
  SINGLE_ELIMINATION = 'single-elimination',
  DOUBLE_ELIMINATION = 'double-elimination',
}

export enum CupRoundBracketSide {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center"
}
//#endregion



//#region F
export enum FinancialTransactionType {
  INCOME = 'income',
  EXPENSE = 'expense',
  OTHER = 'other'
}

export enum FinancialTransactionStatus {
  pending = "pending",
  completed = "completed",
  failed = "failed",
  refunded = "refunded"
}
//#endregion



//#region G
export enum GoverningBodyType {
  LEAGUE = "league",
  FEDERATION = "federation",
  ASSOCIATION = "association",
  CONFEDERATION = "confederation"
}
export enum GoverningBodyMembershipStatus {
  PENDING = "pending",
  ACTIVE = "active",
  REJECTED = "rejected",
  SUSPENDED = "suspended"
}

export enum GoverningBodyMembershipType {
  FULL = "full",
  ASSOCIATE = "associate",
  PROVISIONAL = "provisional"
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
export enum MatchCardType {
  YELLOW_CARD = "yellow_card",
  RED_CARD = "red_card"
}
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

export enum MatchLegs {
  SINGLE_LEG = 'single-leg',           // 1 game decides winner
  TWO_LEG = 'two-leg',                 // Home & away (aggregate)
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

export enum OrganizationType {
  LEAGUE = "league",
  FEDERATION = "federation",
  ASSOCIATION = "association",
  CONFEDERATION = "confederation"
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

export enum PlayerTransferType {
  PURCHASE = 'purchase',
  SALE = 'sale',
  LOAN_IN = 'loan_in',
  LOAN_OUT = 'loan_out',
  FREE_TRANSFER = 'free_transfer',
  RELEASE = 'release'
}

export enum PlayerType {
  SENIOR = "senior",
  YOUTH = "youth"
}

export enum PreferredFoot {
  Left = "left",
  Right = "right",
  Both = "both"
}
//#endregion




//#region R
export enum ReportType {
  // Player-focused
  PLAYER_PERFORMANCE = "player_performance",       // stats, goals, assists, match ratings
  PLAYER_FITNESS = "player_fitness",               // fitness tests, injuries, VO2 max, endurance
  PLAYER_TRAINING = "player_training",             // attendance & performance in sessions
  PLAYER_CONTRACTS = "player_contracts",           // current contracts, expiries, loans
  PLAYER_TRANSFERS = "player_transfers",           // historical and recent transfers

  // Club-focused
  CLUB_PERFORMANCE = "club_performance",           // wins, draws, losses, league standings
  CLUB_FINANCIALS = "club_financials",             // revenue, expenses, transfer fees
  CLUB_TRAINING = "club_training",                 // aggregated training sessions & attendance
  CLUB_SCOUTING = "club_scouting",                 // scouting reports summary
  CLUB_INJURIES = "club_injuries",                 // injury summaries, recovery stats

  // Competition-focused
  LEAGUE_STANDINGS = "league_standings",           // full league table
  CUP_PROGRESS = "cup_progress",                   // round-by-round progress, fixtures
  TOURNAMENT_STATS = "tournament_stats",           // group & knockout stats, winners

  // Governance / Tenant-focused
  TENANT_MEMBERSHIP = "tenant_membership",         // member clubs, active/inactive status
  TENANT_FINANCIALS = "tenant_financials",         // subscription revenue, payments
  TENANT_ACTIVITIES = "tenant_activities",         // competitions managed, events hosted

  // Multi-purpose / General
  CUSTOM = "custom"                                // user-defined or ad-hoc reports
}

//#endregion



//#region T
export enum TrainingSessionType {
  FITNESS = 'fitness',
  TECHNICAL = 'technical',
  TACTICAL = 'tactical',
  RECOVERY = 'recovery',
  MATCH_PREPARATION = 'match_preparation'
}

export enum TransferNegotiationStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  FAILED = 'failed',
  CANCELLED = 'cancelled'
}

//#endregion





//#region S
export enum SocialPlatform {
  WEBSITE = "website",
  FACEBOOK = "facebook",
  TWITTER = "twitter",
  INSTAGRAM = "instagram",
  YOUTUBE = "youtube",
  LINKEDIN = "linkedin",
}

export enum StaffRole {
  // --- Club staff (sports-related) ---
  TRAINER = "trainer",                     // fitness & conditioning
  PHYSIOTHERAPIST = "physiotherapist",
  MEDICAL_DOCTOR = "medical_doctor",
  ANALYST = "analyst",
  KIT_MANAGER = "kit_manager",
  MEDIA_OFFICER = "media_officer",
  HEAD_COACH = "head_coach",
  ASSISTANT_COACH = "assistant_coach",
  GOALKEEPER_COACH = "goalkeeper_coach",
  SCOUT = "scout",
  TEAM_MANAGER = "team_manager",
  DIRECTOR_OF_FOOTBALL = "director_of_football",

  // --- Customer organization staff (non-sports, admin/management) ---
  PRESIDENT = "president",
  CHAIRMAN = "chairman",
  ACADEMY_MANAGER = "academy_manager",
  EVENT_COORDINATOR = "event_coordinator",
  MARKETING_MANAGER = "marketing_manager",
  SPONSORSHIP_MANAGER = "sponsorship_manager",

  // --- System staff (platform employees) ---
  PLATFORM_DEVELOPER = "platform_developer",
  PRODUCT_MANAGER = "product_manager",
  CUSTOMER_SUCCESS = "customer_success",
  SUPPORT_AGENT = "support_agent",
  CONTENT_MODERATOR = "content_moderator",
  DATA_ANALYST = "data_analyst",
  SALES_REP = "sales_rep",
  SYSTEM_ADMIN = "system_admin",

  // --- Miscellaneous ---
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

export enum SystemUserType {
  SYSTEM_ADMINISTRATOR = "system_administrator",
  ADMINISTRATOR = "administrator",
  OFFICIAL = "official",
  PLAYER = "player",
  STAFF = "staff",
  FAN = "fan"
}
//#endregion