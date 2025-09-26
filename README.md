# KasiPlay ⚽
**Comprehensive Sports Team Management Platform**

KasiPlay is a modern SaaS platform designed to streamline sports team management, from player registration and squad formation to real-time communication and public content sharing. Built for managers, coaches, and players at all levels.

## 🌟 Features

### Core Management
- **Player Registration & Management** - Complete player database with profiles and statistics
- **Team Creation & Squad Management** - Build and organize teams with flexible roster management
- **Content/Media Sharing** - Share media with the fans/public for engagement
- **Role-Based Access Control** - Different permission levels for managers, coaches, and players
- **Multi-Tenant Architecture** - Isolated team spaces with custom branding

### Communication Hub
- **Real-Time Messaging** - Instant communication between managers, coaches, and players
- **Notification System** - Team updates, match alerts, and important announcements
- **Internal Forums** - Team discussions and strategy planning

### Performance & Analytics
- **Player Statistics** - Comprehensive performance tracking and analytics
- **Match Management** - Game scheduling, results, and detailed match reports
- **Training Sessions** - Schedule and track training activities

### Content Management
- **Video Sharing** - Upload and share team highlights, training videos, and tactics
- **Public Content** - Share promotional content with fans and supporters
- **Media Library** - Organized storage for all team media assets

### Scheduling & Planning
- **Match Scheduling** - Complete fixture management with calendar integration
- **Training Management** - Plan and track training sessions
- **Availability Tracking** - Player availability and attendance monitoring

## 🛠️ Tech Stack

### Backend
- **C#** - Core backend development
- **ASP.NET Core** - Web API framework
- **Entity Framework Core** - Database ORM
- **SignalR** - Real-time communication
- **Azure** - Cloud hosting and services

### Frontend
- **Vue.js 3** - Progressive JavaScript framework
- **Nuxt.js** - Vue.js application framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **Phosphor Icons** - Modern icon library

### Features
- **Composition API** - Modern Vue.js development
- **Responsive Design** - Mobile-first approach
- **Dark/Light Themes** - Dynamic theme switching
- **Real-Time Updates** - Live data synchronization
- **Progressive Web App** - Mobile app experience

## 🎯 Target Users

### 👔 Managers
- Full platform access
- Team and financial management
- Player contracts and transfers
- Strategic oversight

### 🏃‍♂️ Coaches
- Tactical planning and analysis
- Training session management
- Player performance tracking
- Match preparation

### ⚽ Players
- Personal statistics and progress
- Team communications
- Schedule and availability updates
- Limited administrative access

## 🏗️ Architecture

## 🏛️ System Design

KasiPlay is designed with a **clear domain model** to represent all users, roles, teams, and matches. The platform follows an object-oriented hierarchy to ensure maintainability, extensibility, and clarity of responsibilities.

### 1. Users

#### 1.1 ApplicationUser
- Base entity for all platform users.
- Common fields: `id`, `username`, `email`, `firstName`, `lastName`, `createdAt`, `updatedAt` etc.

#### 1.2 Officials
Base type for all officials with common properties such as `startDate`, `endDate`, and role-specific information.

- **1.2.1 LeagueOfficial**  
  - Base for all league-level officials.  
  - Examples:  
    - Referee  
    - AssistantReferee  
    - FourthOfficial  
    - VideoAssistantReferee  

- **1.2.2 ClubOfficial**  
  - Base for all club-level officials.  
  - Examples:  
    - Manager  
    - Coach  
    - President  
    - Director  

- **1.2.3 Staff**  
  - Base for all non-official staff members.  
  - Examples:  
    - Analyst  
    - Physiotherapist  
    - MedicalStaff  

### 2. Clubs / Teams / Organizations
- Represents a club or team in the system.
- Properties include: name, logo, colors, roster, officials, staff, and matches.

### 3. Players
- Inherits from `ApplicationUser`.
- Properties include: statistics, position, status, contracts, and team membership.

### 4. Matches
- Represents a single match between teams.
- Includes: schedule, type, status, participating players, officials, and events.

### 5. Match Events
- Events that occur during a match, such as:  
  - Goal  
  - Foul  
  - Card  
  - Substitution  
- Each event is linked to players, officials, and the match itself.

### 6. System Relationships
- **Users ↔ Teams**: Players, Officials, and Staff are associated with one or more teams.  
- **Matches ↔ Teams**: Matches are scheduled between two teams.  
- **Matches ↔ Events**: Match events record in-game actions and statistics.  
- **Officials ↔ Matches**: Officials are assigned to matches based on role and availability.  
- **Staff ↔ Teams**: Staff members support teams in training, analytics, and health management.


### Multi-Tenant SaaS
- **Isolated Data Spaces** - Each team/club operates independently
- **Custom Branding** - Team colors, logos, and personalization
- **Scalable Infrastructure** - Supports growth from local clubs to professional leagues

### Subscription Tiers
- **Starter** - Perfect for amateur clubs and small teams
- **Professional** - Advanced features for competitive teams
- **Enterprise** - Multi-team management for leagues and academies


## 🚀 Getting Started

### Prerequisites
- .NET 8.0 SDK
- Node.js 18+ 
- SQL Server or PostgreSQL
- Azure account (for deployment)

### Backend Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/kasiplay.git
cd kasiplay/backend

# Restore dependencies
dotnet restore

# Update database
dotnet ef database update

# Run the application
dotnet run
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📱 Responsive Design

KasiPlay features a mobile-first design with:
- **3-State Sidebar** - Hidden, collapsed (icons only), or fully expanded
- **Smooth Animations** - Polished user experience across all devices
- **Touch-Friendly Interface** - Optimized for tablets and mobile devices
- **Progressive Enhancement** - Works seamlessly from phones to desktops

## 🔐 Security & Compliance

- **Role-Based Access Control (RBAC)**
- **Data Encryption** - At rest and in transit
- **GDPR Compliance** - Privacy-focused data handling
- **Audit Trails** - Complete activity logging
- **Secure APIs** - JWT authentication and authorization

## 🌍 Deployment

### Development
- Local development with Docker Compose
- Hot reloading for both frontend and backend

### Production
- **Azure App Services** - Scalable web hosting
- **Azure SQL Database** - Managed database service
- **Azure Blob Storage** - Media and file storage
- **Azure SignalR Service** - Real-time communication at scale

## 📊 Monitoring & Analytics

- **Application Insights** - Performance monitoring
- **Usage Analytics** - Feature adoption tracking
- **Error Tracking** - Comprehensive error monitoring
- **Performance Metrics** - Real-time system health

<!-- ## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request -->

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Documentation**: [docs.kasiplay.com](https://docs.kasiplay.com)
- **Email**: support@kasiplay.com
- **Issues**: [GitHub Issues](https://github.com/yourusername/kasiplay/issues)

## 🎉 Roadmap

- [ ] **Mobile Apps** - Native iOS and Android applications
- [ ] **Advanced Analytics** - AI-powered player insights
- [ ] **League Management** - Multi-team tournament organization
- [ ] **Integration APIs** - Third-party sports data integration
- [ ] **Live Streaming** - Match broadcasting capabilities
- [ ] **E-commerce Integration** - Team merchandise and ticketing

---

<div align="center">

**Built with ❤️ by the KasiPlay Team**

[Website](https://kasiplay.com) • [Documentation](https://docs.kasiplay.com) • [Support](mailto:support@kasiplay.com)

</div>