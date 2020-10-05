# Backend

## API
  
### [POST] - /v1/customer  
  
#### Exemplos
  
* Request
  
```json
{
  "CPF": "23456787654",
  "birthdate": "2000-10-04T23:36:51.231Z",
  "email": "email@email.com",
  "name": "Luciano Oliveira",
  "phone": "(11) 98888-7777"
}
```  
  
* Response  

```json
{
  "createdAt": "2020-10-05T00:20:40.895Z",
  "birthdate": "2000-09-04T00:00:00.000Z",
  "phone": "(11) 98888-7777",
  "name": "Luciano Oliveira",
  "CPF": "23456787654",
  "active": true,
  "id": "cddf75e8-f2f8-428d-99bf-50a286c1e89a",
  "email": "email@email.com"
}
```

### [PATCH] - /v1/customer

#### Exemplos

* Request

```json
{
  "birthdate": "2000-10-04T23:36:51.231Z",
  "email": "email2@email.com",
  "name": "Luciano Oliveira",
  "phone": "(11) 98888-0000"
}
```

* Response

```json
{
  "createdAt": "2020-10-05T00:20:40.895Z",
  "birthdate": "2000-09-04T00:00:00.000Z",
  "phone": "(11) 98888-0000",
  "name": "Luciano Oliveira",
  "CPF": "23456787654",
  "active": true,
  "id": "cddf75e8-f2f8-428d-99bf-50a286c1e89a",
  "email": "email2@email.com"
}
```

### [DELETE] - /v1/customer/:id

#### Exemplo

* Response

```json
{
  "removed": true
}
```

### [GET] - /v1/customer

#### Parâmetros opcionais

* name = nome do customer a ser procurado, ex.: /v1/customer?name=Reinaldo

#### Exemplo

* Response

```json
[
  {
    "createdAt": "2020-10-05T00:00:00.000Z",
    "birthdate": "2000-09-04T00:00:00.000Z",
    "phone": "(11) 98888-7777",
    "name": "Luciano Oliveira",
    "CPF": "23456787654",
    "active": true,
    "id": "1abfee43-056b-4c7d-8e03-e19a1bb8787f",
    "email": "email@email.com"
  },
  {
    "createdAt": "2020-10-05T00:00:00.000Z",
    "birthdate": "2000-09-04T00:00:00.000Z",
    "phone": "(11) 98888-7777",
    "name": "Luciano Oliveira",
    "CPF": "23456787654",
    "active": true,
    "id": "3817a8d3-a9b9-45c3-b043-c96c46a3134e",
    "email": "email@email.com"
  },
  {
    "createdAt": "2020-10-05T00:20:40.895Z",
    "birthdate": "2000-09-04T00:00:00.000Z",
    "phone": "(11) 98888-0000",
    "CPF": "23456787654",
    "name": "Luciano Oliveira",
    "active": true,
    "id": "cddf75e8-f2f8-428d-99bf-50a286c1e89a",
    "email": "email2@email.com"
  }
]
```

### [GET] - /v1/customer/:id

#### Exemplo

* Response

```json
{
  "createdAt": "2020-10-05T00:00:00.000Z",
  "birthdate": "2000-09-04T00:00:00.000Z",
  "phone": "(11) 98888-7777",
  "name": "Luciano Oliveira",
  "CPF": "23456787654",
  "active": true,
  "id": "1abfee43-056b-4c7d-8e03-e19a1bb8787f",
  "email": "email@email.com"
}
```
