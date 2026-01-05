<php>require_once 'includes/config.php';

</php>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daftar Akun - Evergreen</title>
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/main.css" rel="stylesheet">
    <style>
        body { background: #f4f4f4; }
        .login-container { margin-top: 50px; max-width: 450px; }
        .card { border: none; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .btn-primary { background-color: #feb900; border: none; color: #000; font-weight: 600; }
        .btn-primary:hover { background-color: #e5a700; }
    </style>
</head>
<body>

<div class="container d-flex justify-content-center">
    <div class="login-container w-100 mb-5">
        <div class="text-center mb-4">
            <h2 style="font-weight: 700;">Daftar Akun Evergreen</h2>
            <p class="text-muted">Bergabunglah untuk kemudahan memesan bunga</p>
        </div>
        <div class="card p-4">
            <form action="proses-register.php" method="POST">
                <div class="mb-3">
                    <label class="form-label">Username</label>
                    <input type="text" name="username" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" name="email" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" name="password" class="form-control" placeholder="Minimal 6 karakter" required>
                </div>
                <button type="submit" class="btn btn-primary w-100 py-2">DAFTAR SEKARANG</button>
            </form>
            <div class="text-center mt-3">
                <small>Sudah punya akun? <a href="login.php" style="color: #feb900;">Login di sini</a></small>
            </div>
        </div>
    </div>
</div>

</body>
</html>