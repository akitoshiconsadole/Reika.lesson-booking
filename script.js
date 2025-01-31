document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault(); // フォーム送信を防ぐ

  // 入力値を取得
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const lessonType = document.getElementById('lessonType').value;
  const date = document.getElementById('date').value;

  // 確認メッセージを表示
  const confirmationMessage = `
    ${name}さん、予約が完了しました！<br>
    レッスン種類: ${lessonType}<br>
    希望日時: ${date}<br>
    確認のメールを ${email} に送信しました。
  `;
  document.getElementById('confirmationMessage').innerHTML = confirmationMessage;
});
