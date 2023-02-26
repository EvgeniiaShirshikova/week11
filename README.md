# week11

### Вопросы 💎

1. Сколько детей (дочерних DOM-узлов) у элемента `<ul>` в примере ниже:

   ```jsx
   <ul>
     <li>Привет</li>
     <li>Мир</li>
   </ul>
   ```

   2 дочерних узла

2. Есть такой элемент: `<input id= "input" value = "Привет">`. Какой вызов поменяет значение в нём?
   let input = document.getElementById('input');
   input.setAttribute('value', 'всем привет');

3. Сколько потомков будет у `<div>` после кода ниже?

   ```jsx
   <div id="div"></div>
   <p id="p">Привет</p>

   <script>
     div.append(p);
     div.append(p);
   </script>
   ```

Нисколько, потому что элементы не заданы в JS

4. В каких случаях для элемента elem не верно `elem.firstChild == elem.lastChild`?

Верно - Когда у elem два или более потомков

- Когда у elem единственный потомок
- Когда у elem нет потомков
- Нет такого варианта ответа

5. Какое свойство задает класс элемента?
   .classList

6. Для чего используется запись: `setAttribute(name, value)`?
   чтобы установить значение элемента

7. Назовите метод добавления текста к документу.
   .textContent

8. Как получить HTML-содержимое DOM-элемента elem?
   свойство .innerHTML

9. Что такое объект события и какие у него могут быть свойства?
   Когда происходит событие, браузер создаёт объект события, записывает в него детали и передаёт его в качестве аргумента функции-обработчику.
   Некоторые свойства объекта event:
   event.type
   Тип события, в данном случае "click".
   event.currentTarget
   Элемент, на котором сработал обработчик. Значение – обычно такое же, как и у this, но если обработчик является функцией-стрелкой или при помощи bind привязан другой объект в качестве this, то мы можем получить элемент из event.currentTarget.
   event.clientX / event.clientY
   Координаты курсора в момент клика относительно окна, для событий мыши.

10. Что такое BOM и DOM?
    document object model Фактически это и есть HTML-разметка: блоки, из которых состоит документ.
    browser object model это дополнительные объекты, предоставляемые браузером (окружением), чтобы работать со всем, кроме документа.
11. Есть вот такая страница:

    ```html
    <!DOCTYPE html>
    <html>
      <body>
        <form name="search">
          <label>Поиск: <input type="text" name="search" /> </label>
          <input type="submit" value="Search!" />
        </form>
        <hr />
        <form name="search-person">
          Поиск по посетителям:
          <table id="age-table">
            <tr>
              <td>Возраст:</td>
              <td id="age-list">
                <label>
                  <input type="radio" name="age" value="young" />до 18</label
                >
                <label>
                  <input type="radio" name="age" value="mature" />18-50</label
                >
                <label>
                  <input type="radio" name="age" value="senior" />старше
                  50</label
                >
              </td>
            </tr>
            <tr>
              <td>Дополнительно:</td>
              <td>
                <input type="text" name="info" />
                <input type="text" name="info" />
                <input type="text" name="info" />
              </td>
            </tr>
          </table>
          <input type="button" value="Search!" />
        </form>
      </body>
    </html>
    ```

    Как найти в ней:

    1. Таблицу с `id="age-table"`
    2. Все элементы `label` **внутри** этой таблицы (их три)
    3. Форму `form` с именем `name="search-person"`

Ответ:
let agetable = document.getElementById('age-table');
console.log(agetable);
console.log(agetable.querySelectorAll('label'));
let searchperson = document.getElementsByName('search-person');
console.log(searchperson);

12. Как сделать переход на другую страницу при клике на кнопку (без `<a href=...>`, только средствами JavaScript)?
    через онклик
    <button class="button1" onclick="window.location.href = 'https://learn.javascript.ru/introduction-browser-events#event-object'" type="button">Buy this Template</button>
