// Enums for better type safety
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

export enum ContractType {
  PERMANENT = 'permanent',
  LOAN = 'loan',
  TRIAL = 'trial',
  YOUTH = 'youth'
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

export enum TrainingType {
  FITNESS = 'fitness',
  TECHNICAL = 'technical',
  TACTICAL = 'tactical',
  RECOVERY = 'recovery',
  MATCH_PREPARATION = 'match_preparation'
}

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

export enum TransferType {
  PURCHASE = 'purchase',
  SALE = 'sale',
  LOAN_IN = 'loan_in',
  LOAN_OUT = 'loan_out',
  FREE_TRANSFER = 'free_transfer',
  RELEASE = 'release'
}


export enum PAYMENT_FREQUENCY {
  DAILY = "daily",
  WEEKLY = "weekly",
  MONTHLY = "monthly",
  YEARLY = "yearly",
}


export enum SPONSOR_TYPE {
  MAIN = "main",
  KIT = "kit",
  TRAINING = "training",
  PARTNER = "partner",
}