import React from "react";
import NavBar from "../NavBar";
import Carousel from "../graphics/Carousel.js";
import slideswomen from "../data/carouselwomen.json";
import Product from "../components/Product.js";

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
    <body>
      <div class="sticky top-0 w-full">
        <nav class="bg-gray-200 p-2">
          <ul class="flex  justify-end text-sm">
            <li class="mr-6">
              <a class="text-500" href="/Help">
                Help
              </a>
            </li>
            <li class="mr-6">
              <a class="text-500" href="/StoreLocator">
                Store Locator
              </a>
            </li>
            <li class="mr-6">
              <a class="text-500 font-bold" href="/Language">
                English
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <NavBar />
      <Product
        colors={colors}
        img="https://image.uniqlo.com/UQ/ST3/sg/imagesgoods/460915/item/sggoods_01_460915.jpg?width=320"
        gender="WOMEN"
        size="XS-3XL"
        title="Ultra Light Down Parka"
      />
      <Carousel data={slideswomen.slideswomen} />

      <noscript>You need to enable JavaScript to run this app.</noscript>
    </body>
  );
}

export default Women;
