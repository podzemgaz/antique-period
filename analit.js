// console.log("gapi");

// gapi.load('client:auth2', initClient);

// function initClient() {
//     // Создайте новый XMLHttpRequest объект
//     var xhr = new XMLHttpRequest();

//     // Открытие JSON файла
//     xhr.open('GET', 'utopian-calling-386309-b0c0f9cee886.json', true);

//     // Установка типа ответа на JSON
//     xhr.responseType = 'json';

//     // Загрузка содержимого файла
//     xhr.onload = function() {
//         // Если запрос успешный извлекаем apiKey и clientId
//         if (xhr.status === 200) {
//             var responseObj = xhr.response;
//             var apiKey = responseObj.apiKey;
//             console.log(apiKey);
//             var clientId = responseObj.clientId;

            
//         } else {
//             console.log("Error: " + xhr.status);
//         }
//     }

// //   gapi.client.init({
// //     apiKey: apiKey,
// //     clientId: clientId,
// //     discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/analytics/v3/rest'],
// //     scope: 'https://www.googleapis.com/auth/analytics.readonly'
// //   }).then(function () {
// //     console.log('success');
// //     // Авторизация прошла успешно
// //     // Вы можете использовать gapi.client.analytics для выполнения запросов к API
// //   }, function (error) {
// //     // Произошла ошибка авторизации
// //     console.error(error);
// //   });
// }


gapi.load('client:auth2', initClient);

function initClient() {
  // Создайте новый XMLHttpRequest объект
  var xhr = new XMLHttpRequest();

  // Откройте JSON файл внутри текущей директории
  xhr.open('GET', 'utopian-calling-386309-b0c0f9cee886.json', true);

  // Установите тип ответа на JSON
  xhr.responseType = 'json';

  // Загрузите содержимое файла
  xhr.onload = function() {
    // Если запрос был успешным, извлеките apiKey и clientId из объекта ответа
    if (xhr.status === 200) {
      var responseObj = xhr.response;
      var apiKey = responseObj.apiKey;
      var clientId = responseObj.clientId;

      // Инициализируйте клиент Google API с полученными значениями
      gapi.client.init({
        apiKey: apiKey,
        clientId: clientId,
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/analytics/v3/rest'],
        scope: 'https://www.googleapis.com/auth/analytics.readonly'
      }).then(function () {
        console.log('Авторизация в API Google Analytics прошла успешно');
        
        // Здесь можно выполнить запрос на получение данных
        gapi.client.analytics.data.ga.get({
          'ids': 'G-6LXQKXNVLW',
          'start-date': '7daysAgo',
          'end-date': 'today',
          'metrics': 'ga:users'
        }).then(function(response) {
          console.log('Количество уникальных пользователей:', response.result.totalsForAllResults['ga:users']);
        }, function(error) {
            console.log("ошипка");
            console.error(error);
          
        });
      }, function (error) {
        console.error('Ошибка авторизации в API Google Analytics:', error);
      });
    }
  };

  // Обработайте возможные ошибки запроса
  xhr.onerror = function() {
    console.log('Ошибка при загрузке файла JSON');
  };

  // Отправьте запрос
  xhr.send();
}