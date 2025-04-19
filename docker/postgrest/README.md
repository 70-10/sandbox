# PostgREST Example
    
## Usage

### GET

```
curl http://localhost:3000/User
```

### POST

```
curl -X POST http://localhost:3000/User \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com"}'
```

### PATCH

```
curl -X PATCH http://localhost:3000/User?id=eq.1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice Updated"}'
```

### DELETE

```
curl -X DELETE http://localhost:3000/User?id=eq.1
```