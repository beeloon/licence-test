# Репозиторий для тестов библиотек лицензирования

## Задачи для библиотек
 - Проверка наличия лицензии у модуля
 - Нахождение дубликатов

```bash
npm i -g legally license-checker npm-license-crawler license-checker-rseidelsohn licensee
```

## Таблицы сравнения
| Lib                 | Downloads (~) | Size (kb) | Dependensies | Github Stars |   Updates    |
| ------------------- | :-----------: | :-------: | :----------: | :----------: | :----------: |
| license-checker     |    201,822    |    144    |      10      |     1.2k     | Jan 10, 2019 |
| legally             |     2,699     |    81     |      0       |     353      |    Jan 16    |
| licensee            |     8,739     |    36     |      15      |     154      | 16 days ago  |
| npm-license-crawler |     7,783     |    119    |      9       |     177      | Aug 1, 2019  |
| checker-rseidelsohn |     1,647     |    111    |      10      |      18      | 23 days ago  |

### Worth to mention
| Lib                   | Downloads (~) | Size (kb) | Dependensies | Github Stars |   Updates   |
| --------------------- | :-----------: | :-------: | :----------: | :----------: | :---------: |
| spdx-expression-parse |  15,115,982   |    12     |      2       |      32      | a year ago  |
| spdx-license-ids      |  16,882,050   |    10     |      0       |      27      | 3 days ago  |
| spdx-satisfies        |    214,303    |     9     |      3       |      7       | 16 days ago |

---

## [license-checker](https://www.npmjs.com/package/license-checker)

```bash
# basic commands
# выведет дерево зависимостей и информацию о них(тип лецензии, ссылку на репо модуля, 
# имя владельца, эмейл, путь к репо, путь к файлу лецензии)
# звездочка рядом с лицензией показывает то что лицензия была взята из других файлов
# (README, LICENSE, COPYING, ...) 
license-checker 

license-checker [--production] [--development]
license-checker --summary
license-checker --json > ./reports/license-checker-report.json 
license-checker --csv --out ./reports/license-checker-report.csv
license-checker --exclude 'MIT, MIT OR X11, BSD, ISC'
license-checker --packages 'express@4.17.1;dotenv@10.0.0'
license-checker --excludePackages 'express@4.17.1;dotenv@10.0.0'

# странно работают 
license-checker --unknown # report guessed licenses as unknown licenses
license-checker --onlyunknown
```

Все сторонние опции можно глянуть по ссылке, (полезные приведены выше):
[license-checker optins](https://www.npmjs.com/package/license-checker#options)

---

## [legally](https://www.npmjs.com/package/legally)

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

---

## [spdx-license-ids](https://www.npmjs.com/package/spdx-license-ids)
Пакет содержит в себе все доступные лицензии в spdx формате(Software Package Data Exchange)

```js
const ids = require('spdx-license-ids'); // ['0BSD', 'AAL', 'ADSL', 'AFL-1.1', 'AFL-1.2', ...]
const deprecatedIds = require('spdx-license-ids/deprecated'); // ['AGPL-1.0', 'AGPL-3.0', 'GFDL-1.1', ...]

ids.includes('CC-BY-1.0'); //=> true
ids.includes('GPL-3.0'); //=> false

deprecatedIds.includes('CC-BY-1.0'); //=> false
deprecatedIds.includes('GPL-3.0'); //=> true
```

## Ссылки: 
 - [license-checker](https://www.npmjs.com/package/license-checker)
 - [legally](https://www.npmjs.com/package/legally)
 - [licensee](https://www.npmjs.com/package/licensee)
 - [npm-license-crawler](https://www.npmjs.com/package/npm-license-crawler)
 - [checker-rseidelsohn](https://www.npmjs.com/package/license-checker-rseidelsohn)
 - [spdx-expression-parse](https://www.npmjs.com/package/spdx-expression-parse)
 - [spdx-license-ids](https://www.npmjs.com/package/spdx-license-ids)
 - [spdx-satisfies](https://www.npmjs.com/package/spdx-satisfies)