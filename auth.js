// auth.js

// Simulated user data
let user = null;

// Function to handle user signup
function signup(username, password) {
    // Simulate user creation
    user = { username, password, loggedIn: true };
    console.log('User signed up:', username);
}

// Function to handle user login
function login(username, password) {
    // Simple login simulation
    if (user && user.username === username && user.password === password) {
        user.loggedIn = true;
        console.log('User logged in:', username);
    } else {
        console.log('Login failed: Invalid credentials');
    }
}

// Function to handle user logout
function logout() {
    if (user) {
        user.loggedIn = false;
        console.log('User logged out:', user.username);
    }
}

// Function to check if user is logged in
function isLoggedIn() {
    return user ? user.loggedIn : false;
}

// Function to get current user info
function getCurrentUser() {
    return user ? user : null;
}

// Export the functions
module.exports = {
    signup,
    login,
    logout,
    isLoggedIn,
    getCurrentUser,
};