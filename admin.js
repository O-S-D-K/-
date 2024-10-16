// ローカルストレージからデータを取得
const savedData = JSON.parse(localStorage.getItem('savedData')) || [];

// データをテーブルに表示
const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

savedData.forEach((data) => {
    const row = dataTable.insertRow();
    row.insertCell(0).textContent = data.yourName;
    row.insertCell(1).textContent = data.theirName;
    row.insertCell(2).textContent = data.yourAnimal;
    row.insertCell(3).textContent = data.theirAnimal;
});
