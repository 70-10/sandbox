console.assert(typeof Vue !== "undefined");

const items = [
  { name: "鉛筆", price: 300, quantity: 1 },
  { name: "ノート", price: 400, quantity: 1 },
  { name: "消しゴム", price: 500, quantity: 1 }
];

const vm = new Vue({
  el: "#app",
  data: {
    items
  },
  filters: {
    numberWithDelimiter(value) {
      if (!value) {
        return "0";
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
  },
  computed: {
    totalPrice() {
      return this.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    totalPriceWithTax() {
      return Math.floor(this.totalPrice * 1.08);
    }
  }
});
