import { USER_ROLES } from "~/types/constants/user-role";
import type { ApplicationUser } from "~/types/interfaces/application-user";

export const users: ApplicationUser[] = [
  {
    id: "user_101",
    username: "alicej",
    email: "alice.j@example.com",
    firstName: "Alice",
    lastName: "Johnson",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
    isActive: true,
    roles: [USER_ROLES.GENERAL, USER_ROLES.OWNER],
    permissions: [
      "create:system", "edit:system", "view:system", "delete:system",
      "create:user", "edit:user", "delete:user", "view:user",
      "create:federation", "edit:federation", "delete:federation", "view:federation",
      "create:club", "edit:club", "delete:club", "view:club",
      "view:analytics", "edit:settings"
    ],
    isOnline: true,
    presenceUpdatedAt: "2025-11-19T16:45:00Z",
    phoneNumber: "+27123456789",
    emailConfirmed: true,
    phoneConfirmed: true,
    bio: "Full-stack developer and team lead. Passionate about open source and mentoring.",
    physicalAddressId: "addr_001",
    socialLinks: [
      { id: "social_001", platform: "x", handler: "alicej", domainUrl: "https://x.com", parentEntityId: "user_101" },
      { id: "social_002", platform: "facebook", handler: "alicejohnson", domainUrl: "https://facebook.com", parentEntityId: "user_101" }
    ],
    preferences: { theme: "dark", notifications: { email: true, push: false } },
    createdAt: "2023-01-15T08:30:00Z",
    updatedAt: "2025-11-18T10:20:00Z",
    lastLoginAt: "2025-11-19T16:40:00Z",
    deletedAt: null
  },
  {
    id: "user_102",
    username: "bobsmith",
    email: "bob.s@example.com",
    firstName: "Bob",
    lastName: "Smith",
    avatarUrl: "https://i.pravatar.cc/150?img=2",
    isActive: true,
    roles: [USER_ROLES.GENERAL, USER_ROLES.ADMINISTRATOR],
    permissions: [
      "approve:club", "manage:organizations", "moderate:content", "manage:user_roles"
    ],
    isOnline: true,
    presenceUpdatedAt: "2025-11-19T16:30:00Z",
    phoneNumber: "+27987654321",
    emailConfirmed: true,
    phoneConfirmed: false,
    bio: "Backend developer with a focus on scalable systems.",
    physicalAddressId: "addr_002",
    socialLinks: [
      { id: "social_003", platform: "x", handler: "bobsmithdev", domainUrl: "https://x.com", parentEntityId: "user_102" }
    ],
    preferences: { theme: "light", notifications: { email: true, push: true } },
    createdAt: "2023-02-20T09:15:00Z",
    updatedAt: "2025-11-17T14:10:00Z",
    lastLoginAt: "2025-11-19T16:25:00Z",
    deletedAt: null
  },
  {
    id: "user_103",
    username: "charlieb",
    email: "charlie.b@example.com",
    firstName: "Charlie",
    lastName: "Brown",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
    isActive: true,
    roles: [USER_ROLES.GENERAL, USER_ROLES.OFFICIAL],
    permissions: [
      "officiate:match", "coach:team", "manage:training", "scout:players",
      "assess:player", "schedule:match", "manage:squad"
    ],
    isOnline: false,
    presenceUpdatedAt: "2025-11-19T15:00:00Z",
    phoneNumber: "+27456789123",
    emailConfirmed: true,
    phoneConfirmed: true,
    bio: "UI/UX designer and illustrator. Love creating intuitive user experiences.",
    physicalAddressId: "addr_003",
    socialLinks: [
      { id: "social_004", platform: "instagram", handler: "charliebrown_design", domainUrl: "https://instagram.com", parentEntityId: "user_103" }
    ],
    preferences: { theme: "dark", notifications: { email: false, push: true } },
    createdAt: "2023-03-10T11:00:00Z",
    updatedAt: "2025-11-16T11:30:00Z",
    lastLoginAt: "2025-11-19T15:00:00Z",
    deletedAt: null
  },
  {
    id: "user_104",
    username: "dianap",
    email: "diana.p@example.com",
    firstName: "Diana",
    lastName: "Prince",
    avatarUrl: "https://i.pravatar.cc/150?img=4",
    isActive: true,
    roles: [USER_ROLES.GENERAL, USER_ROLES.PLAYER],
    permissions: [
      "view:personal_stats", "edit:profile", "create:content", "join:team", "view:team_stats"
    ],
    isOnline: true,
    presenceUpdatedAt: "2025-11-19T16:40:00Z",
    phoneNumber: "+27789123456",
    emailConfirmed: true,
    phoneConfirmed: true,
    bio: "Project manager and occasional coder. Advocate for agile methodologies.",
    physicalAddressId: "addr_004",
    socialLinks: [
      { id: "social_006", platform: "facebook", handler: "dianaprince", domainUrl: "https://facebook.com", parentEntityId: "user_104" }
    ],
    preferences: { theme: "system", notifications: { email: true, push: true } },
    createdAt: "2023-04-05T10:45:00Z",
    updatedAt: "2025-11-15T09:20:00Z",
    lastLoginAt: "2025-11-19T16:35:00Z",
    deletedAt: null
  },
  {
    id: "user_105",
    username: "eveadams",
    email: "eve.a@example.com",
    firstName: "Eve",
    lastName: "Adams",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
    isActive: false,
    roles: [USER_ROLES.GENERAL],
    permissions: [
      "engage:content", "follow:teams", "view:public_stats"
    ],
    isOnline: false,
    presenceUpdatedAt: "2025-11-18T10:00:00Z",
    phoneNumber: undefined,
    emailConfirmed: false,
    phoneConfirmed: false,
    bio: undefined,
    physicalAddressId: "addr_004",
    socialLinks: [],
    preferences: { theme: "light" },
    createdAt: "2023-05-12T13:30:00Z",
    updatedAt: "2025-11-14T16:10:00Z",
    lastLoginAt: "2025-11-18T10:00:00Z",
    deletedAt: null
  },
  {
    id: "user_106",
    username: "frankw",
    email: "frank.w@example.com",
    firstName: "Frank",
    lastName: "Wilson",
    avatarUrl: "https://i.pravatar.cc/150?img=6",
    isActive: true,
    roles: [USER_ROLES.GENERAL, USER_ROLES.OFFICIAL],
    permissions: [
      "officiate:match", "coach:team", "manage:training", "scout:players",
      "assess:player", "schedule:match", "manage:squad"
    ],
    isOnline: true,
    presenceUpdatedAt: "2025-11-19T16:20:00Z",
    phoneNumber: "+27321654987",
    emailConfirmed: true,
    phoneConfirmed: true,
    bio: "DevOps engineer. Automating all the things.",
    physicalAddressId: "addr_005",
    socialLinks: [
      { id: "social_007", platform: "x", handler: "frankwilson", domainUrl: "https://x.com", parentEntityId: "user_106" }
    ],
    preferences: { theme: "dark", notifications: { email: false, push: false } },
    createdAt: "2023-06-18T15:20:00Z",
    updatedAt: "2025-11-13T12:40:00Z",
    lastLoginAt: "2025-11-19T16:15:00Z",
    deletedAt: null
  },
  {
    id: "user_107",
    username: "graceh",
    email: "grace.h@example.com",
    firstName: "Grace",
    lastName: "Harris",
    avatarUrl: "https://i.pravatar.cc/150?img=7",
    isActive: true,
    roles: [USER_ROLES.GENERAL, USER_ROLES.PLAYER],
    permissions: [
      "view:personal_stats", "edit:profile", "create:content", "join:team", "view:team_stats"
    ],
    isOnline: false,
    presenceUpdatedAt: "2025-11-19T14:00:00Z",
    phoneNumber: "+27654987321",
    emailConfirmed: true,
    phoneConfirmed: false,
    bio: "Frontend developer with a love for React and TypeScript.",
    physicalAddressId: "addr_006",
    socialLinks: [
      { id: "social_008", platform: "instagram", handler: "graceharris", domainUrl: "https://instagram.com", parentEntityId: "user_107" }
    ],
    preferences: { theme: "light", notifications: { email: true, push: false } },
    createdAt: "2023-07-22T16:50:00Z",
    updatedAt: "2025-11-12T10:50:00Z",
    lastLoginAt: "2025-11-19T14:00:00Z",
    deletedAt: null
  },
  {
    id: "user_108",
    username: "henrym",
    email: "henry.m@example.com",
    firstName: "Henry",
    lastName: "Martinez",
    avatarUrl: "https://i.pravatar.cc/150?img=8",
    isActive: true,
    roles: [USER_ROLES.GENERAL],
    permissions: [
      "engage:content", "follow:teams", "view:public_stats"
    ],
    isOnline: true,
    presenceUpdatedAt: "2025-11-19T16:10:00Z",
    phoneNumber: "+27147258369",
    emailConfirmed: true,
    phoneConfirmed: true,
    bio: "QA engineer. Breaking things so you don’t have to.",
    physicalAddressId: "addr_007",
    socialLinks: [],
    preferences: { theme: "system", notifications: { email: true, push: true } },
    createdAt: "2023-08-30T14:10:00Z",
    updatedAt: "2025-11-11T13:20:00Z",
    lastLoginAt: "2025-11-19T16:05:00Z",
    deletedAt: null
  },
  {
    id: "user_109",
    username: "ivyl",
    email: "ivy.l@example.com",
    firstName: "Ivy",
    lastName: "Lee",
    avatarUrl: "https://i.pravatar.cc/150?img=9",
    isActive: true,
    roles: [USER_ROLES.GENERAL, USER_ROLES.ADMINISTRATOR],
    permissions: [
      "approve:club", "manage:organizations", "moderate:content", "manage:user_roles"
    ],
    isOnline: true,
    presenceUpdatedAt: "2025-11-19T16:00:00Z",
    phoneNumber: "+27963258741",
    emailConfirmed: true,
    phoneConfirmed: true,
    bio: "Full-stack designer. Bridging the gap between design and development.",
    physicalAddressId: "addr_008",
    socialLinks: [
      { id: "social_009", platform: "tiktok", handler: "ivylee", domainUrl: "https://tiktok.com", parentEntityId: "user_109" }
    ],
    preferences: { theme: "dark", notifications: { email: false, push: true } },
    createdAt: "2023-09-15T12:30:00Z",
    updatedAt: "2025-11-10T15:30:00Z",
    lastLoginAt: "2025-11-19T16:00:00Z",
    deletedAt: null
  },
  {
    id: "user_111",
    username: "karenk",
    email: "karen.k@example.com",
    firstName: "Karen",
    lastName: "King",
    avatarUrl: "https://i.pravatar.cc/150?img=11",
    isActive: true,
    roles: [USER_ROLES.GENERAL, USER_ROLES.OWNER],
    permissions: [
      "create:system", "edit:system", "view:system", "delete:system",
      "create:user", "edit:user", "delete:user", "view:user",
      "create:federation", "edit:federation", "delete:federation", "view:federation",
      "create:club", "edit:club", "delete:club", "view:club",
      "view:analytics", "edit:settings"
    ],
    isOnline: true,
    presenceUpdatedAt: "2025-11-19T15:50:00Z",
    phoneNumber: "+27753159864",
    emailConfirmed: true,
    phoneConfirmed: true,
    bio: "Product manager. Turning ideas into reality.",
    physicalAddressId: "addr_009",
    socialLinks: [
      { id: "social_010", platform: "facebook", handler: "karenkingpm", domainUrl: "https://facebook.com", parentEntityId: "user_111" }
    ],
    preferences: { theme: "system", notifications: { email: true, push: true } },
    createdAt: "2023-11-25T09:40:00Z",
    updatedAt: "2025-11-08T14:50:00Z",
    lastLoginAt: "2025-11-19T15:45:00Z",
    deletedAt: null
  },
  {
    id: "user_112",
    username: "leol",
    email: "leo.l@example.com",
    firstName: "Leo",
    lastName: "Lewis",
    avatarUrl: "https://i.pravatar.cc/150?img=12",
    isActive: true,
    roles: [USER_ROLES.GENERAL, USER_ROLES.PLAYER],
    permissions: [
      "view:personal_stats", "edit:profile", "create:content", "join:team", "view:team_stats"
    ],
    isOnline: false,
    presenceUpdatedAt: "2025-11-19T13:00:00Z",
    phoneNumber: "+27852369741",
    emailConfirmed: true,
    phoneConfirmed: false,
    bio: "Mobile developer. Building apps for iOS and Android.",
    physicalAddressId: "addr_006",
    socialLinks: [
      { id: "social_011", platform: "youtube", handler: "leolewis", domainUrl: "https://youtube.com", parentEntityId: "user_112" }
    ],
    preferences: { theme: "dark", notifications: { email: true, push: false } },
    createdAt: "2023-12-30T16:20:00Z",
    updatedAt: "2025-11-07T10:20:00Z",
    lastLoginAt: "2025-11-19T13:00:00Z",
    deletedAt: null
  },
  {
    id: "user_113",
    username: "monicat",
    email: "monica.t@example.com",
    firstName: "Monica",
    lastName: "Taylor",
    avatarUrl: "https://i.pravatar.cc/150?img=13",
    isActive: true,
    roles: [USER_ROLES.GENERAL, USER_ROLES.OFFICIAL],
    permissions: [
      "officiate:match", "coach:team", "manage:training", "scout:players",
      "assess:player", "schedule:match", "manage:squad"
    ],
    isOnline: true,
    presenceUpdatedAt: "2025-11-19T15:30:00Z",
    phoneNumber: "+27369852147",
    emailConfirmed: true,
    phoneConfirmed: true,
    bio: "Cloud engineer. Helping teams scale with confidence.",
    physicalAddressId: "addr_009",
    socialLinks: [
      { id: "social_012", platform: "x", handler: "monicataylor", domainUrl: "https://x.com", parentEntityId: "user_113" }
    ],
    preferences: { theme: "light", notifications: { email: false, push: true } },
    createdAt: "2024-01-10T11:10:00Z",
    updatedAt: "2025-11-06T12:30:00Z",
    lastLoginAt: "2025-11-19T15:25:00Z",
    deletedAt: null
  },
  {
    id: "user_114",
    username: "nathanw",
    email: "nathan.w@example.com",
    firstName: "Nathan",
    lastName: "White",
    avatarUrl: "https://i.pravatar.cc/150?img=14",
    isActive: true,
    roles: [USER_ROLES.GENERAL, USER_ROLES.ADMINISTRATOR],
    permissions: [
      "approve:club", "manage:organizations", "moderate:content", "manage:user_roles"
    ],
    isOnline: true,
    presenceUpdatedAt: "2025-11-19T15:10:00Z",
    phoneNumber: "+27159753468",
    emailConfirmed: true,
    phoneConfirmed: true,
    bio: "Software engineer with a passion for clean code and testing.",
    physicalAddressId: "addr_004",
    socialLinks: [
      { id: "social_013", platform: "instagram", handler: "nathanwhite", domainUrl: "https://instagram.com", parentEntityId: "user_114" }
    ],
    preferences: { theme: "system", notifications: { email: true, push: true } },
    createdAt: "2024-02-14T13:50:00Z",
    updatedAt: "2025-11-05T15:10:00Z",
    lastLoginAt: "2025-11-19T15:05:00Z",
    deletedAt: null
  },
  {
    id: "user_115",
    username: "oliviaa",
    email: "olivia.a@example.com",
    firstName: "Olivia",
    lastName: "Anderson",
    avatarUrl: "https://i.pravatar.cc/150?img=15",
    isActive: false,
    roles: [USER_ROLES.GENERAL],
    permissions: [
      "engage:content", "follow:teams", "view:public_stats"
    ],
    isOnline: false,
    presenceUpdatedAt: "2025-11-18T08:00:00Z",
    phoneNumber: undefined,
    emailConfirmed: false,
    phoneConfirmed: false,
    bio: undefined,
    physicalAddressId: "addr_008",
    socialLinks: [],
    preferences: { theme: "light" },
    createdAt: "2024-03-19T10:30:00Z",
    updatedAt: "2025-11-04T11:20:00Z",
    lastLoginAt: "2025-11-18T08:00:00Z",
    deletedAt: null
  },
  {
    id: "user_116",
    username: "paulb",
    email: "paul.b@example.com",
    firstName: "Paul",
    lastName: "Brown",
    avatarUrl: "https://i.pravatar.cc/150?img=16",
    isActive: true,
    roles: [USER_ROLES.GENERAL, USER_ROLES.PLAYER],
    permissions: [
      "view:personal_stats", "edit:profile", "create:content", "join:team", "view:team_stats"
    ],
    isOnline: true,
    presenceUpdatedAt: "2025-11-19T14:50:00Z",
    phoneNumber: "+27741258963",
    emailConfirmed: true,
    phoneConfirmed: true,
    bio: "Graphic designer and brand specialist.",
    physicalAddressId: "addr_010",
    socialLinks: [
      { id: "social_014", platform: "instagram", handler: "paulbrown", domainUrl: "https://instagram.com", parentEntityId: "user_116" }
    ],
    preferences: { theme: "dark", notifications: { email: false, push: true } },
    createdAt: "2024-04-23T15:00:00Z",
    updatedAt: "2025-11-03T14:00:00Z",
    lastLoginAt: "2025-11-19T14:45:00Z",
    deletedAt: null
  },
  {
    id: "user_117",
    username: "quinnc",
    email: "quinn.c@example.com",
    firstName: "Quinn",
    lastName: "Clark",
    avatarUrl: "https://i.pravatar.cc/150?img=17",
    isActive: true,
    roles: [USER_ROLES.GENERAL, USER_ROLES.OFFICIAL],
    permissions: [
      "officiate:match", "coach:team", "manage:training", "scout:players",
      "assess:player", "schedule:match", "manage:squad"
    ],
    isOnline: false,
    presenceUpdatedAt: "2025-11-19T12:00:00Z",
    phoneNumber: "+27936521478",
    emailConfirmed: true,
    phoneConfirmed: false,
    bio: "JavaScript enthusiast. Always learning new frameworks.",
    physicalAddressId: "äddr_01",
    socialLinks: [
      { id: "social_015", platform: "x", handler: "quinnclark", domainUrl: "https://x.com", parentEntityId: "user_117" }
    ],
    preferences: { theme: "light", notifications: { email: true, push: false } },
    createdAt: "2024-05-28T16:40:00Z",
    updatedAt: "2025-11-02T10:10:00Z",
    lastLoginAt: "2025-11-19T12:00:00Z",
    deletedAt: null
  },
  {
    id: "user_118",
    username: "racheld",
    email: "rachel.d@example.com",
    firstName: "Rachel",
    lastName: "Davis",
    avatarUrl: "https://i.pravatar.cc/150?img=18",
    isActive: true,
    roles: [USER_ROLES.GENERAL, USER_ROLES.OWNER],
    permissions: [
      "create:system", "edit:system", "view:system", "delete:system",
      "create:user", "edit:user", "delete:user", "view:user",
      "create:federation", "edit:federation", "delete:federation", "view:federation",
      "create:club", "edit:club", "delete:club", "view:club",
      "view:analytics", "edit:settings"
    ],
    isOnline: true,
    presenceUpdatedAt: "2025-11-19T14:30:00Z",
    phoneNumber: "+27863259741",
    emailConfirmed: true,
    phoneConfirmed: true,
    bio: "Tech lead and mentor. Helping teams grow and succeed.",
    physicalAddressId: "addr_002",
    socialLinks: [
      { id: "social_016", platform: "facebook", handler: "racheldavis", domainUrl: "https://facebook.com", parentEntityId: "user_118" }
    ],
    preferences: { theme: "system", notifications: { email: true, push: true } },
    createdAt: "2024-06-30T12:20:00Z",
    updatedAt: "2025-11-01T13:30:00Z",
    lastLoginAt: "2025-11-19T14:25:00Z",
    deletedAt: null
  },
  {
    id: "user_119",
    username: "samuelev",
    email: "samuel.e@example.com",
    firstName: "Samuel",
    lastName: "Evans",
    avatarUrl: "https://i.pravatar.cc/150?img=19",
    isActive: true,
    roles: [USER_ROLES.GENERAL, USER_ROLES.ADMINISTRATOR],
    permissions: [
      "approve:club", "manage:organizations", "moderate:content", "manage:user_roles"
    ],
    isOnline: true,
    presenceUpdatedAt: "2025-11-19T14:00:00Z",
    phoneNumber: "+27321478569",
    emailConfirmed: true,
    phoneConfirmed: true,
    bio: "Infrastructure as code advocate. Building reliable systems.",
    physicalAddressId: "addr_004",
    socialLinks: [
      { id: "social_017", platform: "youtube", handler: "samuelevans", domainUrl: "https://youtube.com", parentEntityId: "user_119" }
    ],
    preferences: { theme: "dark", notifications: { email: false, push: true } },
    createdAt: "2024-07-05T10:50:00Z",
    updatedAt: "2025-10-31T15:40:00Z",
    lastLoginAt: "2025-11-19T14:00:00Z",
    deletedAt: null
  },
  {
    id: "user_120",
    username: "tinag",
    email: "tina.g@example.com",
    firstName: "Tina",
    lastName: "Garcia",
    avatarUrl: "https://i.pravatar.cc/150?img=20",
    isActive: true,
    roles: [USER_ROLES.GENERAL, USER_ROLES.PLAYER],
    permissions: [
      "view:personal_stats", "edit:profile", "create:content", "join:team", "view:team_stats"
    ],
    isOnline: true,
    presenceUpdatedAt: "2025-11-19T13:30:00Z",
    phoneNumber: "+27789654123",
    emailConfirmed: true,
    phoneConfirmed: true,
    bio: "Creative developer. Making the web beautiful and functional.",
    physicalAddressId: "addr_006",
    socialLinks: [
      { id: "social_018", platform: "tiktok", handler: "tinagarcia", domainUrl: "https://tiktok.com", parentEntityId: "user_120" }
    ],
    preferences: { theme: "light", notifications: { email: true, push: false } },
    createdAt: "2024-08-09T14:30:00Z",
    updatedAt: "2025-10-30T12:50:00Z",
    lastLoginAt: "2025-11-19T13:25:00Z",
    deletedAt: null
  }
];
