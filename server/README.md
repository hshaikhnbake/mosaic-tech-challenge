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

```
npm install
```

### Application Usage

---

```
1. Run `npm dev start` to start the server and have nodemon up and running. Running on `localhost:1337`

2. Use Postman to verify solutions
```

### In Postman

```
3. For Step 1 Solution type `https://localhost:1337/api/ping`

4.  For Step 2 Solution found using `https://localhost:1337/:tags/:sortBy?/:direction?`

*parameter guide*

tags = can be single tags or multiple tags (to be seperated with a comma)
- science to pull all posts with science tag
-science,tech to pull all posts science and tech tag

sortBy = the field to sort the posts by. Acceptable fields are:
- id
- reads
- likes
- popularity

direction = the director for sorting. Acceptable fields are:
- desc
- asc
```

### Testing

```
5. In the `/server` directory run API tests, type `npx mocha src/test.js` in the console
```
