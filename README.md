# Репозиторий для тестов библиотек лицензирования

## Задачи для библиотек
 - Проверка наличия лицензии у модуля
 - Нахождение дубликатов

## Библиотеки для сравнения: 
 - [license-checker](https://www.npmjs.com/package/license-checker)
 - [legally](https://www.npmjs.com/package/legally)
 - [npm-license-crawler](https://www.npmjs.com/package/npm-license-crawler)
 - [checker-rseidelsohn](https://www.npmjs.com/package/license-checker-rseidelsohn)

```bash
npm i -g legally license-checker npm-license-crawler
```

| Lib                 | Popularity | Size  | Dependensies | Github Stars |   Depends on    |
| ------------------- | :--------: | :---: | :----------: | :----------: | :-------------: |
| legally             |   2,699    |  81   |      0       |     353      |        -        |
| license-checker     |  201,822   |  144  |      10      |     1.2k     |        -        |
| npm-license-crawler |   7,783    |  119  |      9       |     177      | license-checker |
| checker-rseidelsohn |   1,647    |  111  |      10      |      18      | license-checker |

Worth to mention: [licensee](https://www.npmjs.com/package/licensee)

### [Legally](https://www.npmjs.com/package/legally)
Информативный тип библиотеки

```bash
# basic commands
legally # выведет три таблицы [пакеты, количество лецензий, общий отчет]
legally express dotenv # выводит лецензии удаленных пакетов

# показывать только одну или несколько таблиц
legally [-p] [-l] [-r]
legally show [packages] [licenses] [reports]

legally --type mit # выведут таблицы с MIT лецензиями

# выведет таблицы  где "cc0", "cc-by 3.0", и т.д. значения а все остальные будут -
legally --filter cc

legally --type mit --filter bsd # комплексные запросы

# можно играться со стилями таблиц
legally --border [thin] [bold] [double] [ascii] 

# можно вывести таблицы в файл
legally --plain > license-report.txt
```

### Комманда для установки пакета(глобально):
```bash
npm install -g license-checker
```

### При использовании команды в корневом каталоге выведет все устанволенные зависимости и информацию о них(тип лецензии, ссылку на репо модуля, имя владельца, эмейл, путь к репо, путь к файлу лецензии)
```bash
license-checker
```
![license-checker](assets/license-checker.png)

### Чтобы вывести количество лицензий который используются в проекте необходимо ввести:
```bash
license-checker --summary
```
![licence-summary](assets/summary.png)


additional links
 - https://medium.com/@fokusman/the-easiest-way-to-check-all-your-npm-dependency-licenses-753075ef1d9d
 - https://blog.bitsrc.io/how-i-analyzed-all-npm-dependency-licenses-in-one-go-18de0f7244bc
 - https://medium.com/@vovabilonenko/licenses-of-npm-dependencies-bacaa00c8c65