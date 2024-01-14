import React from "react";
import NavBar from "../NavBar";
import Carousel from "../graphics/Carousel.js";
import slidesbaby from "../data/carouselbaby.json";

function Baby() {
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
      <Carousel data={slidesbaby.slidesbaby} />

      <noscript>You need to enable JavaScript to run this app.</noscript>
    </body>
  );
}

export default Baby;
