import type { Message } from "~/types/models/message";

export const messages: Message[] = [
  {
    id: "msg_001",
    senderId: "user_101",
    text: "Hi everyone! Just wanted to check in on the project status.",
    timestamp: "2025-11-19T09:15:00Z",
    readerIds: ["user_102", "user_103"],
    readers: [
      { id: "user_102", name: "Bob Smith", email: "bob.s@example.com" },
      { id: "user_103", name: "Charlie Brown", email: "charlie.b@example.com" }
    ],
    media: [
      { id: "media_001", url: "https://example.com/files/project_status.pdf", type: "application/pdf" }
    ],
    createdAt: new Date("2025-11-19T09:15:00Z"),
    updatedAt: new Date("2025-11-19T09:15:00Z")
  },
  {
    id: "msg_002",
    senderId: "user_102",
    sender: {
      id: "user_102",
      name: "Bob Smith",
      email: "bob.s@example.com",
      avatar: "https://example.com/avatars/bob.jpg"
    },
    text: "The design draft is ready for review. Please see attached.",
    timestamp: "2025-11-19T10:30:00Z",
    readerIds: ["user_101", "user_104"],
    readers: [
      { id: "user_101", name: "Alice Johnson", email: "alice.j@example.com" },
      { id: "user_104", name: "Diana Prince", email: "diana.p@example.com" }
    ],
    media: [
      { id: "media_002", url: "https://example.com/files/design_draft.fig", type: "application/figma" }
    ],
    createdAt: new Date("2025-11-19T10:30:00Z"),
    updatedAt: new Date("2025-11-19T10:30:00Z")
  },
  {
    id: "msg_003",
    senderId: "user_103",
    sender: {
      id: "user_103",
      name: "Charlie Brown",
      email: "charlie.b@example.com",
      avatar: "https://example.com/avatars/charlie.jpg"
    },
    text: "Meeting reminder: Tomorrow at 2 PM in the main conference room.",
    timestamp: "2025-11-19T11:45:00Z",
    readerIds: ["user_101", "user_102", "user_104"],
    readers: [
      { id: "user_101", name: "Alice Johnson", email: "alice.j@example.com" },
      { id: "user_102", name: "Bob Smith", email: "bob.s@example.com" },
      { id: "user_104", name: "Diana Prince", email: "diana.p@example.com" }
    ],
    createdAt: new Date("2025-11-19T11:45:00Z"),
    updatedAt: new Date("2025-11-19T11:45:00Z")
  },
  {
    id: "msg_004",
    senderId: "user_104",
    sender: {
      id: "user_104",
      name: "Diana Prince",
      email: "diana.p@example.com",
      avatar: "https://example.com/avatars/diana.jpg"
    },
    text: "I’ve updated the documentation. Let me know if you spot any issues.",
    timestamp: "2025-11-19T13:00:00Z",
    readerIds: ["user_101", "user_103"],
    readers: [
      { id: "user_101", name: "Alice Johnson", email: "alice.j@example.com" },
      { id: "user_103", name: "Charlie Brown", email: "charlie.b@example.com" }
    ],
    media: [
      { id: "media_003", url: "https://example.com/files/documentation_update.docx", type: "application/msword" }
    ],
    createdAt: new Date("2025-11-19T13:00:00Z"),
    updatedAt: new Date("2025-11-19T13:00:00Z")
  },
  {
    id: "msg_005",
    senderId: "user_101",
    sender: {
      id: "user_101",
      name: "Alice Johnson",
      email: "alice.j@example.com",
      avatar: "https://example.com/avatars/alice.jpg"
    },
    text: "Quick question: What’s the deadline for the client feedback?",
    timestamp: "2025-11-19T14:15:00Z",
    readerIds: ["user_102"],
    readers: [
      { id: "user_102", name: "Bob Smith", email: "bob.s@example.com" }
    ],
    createdAt: new Date("2025-11-19T14:15:00Z"),
    updatedAt: new Date("2025-11-19T14:15:00Z")
  },
  {
    id: "msg_006",
    senderId: "user_102",
    sender: {
      id: "user_102",
      name: "Bob Smith",
      email: "bob.s@example.com",
      avatar: "https://example.com/avatars/bob.jpg"
    },
    text: "The deadline is EOD Friday. I’ll send a reminder to the client.",
    timestamp: "2025-11-19T14:30:00Z",
    readerIds: ["user_101"],
    readers: [
      { id: "user_101", name: "Alice Johnson", email: "alice.j@example.com" }
    ],
    createdAt: new Date("2025-11-19T14:30:00Z"),
    updatedAt: new Date("2025-11-19T14:30:00Z")
  },
  {
    id: "msg_007",
    senderId: "user_103",
    sender: {
      id: "user_103",
      name: "Charlie Brown",
      email: "charlie.b@example.com",
      avatar: "https://example.com/avatars/charlie.jpg"
    },
    text: "Has anyone tested the new API endpoint?",
    timestamp: "2025-11-19T15:45:00Z",
    readerIds: ["user_101", "user_104"],
    readers: [
      { id: "user_101", name: "Alice Johnson", email: "alice.j@example.com" },
      { id: "user_104", name: "Diana Prince", email: "diana.p@example.com" }
    ],
    createdAt: new Date("2025-11-19T15:45:00Z"),
    updatedAt: new Date("2025-11-19T15:45:00Z")
  },
  {
    id: "msg_008",
    senderId: "user_104",
    sender: {
      id: "user_104",
      name: "Diana Prince",
      email: "diana.p@example.com",
      avatar: "https://example.com/avatars/diana.jpg"
    },
    text: "Yes, I tested it this morning. All good on my end.",
    timestamp: "2025-11-19T16:00:00Z",
    readerIds: ["user_101", "user_103"],
    readers: [
      { id: "user_101", name: "Alice Johnson", email: "alice.j@example.com" },
      { id: "user_103", name: "Charlie Brown", email: "charlie.b@example.com" }
    ],
    createdAt: new Date("2025-11-19T16:00:00Z"),
    updatedAt: new Date("2025-11-19T16:00:00Z")
  },
  {
    id: "msg_009",
    senderId: "user_101",
    sender: {
      id: "user_101",
      name: "Alice Johnson",
      email: "alice.j@example.com",
      avatar: "https://example.com/avatars/alice.jpg"
    },
    text: "Great! Let’s plan to deploy tomorrow if everything looks good.",
    timestamp: "2025-11-19T16:15:00Z",
    readerIds: ["user_102", "user_103", "user_104"],
    readers: [
      { id: "user_102", name: "Bob Smith", email: "bob.s@example.com" },
      { id: "user_103", name: "Charlie Brown", email: "charlie.b@example.com" },
      { id: "user_104", name: "Diana Prince", email: "diana.p@example.com" }
    ],
    createdAt: new Date("2025-11-19T16:15:00Z"),
    updatedAt: new Date("2025-11-19T16:15:00Z")
  },
  {
    id: "msg_010",
    senderId: "user_102",
    sender: {
      id: "user_102",
      name: "Bob Smith",
      email: "bob.s@example.com",
      avatar: "https://example.com/avatars/bob.jpg"
    },
    text: "Sounds good. I’ll prepare the release notes.",
    timestamp: "2025-11-19T16:30:00Z",
    readerIds: ["user_101"],
    readers: [
      { id: "user_101", name: "Alice Johnson", email: "alice.j@example.com" }
    ],
    createdAt: new Date("2025-11-19T16:30:00Z"),
    updatedAt: new Date("2025-11-19T16:30:00Z")
  }
];
