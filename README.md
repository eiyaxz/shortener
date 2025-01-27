# shortener 🔗
a simple and intuitive link shortener API. :D

## how to install ❓
1. clone the repository by using `git clone https://github.com/eiyaxz/shortener.git`.
2. install the project's dependencies using `npm install`.
3. run `npm run start` and use a tool like [insomnia](https://insomnia.rest) to make requests to the api.

> [!NOTE]
> the default port is `3333`. you can change that in `src/server.ts`.

## endpoints 🔚

### `GET *`
default catch-all route.

- **response** (`404`):  
  ```json
  {
    "error": "Page not found"
  }
  ```

### `POST /short`
creates a new short link.

- **body**:  
  ```json
  {
    "url": "https://google.com/"
  }
  ```

- **response** (`201`):  
  ```json
  {
    "short": "2796e032"
  }
  ```

- **response** (`400`):  
  ```json
  {
    "error": "Invalid URL"
  }
  ```

### `GET /:short`
finds the original link associated with the given code.  
automatically redirects you to the associated page.

- **path parameters**:  
  `short` - the short's code.

- **response** (`404`):  
  ```json
  {
    "error": "Short not found"
  }
  ```