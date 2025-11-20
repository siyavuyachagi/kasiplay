import type { PhysicalAddress } from "~/types/models/physical-address";

export const addresses: PhysicalAddress[] = [
    {
        id: "addr_001",
        street: "123 Long Street",
        city: "Cape Town",
        suburb: "City Bowl",
        zipCode: "8001",
        country: "South Africa",
        userIds: ["user_101", "user_102"],
        createdAt: new Date("2023-01-15T08:30:00Z"),
        updatedAt: new Date("2025-11-18T10:20:00Z")
    },
    {
        id: "addr_002",
        street: "456 Oak Avenue",
        city: "Johannesburg",
        suburb: "Sandton",
        zipCode: "2196",
        country: "South Africa",
        userIds: ["user_102", "user_104"],
        createdAt: new Date("2023-02-20T09:15:00Z"),
        updatedAt: new Date("2025-11-17T14:10:00Z")
    },
    {
        id: "addr_003",
        street: "789 Beach Road",
        city: "Durban",
        suburb: "Umdlotshana",
        zipCode: "4001",
        country: "South Africa",
        userIds: ["user_103"],
        createdAt: new Date("2023-03-10T11:00:00Z"),
        updatedAt: new Date("2025-11-16T11:30:00Z")
    },
    {
        id: "addr_004",
        street: "321 Church Street",
        city: "Pretoria",
        suburb: "Arcadia",
        zipCode: "0083",
        country: "South Africa",
        userIds: ["user_104", "user_105"],
        createdAt: new Date("2023-04-05T10:45:00Z"),
        updatedAt: new Date("2025-11-15T09:20:00Z")
    },
    {
        id: "addr_005",
        street: "654 Main Road",
        city: "Port Elizabeth",
        suburb: "Walmer",
        zipCode: "6070",
        country: "South Africa",
        userIds: ["user_106"],
        createdAt: new Date("2023-06-18T15:20:00Z"),
        updatedAt: new Date("2025-11-13T12:40:00Z")
    },
    {
        id: "addr_006",
        street: "987 Park Lane",
        city: "Bloemfontein",
        suburb: "Bayswater",
        zipCode: "9301",
        country: "South Africa",
        userIds: ["user_107"],
        createdAt: new Date("2023-07-22T16:50:00Z"),
        updatedAt: new Date("2025-11-12T10:50:00Z")
    },
    {
        id: "addr_007",
        street: "135 High Street",
        city: "East London",
        suburb: "Nahoon",
        zipCode: "5241",
        country: "South Africa",
        userIds: ["user_108"],
        createdAt: new Date("2023-08-30T14:10:00Z"),
        updatedAt: new Date("2025-11-11T13:20:00Z")
    },
    {
        id: "addr_008",
        street: "379 River Road",
        city: "Kimberley",
        suburb: "Rondebosch",
        zipCode: "8301",
        country: "South Africa",
        userIds: ["user_109"],
        createdAt: new Date("2023-09-15T12:30:00Z"),
        updatedAt: new Date("2025-11-10T15:30:00Z")
    },
    {
        id: "addr_009",
        street: "246 Lake View",
        city: "Polokwane",
        suburb: "Sterpark",
        zipCode: "0699",
        country: "South Africa",
        userIds: ["user_111"],
        createdAt: new Date("2023-11-25T09:40:00Z"),
        updatedAt: new Date("2025-11-08T14:50:00Z")
    },
    {
        id: "addr_010",
        street: "864 Mountain Drive",
        city: "Stellenbosch",
        suburb: "Paradyskloof",
        zipCode: "7600",
        country: "South Africa",
        userIds: ["user_116"],
        createdAt: new Date("2024-04-23T15:00:00Z"),
        updatedAt: new Date("2025-11-03T14:00:00Z")
    }
];
