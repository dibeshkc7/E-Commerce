const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const orderRequestSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
    },
    product: [
      {
        type: ObjectId,
        ref: "Product",
        required: true,
      },
    ],
    totalOrder: {
      type: Number,
    },
    totalPrice: {
      type: Number,
    },
    orderStatus: {
      type: String,
      enum: ["request" | "payment" | "delivered" | "cancelled"],
    },
    shippingAdress: {
      user: {
        type: ObjectId,
        ref: "User",
      },
      address: {
        type: String,
      },
    },
    stripePaymentIntentId: {
      type: String,
      required: true,
    },
    stripeChargeId: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("OrderRequest", orderRequestSchema);
