<?php require_once './view/useCSSJavascript.php'; ?>

<div id="container">
    <?php
    require_once './view/header.php';
    require_once './view/navigation.php';
    ?>
    <section class="register row">
        <h1>Events Today on
            <?php
            $dt = new DateTime();
            echo $dt->format('d-M-Y');
            ?>
        </h1>
        <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
                <img src="images/im2.jpg" alt="">
                <div class="caption">
                    <h3>Thumbnail label</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p><a href="#" class="btn btn-primary" role="button">Button</a> 
                        <a href="#" class="btn btn-default" role="button">Button</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
                <img src="images/im2.jpg" alt="">
                <div class="caption">
                    <h3>Thumbnail label</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p><a href="#" class="btn btn-primary" role="button">Button</a> 
                        <a href="#" class="btn btn-default" role="button">Button</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
                <img src="images/im2.jpg" alt="">
                <div class="caption">
                    <h3>Thumbnail label</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p><a href="#" class="btn btn-primary" role="button">Button</a> 
                        <a href="#" class="btn btn-default" role="button">Button</a>
                    </p>
                </div>
            </div>
        </div>
        <h1>Events Tomorrow on <?php
            $dt = new DateTime('tomorrow');
            echo $dt->format('d-M-Y');
            ?>
        </h1>
        <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
                <img src="images/im2.jpg" alt="">
                <div class="caption">
                    <h3>Thumbnail label</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p><a href="#" class="btn btn-primary" role="button">Button</a> 
                        <a href="#" class="btn btn-default" role="button">Button</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
                <img src="images/im2.jpg" alt="">
                <div class="caption">
                    <h3>Thumbnail label</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p><a href="#" class="btn btn-primary" role="button">Button</a> 
                        <a href="#" class="btn btn-default" role="button">Button</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
                <img src="images/im2.jpg" alt="">
                <div class="caption">
                    <h3>Thumbnail label</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p><a href="#" class="btn btn-primary" role="button">Button</a> 
                        <a href="#" class="btn btn-default" role="button">Button</a>
                    </p>
                </div>
            </div>
        </div>
        <h1>Events Later on after <?php
            $dt = new DateTime('tomorrow');
            echo $dt->format('d-M-Y');
            ?>
        </h1>
        <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
                <img src="images/im2.jpg" alt="">
                <div class="caption">
                    <h3>Thumbnail label</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p><a href="#" class="btn btn-primary" role="button">Button</a> 
                        <a href="#" class="btn btn-default" role="button">Button</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
                <img src="images/im2.jpg" alt="">
                <div class="caption">
                    <h3>Thumbnail label</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p><a href="#" class="btn btn-primary" role="button">Button</a> 
                        <a href="#" class="btn btn-default" role="button">Button</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
                <img src="images/im2.jpg" alt="">
                <div class="caption">
                    <h3>Thumbnail label</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p><a href="#" class="btn btn-primary" role="button">Button</a> 
                        <a href="#" class="btn btn-default" role="button">Button</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</div>

<?php
require_once './view/footer.php';
