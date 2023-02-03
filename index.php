<?php 
$style_sheet = "./app/scss/dist/style.css";
$page_title="KNIGI- Home";
include "./pageComponent/_head.php";

?>



<body>
    <?php include "./pageComponent/_navigation.php"; ?>
    <header>
        <div class="header-image-container">
            <img src="./app/img/headerImg1.jpg" alt="books">
            <img src="./app/img/headerImg2.jpg" alt="books">
            <img src="./app/img/headerImg3.jpg" alt="books">
        </div>
        
        <div class="hero-text-container">
            <h1>Buy Books, Anywhere</h1>
            <a href="./shopall.html">Shop Now</a>
        </div>

    </header>

    <section class="flex flex-wrap about-us-section">
        <div class="about-u-s-item">
            <h1>design <span class="design-span">and</span> travel</h1>
        </div>
        <div class="about-u-s-item">
            <h4>ABOUT US</h4>
            <p class="about-us-p">Woven Magazine celebrates artists, designers, and entrepreneurs while exploring the history of design through travel.</p>
        </div>
    </section>

    <section class="their-stories">
        <h4>THE STORIES</h4>
        <div class="their-stories-menu-container flex flex-s-b">
            <div class="their-stories-menu">
                <!-- empty div -->
            </div>

            <div class="their-stories-menu flex flex-s-b">
                <a href="./films.html" title="see films about these books">
                    SEE FILMS
                </a>

                <a href="./allStories.html" title="View all the stories">                    
                    SEE ALL STORIES
                </a>
            </div>
        </div>

        <div class="stories-main-sec-container flex flex-wrap flex-s-b">
            <!-- asassdsasdfsadfsadasdffsdf -->
            <!-- 1 -->
            <div>
                <div class="s-t-image-sec">
                    <img src="./app/img/stories/stories1.jpg" alt="stories image">
                    <div>
                        <div class="linkcontainer">
                            <a href="./stories.html" class="s-t-link">Read more</a>
                        </div>
                    </div>
                </div>
                <div class="s-t-content" style="color:red;">
                    <h6>SHANTELL MARTIN <span>| ART</span></h6>
                    <a href="./stories.html">Well, ARE YOU?</a>
                    <p class="s-t-content-para">Artist and educator Shantell Martin uses her work to ask the ultimate question 
                        of identity: Are you, YOU?
                    </p>
                    <span class="s-t-content-date">10.05.19</span>
                </div>
                
            </div>

            <!-- 2 -->
            <div>
                <div class="s-t-image-sec">
                    <img src="./app/img/stories/stories2.jpg" alt="stories image">
                    <div>
                        <div class="linkcontainer">
                            <a href="./stories.html" class="s-t-link">Read more</a>
                        </div>
                    </div>
                </div>
                <div class="s-t-content">
                    <h6>CRÉ NATURAL BUILDING <span>| ARCHITECTURE</span></h6>
                    <a href="./stories.html">Closer to Home</a>
                    <p class="s-t-content-para">Bryce Ehrecke & Kelly Brown share how natural building could 
                        empower both a more beautiful and a more sustainable future.
                    </p>
                    <span class="s-t-content-date">11.11.19</span>
                </div>
            </div>

            <!-- 3 -->
            <div>
                <div class="s-t-image-sec">
                    <img src="./app/img/stories/stories3.jpg" alt="stories image">
                    <div>
                        <div class="linkcontainer">
                            <a href="./stories.html" class="s-t-link">Read more</a>
                        </div>
                    </div>
                </div>
                <div class="s-t-content">
                    <h6>ALISON CARROLL <span>| ENTREPRENEUR</span></h6>
                    <a href="./stories.html">Wonder Valley</a>
                    <p class="s-t-content-para">Wonder Valley is a built around the essentials for cultivating a 
                        rich existence, with good food and good health for a good life.
                    </p>
                    <span class="s-t-content-date">10.05.19</span>
                </div>
            </div>

            <!-- 4 -->
            <div>
                <div class="s-t-image-sec">
                    <img src="./app/img/stories/stories4.jpg" alt="stories image">
                    <div>
                        <div class="linkcontainer">
                            <a href="./stories.html" class="s-t-link">Read more</a>
                        </div>
                    </div>
                </div>
                <div class="s-t-content">
                    <h6>JUSTIN CHUNG <span>| PHOTOGRAPHER</span></h6>
                    <a href="./stories.html">Faculty Department</a>
                    <p class="s-t-content-para">Photographer Justin Chung’s project Faculty Department is an ode
                        to the inspiration found in his subjects.
                    </p>
                    <span class="s-t-content-date">10.05.19</span>
                </div>
            </div>

            <!-- 5 -->
            <div>
                <div class="s-t-image-sec">
                    <img src="./app/img/stories/stories5.jpg" alt="stories image">
                    <div>
                        <div class="linkcontainer">
                            <a href="./stories.html" class="s-t-link">Read more</a>
                        </div>
                    </div>
                </div>
                <div class="s-t-content">
                    <h6>JOEKENNETH MUSEAU <span>| CERAMICS</span></h6>
                    <a href="./stories.html">The Journey of Departure</a>
                    <p class="s-t-content-para">As a tribute to his mother and the pain of losing her to cancer, Joekenneth Museau writes about 
                        the depths of pain, and the heights of growth he’s experienced through healing.
                    </p>
                    <span class="s-t-content-date">10.05.19</span>
                </div>
            </div>

            <!-- 6 -->
            <div>
                <div class="s-t-image-sec">
                    <img class="s-t-image-main" src="./app/img/stories/stories6.jpg" alt="stories image">
                    <div>
                        <div class="linkcontainer">
                            <a href="./stories.html" class="s-t-link">Read more</a>
                        </div>
                    </div>
                </div>
                <div class="s-t-content">
                    <h6>PAGE, AZ <span>| LANDSCAPE</span></h6>
                    <a href="./stories.html">Antelope Canyon</a>
                    <p class="s-t-content-para">Worn by wind and sand, these centuries old slot canyons are a sculpted masterpiece, such that only nature could reveal.
                    </p>
                    <span class="s-t-content-date">10.05.19</span>
                </div>
            </div>

            <!-- 7 -->
            <div>
                <div class="s-t-image-sec">
                    <img class="s-t-image-main" src="./app/img/stories/stories7.jpg" alt="stories image">
                    <div>
                        <div class="linkcontainer">
                            <a href="./stories.html" class="s-t-link">Read more</a>
                        </div>
                    </div>
                </div>

                <div class="s-t-content">
                    <h6>CODY COBB <span>| PHOTOGRAPHER</span></h6>
                    <a href="./stories.html">Eons of Earth</a>
                    <p class="s-t-content-para">As a photographer and solo traveler, Cody Cobb elevates the grandeur of the natural world beyond the boundary of civilization.
                    </p>
                    <span class="s-t-content-date">10.05.19</span>
                </div>
            </div>

            <!-- 8 -->
            <div>
                    <div class="s-t-image-sec">
                        <img class="s-t-image-main" src="./app/img/stories/stories8.jpg" alt="stories image">
                        <div>
                            <div class="linkcontainer">
                                <a href="./stories.html" class="s-t-link">Read more</a>
                            </div>
                        </div>
                    </div>
                <div class="s-t-content">
                    <h6>JULIANNE AHN <span>| CERAMICS</span></h6>
                    <a href="./stories.html">Object & Totem</a>
                    <p class="s-t-content-para">Ceramicist Julianne Ahn reflects on the meditative process of her work and how it taught her balance between seasons of life.
                    </p>
                    <span class="s-t-content-date">10.05.19</span>
                </div>
            </div>
        </div>

    </section>


    <?php 
        include "./pageComponent/_blogPost_summary.php" ;
        include "./pageComponent/_footer.php";
        
    ?>
    <script src="./app/js/script.js"></script>
</body>
</html>