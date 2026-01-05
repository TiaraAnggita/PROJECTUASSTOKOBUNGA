<?php
header("Content-Type: application/json");

// Konfigurasi Database Anda
$host = "localhost";
$user = "root"; 
$pass = ""; 
$db   = "db_tokobunga"; 

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Koneksi Gagal"]));
}

// Ambil data dari JavaScript
$input = file_get_contents("php://input");
$data = json_decode($input, true);

if ($data) {
    $nama = $conn->real_escape_string($data['nama']);
    $alamat = $conn->real_escape_string($data['alamat']);
    $total = $data['total'];
    $items = $conn->real_escape_string(json_encode($data['items']));

    $sql = "INSERT INTO pesanan (nama_pelanggan, alamat_pengiriman, total_bayar, item_dipesan) 
            VALUES ('$nama', '$alamat', '$total', '$items')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => $conn->error]);
    }
}

$conn->close();
?>