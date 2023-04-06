# Learn Firebase with React

This repository is a comprehensive guide on how to use Firebase with React to implement user authentication, Firestore CRUD operations, Firestore Rules, Firebase image uploading, and Firebase hosting and deployment. The project is built using Vite as a build tool and npm as the package manager.

## Table of Contents

- [Firebase Overview](#firebase-overview)
- [Project Setup](#project-setup)
- [Authentication](#authentication)
- [Firestore CRUD Operations](#firestore-crud-operations)
- [Firestore Rules](#firestore-rules)
- [Image Upload](#image-upload)
- [Firebase Hosting and Deployment](#firebase-hosting-and-deployment)
- [Contributing](#contributing)
- [License](#license)

## Firebase Overview

Firebase is a platform provided by Google that offers a suite of tools and services for building web and mobile applications. Some of the key features of Firebase include:

- Authentication: Provides easy-to-use authentication methods for implementing user sign-up, sign-in, password reset, and social media login with popular providers like Google, Facebook, and Twitter.

- Firestore: A real-time NoSQL database that allows you to store, sync, and query data for your applications.

- Firebase Storage: A powerful cloud storage service that allows you to store and retrieve files such as images, videos, and documents.

- Firebase Hosting: A fast and reliable hosting service that allows you to deploy and serve your web applications with a custom domain.

- Firebase Deployment: Provides simple and automated tools for deploying your applications to Firebase hosting.

## Project Setup

To get started with this project, follow these steps:

1. Clone the repository to your local machine:
git clone https://github.com/Dinujaya-Sandaruwan/Learn-Firebase-With-React.git

2. Navigate to the project directory:
```cd Learn-Firebase-With-React```


3. Install the dependencies using npm:
```npm install```

4. Create a Firebase project and obtain the Firebase configuration details including the Firebase API Key, Auth Domain, Project ID, Storage Bucket, and Messaging Sender ID.

5. Update the Firebase configuration details in the `.env` file located at the root of the project:

``` JavaScript
VITE_API_KEY=<YOUR_API_KEY>
VITE_AUTH_DOMAIN=<YOUR_AUTH_DOMAIN>
VITE_PROJECT_ID=<YOUR_PROJECT_ID>
VITE_STORAGE_BUCKET=<YOUR_STORAGE_BUCKET>
VITE_MESSAGING_SENDER_ID=<YOUR_MESSAGING_SENDER_ID>
```

6. Start the development server:
```npm run dev```


This will start the development server and open the application in your default web browser.

## Authentication

Firebase provides easy-to-use methods for implementing authentication in your React applications. This repository includes examples of how to implement user sign-up, sign-in, password reset, and social media login using Firebase Authentication.

Here's an example of how to implement user sign-up with email and password using Firebase:

```javascript
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// ...

const auth = getAuth();
const email = "example@example.com";
const password = "password";

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // User sign-up successful
    const user = userCredential.user;
    console.log("User ID:", user.uid);
  })
  .catch((error) => {
    // User sign-up failed
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error:", errorCode, errorMessage);
  });
```

## Firestore CRUD Operations
Firestore is a real-time NoSQL database provided by Firebase that allows you to store, sync, and query data for your applications. This repository includes examples of how to perform CRUD (Create, Read, Update, Delete) operations with Firestore in your React applications.

Here's an example of how to perform a Firestore CRUD operation to create a document:

``` JavaScript
import { getFirestore, collection, addDoc } from "firebase/firestore";

// ...

const db = getFirestore();
const data = { name: "John", age: 30 };

addDoc(collection(db, "users"), data)
  .then((docRef) => {
    // Document created successfully
    console.log("Document ID:", docRef.id);
  })
  .catch((error) => {
    // Error creating document
    console.error("Error:", error);
  });
```

## Firestore Rules

Firestore Rules are used to define the access rules for your Firestore database. This repository includes examples of how to implement Firestore Rules to secure your data and define the permissions for read, write, and delete operations.

Here's an example of how to define a Firestore Rule for read access to a collection:

``` JavaScript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{document=**} {
      allow read: if true; // Allow all users to read from the "users" collection
    }
  }
}

```

## Image Upload

Firebase Storage allows you to upload and retrieve files such as images, videos, and documents. This repository includes examples of how to implement image uploading using Firebase Storage in your React applications.

Here's an example of how to upload an image to Firebase Storage:

``` JavaScript

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// ...

const storage = getStorage();
const file = // Your image file object

// Upload image to Firebase Storage
const storageRef = ref(storage, "images/" + file.name);
uploadBytes(storageRef, file)
  .then((snapshot) => {
    // Image uploaded successfully
    console.log("Image uploaded:", snapshot.totalBytes, "bytes");
    getDownloadURL(snapshot.ref)
      .then((downloadURL) => {
        // Get the download URL of the uploaded image
        console.log("Download URL:", downloadURL);
      })
      .catch((error) => {
        // Error getting download URL
        console.error("Error:", error);
      });
  })
  .catch((error) => {
    // Error uploading image
    console.error("Error:", error);
  });

```
## Firebase Hosting and Deployment

Firebase Hosting allows you to deploy and serve your web applications with a custom domain. This repository includes examples of how to deploy your React applications to Firebase Hosting using the Firebase CLI.

Here's an example of how to deploy your React application to Firebase Hosting:

1 Install the Firebase CLI globally:

``` bash
npm install -g firebase-tools
```

2. Authenticate with your Firebase account:
``` bash
firebase login
```
3. Initialize your Firebase project in the project directory:
``` bash
firebase init
```
4. Select "Hosting" as the Firebase CLI feature to configure.

5. Choose your Firebase project and configure your hosting settings.

6. Build your React application for production:

``` bash
npm run build
```

7. Deploy your application to Firebase Hosting:

``` bash
firebase deploy --only hosting
```

8. Firebase will provide you with a Firebase Hosting URL where your application is deployed and can be accessed.


## Contributing
If you would like to contribute to this project, feel free to open an issue or submit a pull request. All contributions are welcome!

License
This project is open-source and available under the MIT License.
