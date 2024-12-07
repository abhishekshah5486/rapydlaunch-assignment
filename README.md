# Course Management System

## Project Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:abhishekshah5486/rapydlaunch-assignment.git
   cd rapydlaunch-assignment
   ```

2. **Navigate to the server directory:**
   ```bash
   cd server
   ```

3. **Install server dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   - Create a `.env` file in the `server` directory and add the following variables:
     ```plaintext
     MONGO_URI=<your_mongodb_connection_string>
     PORT=8081
     ```

5. **Start the server:**
   ```bash
   npm run dev
   ```

6. **Navigate to the client directory:**
   ```bash
   cd ../src
   ```

7. **Install client dependencies:**
   ```bash
   npm install
   ```

8. **Start the client:**
   ```bash
   npm start
   ```

## Features Implemented

- **User Authentication:**
  - User registration and login functionality.
  - Role-based access control (students, instructors, and admins).

- **Course Management:**
  - Create, retrieve, and manage courses.
  - Enroll students in courses.

- **Responsive UI:**
  - A user-friendly interface built with React.
  - Responsive design for various screen sizes.

- **Admin Features:**
  - Admin can create instructor accounts and manage courses.

## Additional Features or Notes

- **Database:**
  - The application uses MongoDB for data storage. Ensure your MongoDB instance is running before starting the server.

- **Future Enhancements:**
  - Implement user profile management.
  - Add course reviews and ratings.
  - Enhance the UI with more interactive components.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Thanks to the contributors and libraries that made this project possible.