<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food</title>
    <link rel="stylesheet" href="./public/styles.css">
</head>

<body class="text-grey-600 p-4">

    <div class="grid grid-cols-3">

        <div>
            <nav>
                <div>
                    <h1>
                        <a href="/">Food</a>
                    </h1>
                </div>
                <ul class="px-10">
                    <li class="text-gray-700 text-lg">
                        <a href="#">
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

        <main class="col-span-2">
            <div class="flex justify-evenly">
                <a href="#" class="btn text-green-800  sm:text-blue-600 ">Log in</a>
                <!--responsive-->
                <a href="#" class="btn border-primary border-2 text-secondary-200">Sign up</a>
            </div>
            <header>
                <h2 class="text-gray-700 text-6xl font-semibold">Recipes</h2>
                <h3 class="font-bold uppercase font-body">Food Ninjas</h3>
                <!--custom font-->
            </header>
            <div>
                <h4 class="font-light">Latest Recipes</h4>
                <div class="grid  lg:grid-cols-3 gap-10">
                    <!--cards -->
                    <div class="px-6 py-6 card">
                        <img src="./public/img/stew.jpg" alt="stew image" class="w-full h-32 object-cover">
                        <div class="m-4">
                            <span class="font-bold">5 Bean Chilli Strew</span>
                            <span class="block">Recipe by Mario</span>
                        </div>
                        <div class="bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full">
                            <span>25 mins</span>
                        </div>
                    </div>
                    <div class="px-6 py-6 card">
                        <img src="./public/img/curry.jpg" alt="stew image" class="w-full h-32 object-cover">
                        <div class="m-4">
                            <span class="font-bold">5 Bean Chilli Strew</span>
                            <span class="block">Recipe by Mario</span>
                        </div>
                        <div class="bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full">
                            <span>25 mins</span>
                        </div>
                    </div>
                    <div class="px-6 py-6 card">
                        <img src="./public/img/noodles.jpg" alt="stew image" class="w-full h-32 object-cover">
                        <div class="m-4">
                            <span class="font-bold">5 Bean Chilli Strew</span>
                            <span class="block">Recipe by Mario</span>
                        </div>
                        <div class="bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full">
                            <span>25 mins</span>
                        </div>
                    </div>
                </div>
                <h4 class="border-b">Most Popular</h4>
                <div>
                    <!--CARDS-->
                </div>
                <div class="flex justify-center">
                    Load More
                </div>
            </div>
        </main>

    </div>

</body>

</html>
