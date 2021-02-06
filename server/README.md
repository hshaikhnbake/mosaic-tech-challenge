# Hatchways Backend Challenge

## Instructions

### System Requirements

---

```
Node v14.11.0
Postman
```

### Application Install

---

run `npm install` in `/server` directory

### Application Usage

---

1. Run `npm dev start` to start the server and have nodemon up and running. Running on `localhost:1337`

2. Use Postman to verify solutions

### In Postman

3. For Step 1 Solution perform a GET request on `https://localhost:1337/api/ping`

4. For Step 2 Solution performing a GET request on `https://localhost:1337/:tags/:sortBy?/:direction?`

| Paramters | Explination                                                        | Example                                     |
| --------- | ------------------------------------------------------------------ | ------------------------------------------- |
| tags      | can be single tags or multiple tags (to be seperated with a comma) | Example 1: science, Example 2: science,tech |
| sortBy    | the field to sort the posts by specific property                   | `id` `reads` `likes` `popularity`           |
| direction | the direction for sorting                                          | `desc` `asc`                                |

### Testing

5. In the `/server` directory run API tests, type `npx mocha src/test.js` in the console
