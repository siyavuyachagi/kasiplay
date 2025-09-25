// Enums for better type safety


//#region C
export enum ClubDivision {
  FIRST = 'first',
  SECOND = 'second',
  THIRD = 'third',
}

export enum ContractType {
  PERMANENT = 'permanent',
  LOAN = 'loan',
  TRIAL = 'trial',
  YOUTH = 'youth'
}
//#endregion



//#region F
export enum FinancialTransactionType {
  INCOME = 'income',
  EXPENSE = 'expense',
  OTHER = 'other'
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
export enum MatchOfficialRole {
  REFEREE = "referee",
  ASSISTANT_REFEREE = "assistant_referee",
  FOURTH_OFFICIAL = "fourth_official",
  VIDEO_ASSISTANT_REFEREE = "video_assistant_referee",
}

export enum MatchType {
  LEAGUE = 'league',
  CUP = 'cup',
  FRIENDLY = 'friendly',
}

export enum MatchStatus {
  SCHEDULED = 'scheduled',
  LIVE = 'live',
  COMPLETED = 'completed',
  POSTPONED = 'postponed',
  CANCELLED = 'cancelled'
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
export enum SponsorshipType {
  MAIN = "main",
  KIT = "kit",
  TRAINING = "training",
  PARTNER = "partner",
}

export enum SocialPlatform {
  WEBSITE = "website",
  FACEBOOK = "facebook",
  TWITTER = "twitter",
  INSTAGRAM = "instagram",
  YOUTUBE = "youtube",
}
//#endregion