<!DOCTYPE html>
<html>
<head>
    <title>Tabel Perkalian 10x10 Interaktif</title>
    <style>
        table {
            border-collapse: collapse;
            margin: auto;
        }

        th, td {
            border: 1px solid black;
            width: 40px;
            height: 40px;
            text-align: center;
        }

        th {
            background-color: #f2f2f2;
        }

        .highlight {
            background-color: yellow;
        }

        .center {
            text-align: center;
            margin-top: 20px;
        }
    </style>
</head>
<body>

<h2 style="text-align:center;">Tabel Perkalian 10x10 Interaktif</h2>

<?php
// Ambil nilai yang diklik dari parameter GET jika ada
$selectedX = isset($_GET['x']) ? (int)$_GET['x'] : null;
$selectedY = isset($_GET['y']) ? (int)$_GET['y'] : null;
?>

<table>
    <tr>
        <th>x</th>
        <?php for ($i = 1; $i <= 10; $i++): ?>
            <th><?php echo $i; ?></th>
        <?php endfor; ?>
    </tr>

    <?php for ($i = 1; $i <= 10; $i++): ?>
        <tr>
            <th><?php echo $i; ?></th>
            <?php for ($j = 1; $j <= 10; $j++): 
                $result = $i * $j;
                $isSelected = ($i == $selectedX && $j == $selectedY);
                ?>
                <td class="<?php echo $isSelected ? 'highlight' : ''; ?>">
                    <a href="?x=<?php echo $i; ?>&y=<?php echo $j; ?>" style="text-decoration:none;color:black;">
                        <?php echo $result; ?>
                    </a>
                </td>
            <?php endfor; ?>
        </tr>
    <?php endfor; ?>
</table>

<?php if ($selectedX && $selectedY): ?>
    <p class="center">Hasil: <?php echo "$selectedX x $selectedY = " . ($selectedX * $selectedY); ?></p>
<?php endif; ?>

</body>
</html>
