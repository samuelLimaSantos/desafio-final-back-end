# Documentação dos endpoints da aplicação

## Get

- Listar restaurantes

```http
  rest/restaurants
```

Vai retornar =>

```json
[
  {
    "id": "string",
    "name": "string",
    "address": "string",
    "urlLogo": "string"
  }
]
```

- Listar produtos de um restaurante (contem dados do restaurante tbm)

```http
  rest/restaurants/:id
```

```json
{
  "id": "string",
  "name": "string",
  "address": "string",
  "urlLogo": "string",
  "urlCover": "string",
  "description": "string",
  "responsible": "string",
  "products": [
    {
      "id": "string",
      "name": "string",
      "urlImage": "string",
      "description": "string",
      "price": "number",
      "extras": [
        {
          "id": "string" | "number",
          "name": "string",
          "price": "number",
        }
      ]
    }
  ]
}
```

## Post

- Criar um restaurante

```http
  rest/restaurants
```

```json
{
  "name": "string",
  "address": "string",
  "urlLogo": "string",
  "urlCover": "string",
  "description": "string",
  "responsible": "string"
}
```

- Criar produto para um restaurante

```http
  rest/products/:id
```

```json
{
  "name": "string",
  "urlImage": "string",
  "description": "string",
  "price": "number",
  "extras": [
    {
      "id": 1
    },
    {
      "id": 2
    }
  ]
}
```

- Criar extra

```http
  rest/products/extras
```

```json
{
  "name": "string",
  "price": "number"
}
```
