# MDNOTES 📝

## Easy Breezy Note-taking for the Modern Dev

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://startling-rugelach-9fbc5b.netlify.app/) 

MDNOTES is a fast, secure, and intuitive note-taking application designed for users who love writing in Markdown. It features real-time Markdown rendering, secure user authentication, and a clean, retro-inspired interface.


## Features ✨

* **User Authentication**: Secure sign-up, login, and password reset functionality powered by Firebase.
* **Full CRUD for Notes**: Create, read, update, and delete your notes with ease.
* **Live Markdown Preview**: Write in a clean Markdown editor and see the rendered HTML in a separate preview pane instantly.
* **Cloud Storage**: All your notes are securely stored in the cloud with Firestore, accessible only by you.
* **Responsive Design**: A beautiful and functional interface on both desktop and mobile devices.
* **Custom Theming**: Styled with a unique, retro "Fanta.css" theme for a fun user experience.

---

## Tech Stack 🛠️

This project is built using a modern, full-stack JavaScript architecture:

* **Framework**: **Next.js 15**
* **UI Library**: **React 19**
* **Backend**: **Firebase**
    * **Authentication** for user management.
    * **Cloud Firestore** for the NoSQL database.
* **Markdown Rendering**: **`markdown-to-jsx`**
* **Styling**: **Custom CSS** with CSS Variables and **Font Awesome** for icons.

---

## Getting Started 🚀

To get a local copy up and running, follow these simple steps.

### Prerequisites

You will need to have Node.js (version 18.18 or higher) and npm installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/akshatmalvii/markdown-notes.git](https://github.com/akshatmalvii/markdown-notes.git)
    cd markdown-notes
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Set up your environment variables:**
    Create a file named `.env.local` in the root of your project and add the following, replacing the placeholders with your own Firebase project credentials.

    ```env
    NEXT_PUBLIC_FIREBASE_APIKEY=AIzaSy...
    NEXT_PUBLIC_FIREBASE_AUTHDOMAIN=your-project-id.firebaseapp.com
    NEXT_PUBLIC_FIREBASE_PROJECTID=your-project-id
    NEXT_PUBLIC_FIREBASE_STORAGEBUCKET=your-project-id.appspot.com
    NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID=1234567890
    NEXT_PUBLIC_FIREBASE_APPID=1:1234567890:web:abcdef1234567890
    NEXT_PUBLIC_FIREBASE_MEASUREMENTID=G-ABCDEFGHIJ
    ```

### Firebase Setup

1.  Create a project on the [Firebase Console](https://console.firebase.google.com/).
2.  Add a new "Web" application to your Firebase project.
3.  Copy the `firebaseConfig` object values into your `.env.local` file.
4.  In the Firebase console, go to **Firestore Database** and create a database.
5.  [cite_start]Navigate to the **Rules** tab and paste the following rules from the `firebase_rules.txt` file to secure your database[cite: 1, 2]:

    ```
    rules_version = '2';

    service cloud.firestore {
      match /databases/{database}/documents {
        match /users/{userId} {
          allow read, write: if request.auth != null && request.auth.uid == userId;
          match /notes/{noteId} {
            allow read, write: if request.auth != null && request.auth.uid == userId;
          }
        }
      }
    }
    ```
6.  Go to the **Authentication** section in Firebase and enable the **Email/Password** sign-in provider.

### Running the App

Start the development server:

```sh
npm run dev
