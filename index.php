<?php require_once './view/useCSSJavascript.php'; ?>

<div id="container">
    <?php
    require_once './view/header.php';
    require_once './view/navigation.php';
    ?>
    <section id="primary" role="primary">
        <div class="inner-container"> 
            <div role="main" id="content"> 
                <?php require_once './view/slider.php'; ?>
                <br/> <br/> <br/> 
                <?php require_once 'shortEvents.php'; ?>
            </div>
            
            <?php require_once 'calenderManualSearch.php'; ?>
        </div>
    </section>
</div>

<?php require_once './view/footer.php';