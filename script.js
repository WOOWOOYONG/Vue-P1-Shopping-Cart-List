const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      products: [
        {
          name: "Poke Ball",
          price: 200,
          imgUrl: "./imgs/pokeball1.png",
        },
        {
          name: "Great Ball",
          price: 230,
          imgUrl: "./imgs/pokeball2.png",
        },
        {
          name: "Ultra Ball",
          price: 260,
          imgUrl: "./imgs/pokeball3.png",
        },
        {
          name: "Quick Ball",
          price: 250,
          imgUrl: "./imgs/pokeball4.png",
        },
      ],
      size: ["XS", "S", "M", "L", "XL"],
      addOns: ["傷藥", "王者之證", "哞哞鮮奶"],
      itemSelected: {},
      orderList: [],
      orderTotal: 0,
    };
  },
  methods: {
    selectProduct(product) {
      this.itemSelected = {
        count: 1,
        size: "XS",
        addon: [],
        notice: "",
        ...product,
      };
    },
    addToOrder(product) {
      //把選定的產品資料複製到order這個物件，並賦予一個新的屬性total
      const order = {
        ...product,
        total: (product.price + product.addon.length * 10) * product.count,
      };
      this.orderList.push(order);
      this.countTotal();
      this.resetOrder();
    },
    countTotal() {
      this.orderTotal = 0;
      this.orderList.forEach((item) => {
        this.orderTotal += item.total;
      });
    },
    resetOrder() {
      this.itemSelected = {};
    },
    resetAllOrder() {
      this.itemSelected = {};
      this.orderList = {};
      this.orderTotal = 0;
    },
  },
}).mount("#app");
