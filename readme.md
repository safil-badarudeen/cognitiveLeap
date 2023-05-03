
# Cognitive Leap

Cognitive leap is project to improve learning curve of neurodivergent citizens by utilizing their whole senses.


## API Reference for english alphabet

#### Create alphabet

```http
  method: POST
  
  /api/v1/englishAlphabet/createAlphabet
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `key` | `Number` | **Required**. A unique key number by user, (later may we can automate using crypto) |
| `text` | `string` | **Required**.text of item (eg: Apple) |
| `textAudio` | `string` | **Required**. audio of text ( eg: "apple, A for Apple" ) here we are accepting only link, so we should upload data to cloud and provide link to db|
| `storyText` | `string` | **Required**. 2 line sentence for story of object |
| `storyAudio` | `string` | **Required**. Link of audio of story after uploading to cloud |
| `image` | `string` | **Required**. Link of image after uploading into cloud, (for testing you can provide a image address from internet) |
| `uid` | `string` | **Required**. uid number to be detected by hardware |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

