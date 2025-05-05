# 🧠 AI Fullstack Project

This repository contains the **AI Fullstack** project — an intelligent job application tracking system that merges traditional full-stack web development with AI capabilities to streamline and enhance the job search experience.

## 🚀 Project Overview

AI Fullstack is a modern, end-to-end web application that empowers job seekers to efficiently manage, analyze, and optimize their job applications. It leverages artificial intelligence to:

- Score resume-job description compatibility using NLP.
- Recommend improvements to resumes or applications.
- Track application statuses, interviews, and notes via a clean dashboard.

This project showcases how AI can be practically embedded into full-stack architecture, demonstrating intelligent decision-making and user-centric design.

## 🧠 Technologies Used

- **Backend**: Java + Spring Boot (REST API, JWT Authentication)
- **Frontend**: React.js (UI/UX)
- **AI Module**: Python (Flask or FastAPI microservice for NLP & ML tasks)
- **Database**: MongoDB
- **Dev Tools**: Postman, VS Code, Git

## 📌 Applications

- **Career Platforms**: Can be extended to work as a backend engine for platforms like LinkedIn or Glassdoor.
- **Job Portals**: Useful for integrating resume match scoring in job boards.
- **Recruitment Software**: Can serve as a prototype for intelligent ATS (Applicant Tracking Systems).
- **University Career Centers**: Helps students manage applications and gain resume suggestions.
- **Freelance Platforms**: Enhance matching of freelancer profiles to projects or gigs.

## ✅ Prerequisites

Ensure the following are installed on your system:

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Node.js & npm](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Python 3.9+](https://www.python.org/) (for AI microservices)
- [Visual Studio Code](https://code.visualstudio.com/)

## 📦 Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/shiviboi360/fullstack_jobtrack.git
    cd fullstack_jobtrack
    ```

2. **Set up the backend**:
    ```bash
    cd backend
    # Add DB URI and JWT secret to application.properties
    ./mvnw spring-boot:run
    ```

3. **Set up the frontend**:
    ```bash
    cd ../frontend
    npm install
    npm start
    ```

4. **Start AI microservice (optional)**:
    ```bash
    cd ../ai-module
    pip install -r requirements.txt
    python app.py
    ```

5. **Access the app**:
    Navigate to `http://localhost:3000` in your browser.

## 🙌 Contributing

If you'd like to improve or extend the project, feel free to fork the repo and submit a pull request!

## 📄 License

This project is licensed under the [MIT License](LICENSE).

