<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>MasterMart | Register</title>
    <link rel="stylesheet" href="css/form.css">
    <link rel="shortcut icon" href="assets/favicon/favicon.ico" type="image/x-icon">
    <script src="https://kit.fontawesome.com/e05d24f6c7.js" crossorigin="anonymous"></script>
</head>

<body>

    <div class="container">
        <div class="logo">
            <div class="icon"><img src="assets/MasterEagle.png" alt=""></div>
            <h1>MasterMart</h1>
        </div>
        <div class="form-box">
            <h2>Register</h2>
            <p>Create your account</p>

            <form id="registerForm" action="registerS.php" method="POST">
                <label>Name</label>
                <input type="text" id="name" name="uname" placeholder="Enter your full name" />

                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" />

                <label>Password</label>
                <div class="password-wrapper">
                    <input type="password" id="password" name="password" placeholder="Enter your password" />
                    <span class="toggle-password" toggle="#password">
                        <i class="fas fa-eye"></i>
                    </span>
                </div>

                <label>Confirm Password</label>
                <div class="password-wrapper">
                    <input type="password" id="confirmPassword" name="confirmPassword"
                        placeholder="Confirm your password" />
                    <span class="toggle-password" toggle="#confirmPassword">
                        <i class="fas fa-eye"></i>
                    </span>
                </div>


                <label>Phone Number</label>
                <div class="phone-row">
                    <select name="code" id="country-code">
                        <option value="-1">Country Code</option>
                        <option value="+91">India (+91)</option>
                        <option value="+1">United States (+1)</option>
                        <option value="+44">United Kingdom (+44)</option>
                        <option value="+66">Australia (+66)</option>
                        <option value="+81">Japan (+81)</option>
                        <option value="+49">Germany (+49)</option>
                        <option value="+33">France (+33)</option>
                        <option value="+86">China (+86)</option>
                        <option value="+971">UAE (+971)</option>
                    </select>
                    <input type="text" id="phone" placeholder="Enter your phone number" maxlength="10" />
                </div>



                <div class="actions">
                    <button type="submit" class="submit-btn">Submit</button>
                    <button type="reset" class="reset-btn">Reset</button>
                </div>
            </form>

            <p class="footer">Already have an account? <a href="login.php">Login here</a></p>
        </div>
    </div>

    <script src="js/register.js"></script>
</body>

</html>