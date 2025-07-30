<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>MasterMart | LogIn</title>
    <link rel="stylesheet" href="css/form.css">
    <script src="https://kit.fontawesome.com/e05d24f6c7.js" crossorigin="anonymous"></script>
    <link rel="shortcut icon" href="assets/favicon/favicon.ico" type="image/x-icon">
</head>

<body>

    <div class="container">
        <div class="logo">
            <div class="icon"><img src="assets/MasterEagle.png" alt=""></div>
            <h1>MasterMart</h1>
        </div>
        <div class="form-box">
            <h2>Login</h2>
            <p>Login to your account</p>

            <form id="loginForm" action="loginS.php" method="POST">
                <label>Email</label>
                <input type="email" name="email" id="email" placeholder="Enter your email" />

                <label>Password</label>
                <div class="password-wrapper">
                    <input type="password" id="password" name="password" placeholder="Enter your password" />
                    <span class="toggle-password" toggle="#password">
                        <i class="fas fa-eye"></i>
                    </span>
                </div>

                <div class="actions">
                    <button type="submit" class="submit-btn">Login</button>
                    <button type="reset" class="reset-btn">Reset</button>
                </div>
            </form>

            <p class="footer">Don't have an account? <a href="register.php">Register here</a></p>
        </div>
    </div>

    <script src="js/login.js"></script>
</body>

</html>