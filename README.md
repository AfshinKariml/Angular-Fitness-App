# 🚀 Fitness App | Your Ultimate Fitness Companion

<p align="center">
  <a href="https://fitness-app-git-main-afshinkarimls-projects.vercel.app"><strong>View Live Demo »</strong></a>
  <br>

</p>

## 📋 Overview

**Fitness App** is a modern, feature-packed fitness tracking application built using **Angular**. Stay on top of your workouts, monitor your progress, and achieve your fitness goals. Whether you're a beginner or a pro, this app has everything you need to level up your fitness journey.

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| **User Authentication** 🔒 | Secure login and profile management |
| **Workout Tracking** 💪 | Log and track your exercises |
| **Progress Monitoring** 📊 | See real-time statistics and achievements |
| **Responsive Design** 📱 | Optimized for phones, tablets, and desktops |
| **PWA Capabilities** 🌐 | Works seamlessly offline with Progressive Web App support |
| **Multi-Language Support** 🌍 | Including **Jalali Calendar** for Persian users |

## 🛠️ Tech Stack

### Core Technologies
- **Angular 15.2.0**: The latest Angular framework for fast and reliable development
- **Firebase 9.6.1**: Real-time database, user authentication, and more
- **Angular Material 15.2.9**: Beautiful UI components for a modern interface
- **Three.js 0.173.0**: Stunning 3D graphics for an immersive fitness experience
- **RxJS 7.8.0**: Reactive programming for smooth user interactions

### Additional Libraries
- **@angular/flex-layout**: Responsive layouts with ease
- **@angular/fire**: Firebase integration made simple
- **jalali-moment**: Persian calendar support for the Jalali calendar system
- **@angular/service-worker**: Service worker for PWA functionality

## 🔧 Prerequisites

Before getting started, make sure you have the following installed:

- **Node.js**: (Latest LTS version recommended)
- **Angular CLI 15.2.11**
- **npm** or **yarn** (your choice of package manager)

## ⚙️ Installation

Follow these steps to get the project up and running:

1. **Clone the repository:**
   ```bash
   git clone [repository-url]
   cd fitness-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   ng serve
   ```

4. Open your browser and go to `http://localhost:4200` to see the app in action.

## 🏗️ Build Configuration

### Development Build
For local development:
```bash
ng build --configuration=development
```
- Source maps enabled
- No optimization or service worker

### Production Build
For deploying to production:
```bash
ng build --configuration=production
```
- Full optimization
- Service worker enabled
- Output hashing for cache busting
- Bundle size limits:
  - Initial: 4MB max
  - Component styles: 15KB max

## 📂 Project Structure

```
fitness-app/
├── src/
│   ├── app/               # App components and services
│   ├── assets/            # Images and 3D models
│   └── manifest.webmanifest # PWA manifest
├── angular.json           # Angular workspace configuration
└── package.json           # Dependencies and scripts
```

## 📜 Available Scripts

- `npm start`: Start the development server
- `npm run build`: Build the application
- `npm run watch`: Build with watch mode
- `npm test`: Run unit tests

## 🧪 Testing

The app includes comprehensive tests for all components:

- **Unit tests** using **Karma** and **Jasmine**
- **Chrome launcher** configured for test execution
- **Coverage reporting** enabled for detailed insights

## 📱 PWA Support

Enjoy a seamless offline experience with **Progressive Web App** features:
- **Service worker** for offline support
- **Web manifest** for installability
- **Asset caching** for faster load times
- Note: PWA features are only available in **production builds**.

## 🌍 Browser Compatibility

- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- PWA features require service worker support (modern browsers only)

## 🤝 Contributing

We welcome contributions! Here's how you can get involved:

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Run tests**: `npm test`
5. **Submit a pull request**

## 📄 License

This project is licensed under the **MIT License**.

## 🎉 Acknowledgments

A huge thank you to:

- **Angular** team for their amazing framework
- **Firebase** team for real-time backend services
- **Three.js** community for stunning 3D visualizations

---

<p align="center">
This project was created by Afshin Karimi.
  <br>
  <a href="https://fitness-app-git-main-afshinkarimls-projects.vercel.app">Visit Live Demo</a>
</p>