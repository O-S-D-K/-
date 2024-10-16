<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>保存された結果</title>
    <style>
        body {
            background-color: #fffacd;
            font-family: Arial, sans-serif;
            text-align: center;
        }
        h1 {
            color: #008b8b;
        }
        table {
            margin: 20px auto;
            border-collapse: collapse;
            width: 60%;
        }
        th, td {
            border: 1px solid #008b8b;
            padding: 10px;
            text-align: center;
        }
        th {
            background-color: #20b2aa;
            color: white;
        }
    </style>
</head>
<body>
    <h1>保存されたデータ</h1>
    <table id="dataTable">
        <thead>
            <tr>
                <th>あなたの名前</th>
                <th>相手の名前</th>
                <th>あなたの動物</th>
                <th>相手の動物</th>
            </tr>
        </thead>
        <tbody>
            <!-- データがここに表示されます -->
        </tbody>
    </table>

    <script src="admin.js"></script>
</body>
</html>
