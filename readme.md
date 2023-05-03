
# Cognitive Leap

Cognitive leap is project to improve learning curve of neurodivergent citizens by utilizing their whole senses.


## Run Locally

Clone the project

```bash
  git clone <LINK>
```

Go to the project directory

```bash
  cd <PROJECT FOLDER>/backend
```

Create a .env file inside backend folder and variable (connection string should be added inside .env file)

```bash
  MONGO_URI = "<Connection string>"
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm  start
```


## API Reference for english alphabet

#### Create alphabet

```http
 POST   /api/v1/englishAlphabet/createAlphabet
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `key` | `Number` | **Required**. A unique key number by user, (later may we can automate using crypto) |
| `text` | `string` | **Required**.text of item (eg: Apple) |
| `textAudio` | `string` | **Required**. audio of text ( eg: "apple, A for Apple" ) here we are accepting only link, so we should upload data to cloud and provide link to db|
| `storyText` | `string` | **Required**. 2  sentence for story of object |
| `storyAudio` | `string` | **Required**. Link of audio of story after uploading to cloud |
| `image` | `string` | **Required**. Link of image after uploading into cloud, (for testing you can provide a image address from internet) |
| `uid` | `string` | **Required**. uid number to be detected by hardware |

#### Get all alphabet

```http
  GET /api/v1/englishAlphabet/getAllAlphabet
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|      |  | This api will get data of every alphabet  in db until now |

#### Get one alphabet

```http
  GET /api/v1/englishAlphabet/getOneAlphabet/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|   `id`   | `Number` | **Required**. uid number passing from front end as id , using id in params item will get from db   |

#### Update alphabet

```http
  PATCH /api/v1/englishAlphabet/updateAlphabet/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `key` | `Number` | A unique key number by user, (later may we can automate using crypto) |
| `text` | `string` |text of item (eg: Apple) |
| `textAudio` | `string` |  audio of text ( eg: "apple, A for Apple" ) here we are accepting only link, so we should upload data to cloud and provide link to db|
| `storyText` | `string` |  2  sentence for story of object |
| `storyAudio` | `string` |  Link of audio of story after uploading to cloud |
| `image` | `string` | Link of image after uploading into cloud, (for testing you can provide a image address from internet) |
| `uid` | `string` |  uid number to be detected by hardware |

 - user can only enter data they wanted to update, backend will only update data front end provides, but it is capable of updating everything at a time.


