<?php
session_start();
// Proteksi halaman: Jika bukan admin, tendang ke login
if (!isset($_SESSION['login']) || $_SESSION['role'] !== 'admin') {
    header("Location: ../login.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin Dashboard - Evergreen</title>
    <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .sidebar { height: 100vh; background: #343a40; color: white; padding: 20px; position: fixed; width: 250px; }
        .main-content { margin-left: 260px; padding: 20px; }
        .nav-link { color: rgba(255,255,255,0.7); }
        .nav-link:hover { color: white; }
        .nav-link.active { color: #feb900; font-weight: bold; }
    </style>
</head>
<body>

<div class="sidebar">
    <h3 class="text-warning">Evergreen.</h3>
    <hr>
    <nav class="nav flex-column">
        <a class="nav-link active" href="#">Dashboard</a>
        <a class="nav-link" href="#">Kelola Produk</a>
        <a class="nav-link" href="#">Pesanan Masuk</a>
        <a class="nav-link" href="#">Data Pelanggan</a>
        <hr>
        <a class="nav-link text-danger" href="../logout.php">Logout</a>
    </nav>
</div>

<div class="main-content">
    <h2>Ringkasan Toko</h2>
    <div class="row mt-4">
        <div class="col-md-4">
            <div class="card bg-primary text-white p-4">
                <h5>Total Produk</h5>
                <h3>12 Bunga</h3>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-success text-white p-4">
                <h5>Pesanan Baru</h5>
                <h3>5 Pesanan</h3>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-warning text-dark p-4">
                <h5>Total Pendapatan</h5>
                <h3>Rp 2.500.000</h3>
            </div>
        </div>
    </div>
</div>

</body>
</html>