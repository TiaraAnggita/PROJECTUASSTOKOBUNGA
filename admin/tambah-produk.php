<?php
include '../koneksi.php';

$nama = $_POST['nama_bunga'];
$harga = $_POST['harga'];
$kategori = $_POST['kategori'];
$deskripsi = $_POST['deskripsi'];

// Pengaturan Upload Gambar
$nama_file = $_FILES['gambar']['name'];
$tmp_name = $_FILES['gambar']['tmp_name'];
$ekstensi = pathinfo($nama_file, PATHINFO_EXTENSION);
$nama_baru = time() . '.' . $ekstensi; // Ganti nama file agar tidak bentrok
$tujuan = "../assets/img/projects/" . $nama_baru;

if (move_uploaded_file($tmp_name, $tujuan)) {
    $query = "INSERT INTO products VALUES ('', '$nama', '$kategori', '$harga', '$deskripsi', '$nama_baru')";
    mysqli_query($conn, $query);
    echo "<script>alert('Produk berhasil ditambah!'); window.location='produk.php';</script>";
} else {
    echo "Gagal upload gambar.";
}
?>