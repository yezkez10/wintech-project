import React from "react";
import Product from "../components/Product";

function Women() {
  const colors = [
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/460915/chip/goods_01_460915_chip.jpg",
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/460915/chip/goods_09_460915_chip.jpg",
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/460915/chip/goods_24_460915_chip.jpg",
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/460915/chip/goods_53_460915_chip.jpg",
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/460915/chip/goods_69_460915_chip.jpg",
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/460915/chip/goods_74_460915_chip.jpg",
  ];
  return (
    <Product
      colors={colors}
      img="https://image.uniqlo.com/UQ/ST3/sg/imagesgoods/460915/item/sggoods_01_460915.jpg?width=320"
      gender="WOMEN"
      size="XS-3XL"
      title="Ultra Light Down Parka"
    />
  );
}

export default Women;
