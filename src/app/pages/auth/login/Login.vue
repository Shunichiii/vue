<template>
    <div class="container">
        <div class="sub1">
            <img class="img" src="/src/app/assets/images/3d_home.jpg" alt="Logo" />
            <p class="beVerified">Be Verified</p>
            <p>Join experienced Designers on this platform</p>
        </div>
        <div class="sub2">
            <h2 class="text">Hello, Again</h2>
            <p class="subtext">We are happy to have you back.</p>
            <form action="/">
                <input type="text" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <div class="label">
                    <div>
                        <input type="checkbox" />
                        <label>Remember me</label>
                    </div>
                    <a href="#">Forgot Password?</a>
                </div>
                <button>Login</button>
            </form>
            <div class="sub3">
                <img class="imgage" src="/src/app/assets/images/google-Logo.webp" alt="Google" width="40px" height="40px">
                <a class="signIn" href="/about">Sign in with Google</a>
            </div>
            <p>Don't have an account? <a href="#">Sign Up</a></p>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 98vh;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
}

.img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
}

.sub1 {
    display: flex;
    width: 500px;
    height: 500px;
    background-color: #fbf4e9;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.sub2 {
    margin-left: 3%;
    display: flex;
    width: 500px;
    height: 500px;
    justify-content: center;
    flex-direction: column;
}

.text {
    font-size: 30px;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    color: #333;
}

.subtext {
    font-size: medium;
    font-family: "./assets/fonts/Roboto-Regular.ttf";
    color: #666;
}

.sub3 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

}

.image {
    margin-right: 50px;
    background: #fff;
    color: #fff;
}

.beVerified{
    font-size: 30px;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    color: #333;
}

form input[type="text"],
form input[type="password"] {
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 95%;
}

form button {
    background-color: blue;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 50px;
    cursor: pointer;
    width: 100%;
    border-radius: 5px;
}

p {
    color: #333;
    font-size: 14px;
}

.signIn {
    color: #4CAF50;
    text-decoration: underline;
    margin-left: 10px;
}

a {
    color: #4CAF50;
    text-decoration: underline;
}

a:hover {
    color: #555;
}

h1 {
    color: #333;
    font-size: 24px;
    font-weight: bold;
}

.label {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>