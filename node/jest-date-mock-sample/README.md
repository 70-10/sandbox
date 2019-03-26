# jest mock date samples

Mocking `Date` for Jest

```js
const mockDate = new Date("2015-01-01");
jest.spyOn(global, "Date").mockImplementation(() => mockDate);
```
