<?php
// 1. Koneksi ke database
$host = "localhost";
$user = "root";
$pass = "";
$db   = "db_tokobunga";

$conn = mysqli_connect($host, $user, $pass, $db);
if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

// 2. Ambil data dari form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // 3. Cek di database
    $query = "SELECT * FROM admin WHERE username='$username' AND password='$password'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) == 1) {
        // login berhasil
        session_start();
        $_SESSION['admin'] = $username;

        // arahkan ke dashboard.html
        header("Location: dashboard.php");
        exit();
    } else {
        // login gagal
        echo "<script>alert('Username atau password salah!'); window.location='login.php';</script>";
    }
}
?>
