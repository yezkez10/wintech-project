import React from 'react';
import NavBar from './NavBar';
import Carousell from './graphics/Carousell.js';

function Home() {
    return (
        <body>
            <div class="sticky top-0 w-full">
                <nav class="bg-gray-200 p-2">
                    <ul class="flex  justify-end text-sm">
                        <li class="mr-6">
                            <a class="text-500" href="#">Help</a>
                        </li>
                        <li class="mr-6">
                            <a class="text-500" href="#">Store Locator</a>
                        </li>
                        <li class="mr-6">
                            <a class="text-500 font-bold" href="#">English</a>
                        </li>
                    </ul>
                </nav>

            </div>
            
            <NavBar />
            <Carousell />

            <noscript>You need to enable JavaScript to run this app.</noscript>
        </body>
    );
};

export default Home;