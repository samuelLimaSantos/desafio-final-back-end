# Documentação dos endpoints da aplicação

## Get

- Listar restaurantes

```http
  /restaurants
```

Vai retornar =>

```json
[
  {
    "id": "string" | "number",
    "name": "string",
    "address": "string",
    "urlLogo": "string",
  }
]
```

- Listar produtos de um restaurante (contem dados do restaurante tbm)

```http
  /restaurants/:id
```

```json
{
  "id": "string" | "number",
  "name": "string",
  "address": "string",
  "urlLogo": "string",
  "urlCover": "string",
  "description": "string",
  "responsible": "string",
  "products": [
    {
      "id": "string" | "number",
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
- Criar produto para um restaurante
- Criar extra
