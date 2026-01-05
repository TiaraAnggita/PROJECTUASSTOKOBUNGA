<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login Evergreen</title>
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/main.css" rel="stylesheet">
    <style>
        .login-box { margin-top: 100px; max-width: 400px; background: white; padding: 30px; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.1); }
        .btn-evergreen { background: #feb900; border: none; font-weight: bold; width: 100%; padding: 10px; }
    </style>
</head>
<body style="background: #f8f9fa;">

<div class="container d-flex justify-content-center">
    <div class="login-box">
        <div class="text-center mb-4">
            <h2 style="font-weight: bold;">Evergreen<span>.</span></h2>
            <p class="text-muted">Masuk ke akun Anda</p>
        </div>
        
        <form action="proses-login.php" method="POST">
            <div class="mb-3">
                <input type="text" name="username" class="form-control" placeholder="Username atau Email" required>
            </div>
            <div class="mb-3">
                <input type="password" name="password" class="form-control" placeholder="Password" required>
            </div>
            <button type="submit" class="btn btn-evergreen">MASUK</button>
        </form>
        
        <div class="text-center mt-3">
            <small>Belum punya akun? <a href="register.php" style="color: #feb900;">Daftar Sekarang</a></small>
        </div>
    </div>
</div>

</body>
</html>