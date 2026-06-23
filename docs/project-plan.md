# CareerPath AI — Project Plan

## 1. Project Overview

CareerPath AI is an AI-powered career and growth tracking platform designed for students, interns, and early-career professionals.

The platform aims to help users track their personal and professional development in a structured way. Users will be able to define goals, create tasks, record daily progress, complete assessments, view dashboard analytics, and receive AI-powered development recommendations based on their activity.

The long-term vision of the platform is not limited to a single profession or technical field. CareerPath AI is planned as a flexible system that can later support different career paths such as software development, data analysis, product management, marketing, finance, design, and other internship or early-career areas.

However, the first MVP will focus on the software intern / junior developer scenario. This makes the project realistic for the internship period while keeping the architecture flexible enough to be expanded later.

## 2. Short-Term Goal

The short-term goal is to develop a working MVP during the internship period between 22 June and 28 August.

The MVP should be completed before the final weeks of the internship. The target date for a working MVP is 14 August. The final two weeks will be used for testing, documentation, demo preparation, and improvements.

## 3. Long-Term Goal

After the internship MVP, the project can be expanded into a graduation project.

Possible long-term improvements include:

* Mobile companion application
* Notification and reminder system
* Mentor panel
* Admin panel
* Advanced assessment system
* Code evaluation module
* CV and interview preparation module
* Personalized learning plans
* More advanced AI analysis
* Multi-career support
* Docker and deployment
* CI/CD pipeline

## 4. MVP Scope

The MVP will include the following core modules:

### User System

* User registration
* User login
* User-specific data
* JWT authentication in the authentication phase

### Goal Tracking

* Create goals
* View goals
* Update goals
* Delete goals
* Track goal progress

### Task Tracking

* Create tasks
* List tasks
* Mark tasks as completed
* Associate tasks with goals
* Filter tasks by status

### Daily Progress Logs

* Add daily progress records
* Record what was completed during the day
* Record what was learned
* Record problems faced
* Record solutions or notes
* Track time spent
* List previous daily logs

### Assessment Module

* List assessment categories
* Display questions
* Submit answers
* Calculate score
* Save assessment results
* Show category-based performance

### Dashboard

* Show active goals
* Show completed tasks
* Show daily log count
* Show assessment success rate
* Show category-based performance
* Show recent activity

### AI-Powered Recommendations

* Analyze user progress data
* Generate weekly growth insights
* Suggest focus areas
* Provide personalized development recommendations

## 5. Out of MVP Scope

The following features are not required for the first MVP:

* Mobile application
* Mentor panel
* Admin panel
* CV analysis
* Interview simulation
* Advanced code execution system
* PDF export
* Docker
* CI/CD
* Deployment
* Full multi-career content support

These features may be added later if the project is expanded into a graduation project.

## 6. Technology Stack

### Frontend

* React
* TypeScript
* Vite

Planned frontend tools:

* React Router
* Tailwind CSS
* shadcn/ui
* TanStack Query
* React Hook Form
* Zod
* Recharts

### Backend

* ASP.NET Core Web API
* C#

Planned backend tools:

* Entity Framework Core
* JWT Authentication
* OpenAPI / Swagger

### Database

* SQL Server

### AI

* Ollama local model or an alternative AI provider
* AI service layer planned for flexible integration

### Version Control

* Git
* GitHub

## 7. Internship Roadmap

### Week 1 — 22 June - 26 June

Focus: Project definition and initial setup

Tasks:

* Define project idea
* Determine MVP scope
* Select technologies
* Create project folder structure
* Initialize Git repository
* Create React frontend project
* Create ASP.NET Core Web API backend project
* Add health check endpoint
* Configure CORS
* Test frontend-backend connection
* Push project to GitHub
* Write initial documentation

### Week 2 — 29 June - 3 July

Focus: Web interface structure

Tasks:

* Set up React Router
* Create application layout
* Create sidebar and topbar
* Create page skeletons
* Create login and register page drafts
* Create dashboard draft
* Create goals, tasks, daily logs, assessments, reports, and profile page drafts

### Week 3 — 6 July - 10 July

Focus: User system and authentication

Tasks:

* Create user model
* Configure database connection
* Set up Entity Framework Core
* Create register endpoint
* Create login endpoint
* Add password hashing
* Add JWT token generation
* Connect frontend login/register forms to backend
* Add protected route structure

### Week 4 — 13 July - 17 July

Focus: Goal and task tracking

Tasks:

* Create goal model
* Create task model
* Create CRUD endpoints
* Connect frontend goal and task pages to backend
* Add task completion feature
* Calculate basic goal progress

### Week 5 — 20 July - 24 July

Focus: Daily progress log module

Tasks:

* Create daily log model
* Create daily log endpoints
* Add daily log form
* List previous daily logs
* Add date-based filtering
* Display recent daily logs on dashboard

### Week 6 — 27 July - 31 July

Focus: Assessment module

Tasks:

* Create assessment category model
* Create question model
* Create answer option model
* Create user answer and attempt models
* Add assessment category page
* Add quiz screen
* Add result calculation
* Save assessment results
* Add sample assessment data

### Week 7 — 3 August - 7 August

Focus: Dashboard and analytics

Tasks:

* Create dashboard summary endpoint
* Show goal statistics
* Show task statistics
* Show daily log statistics
* Show assessment success rate
* Show category-based performance
* Add basic charts and cards

### Week 8 — 10 August - 14 August

Focus: AI recommendation and MVP completion

Tasks:

* Create AI service structure
* Prepare user progress summary for AI
* Create weekly growth insight prompt
* Generate AI-powered recommendations
* Display AI insights on dashboard
* Complete MVP flow testing

### Week 9 — 17 August - 21 August

Focus: Testing and improvements

Tasks:

* Fix UI issues
* Improve form validation
* Improve backend error handling
* Add empty states
* Add loading and error states
* Prepare sample data
* Update documentation

### Week 10 — 24 August - 28 August

Focus: Demo and final documentation

Tasks:

* Prepare demo scenario
* Finalize README
* Document project architecture
* Document used technologies
* List API endpoints
* Prepare internship progress notes
* Run final tests
