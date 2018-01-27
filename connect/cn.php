<?php

// connect/cn.php

    $nombre = $email = $numero = $mensaje = NULL;

    if (isset($_POST)) {

        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "customersas";


        $name = $_POST['name'] ?: '';
        $email = $_POST['email'] ?: '';
        $phone = $_POST['phone'] ?: '';
        $message = $_POST['message'] ?: '';


        if ($name && $email && $phone && $message) {
            $conn = new mysqli($servername, $username, $password, $dbname);

            $stmt = $conn->prepare("INSERT INTO usuarioas (name, email, phone, message) VALUES (?,?,?,?)");

            $stmt->bind_param("ssss",$name,$email,$phone,$message);

            $rc=$stmt->execute();

            if (false===$rc) {
                exit('execute() failed: ' . htmlspecialchars($stmt->error));
            } else {
                echo "$nombre Thank you, I've received your message.";
            }
            $stmt->close();
        }
    }

    ?>