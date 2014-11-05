<?php require_once './view/useCSSJavascript.php'; 
       $array1=array();
        $array2=array();
        $array3=array();
    if( !isset( $_SESSION ) ) {
    session_start();
    }
    $array1 = $_SESSION['pe1'];
    $array2 = $_SESSION['pe2'];
    $array3 = $_SESSION['pe3'];
    
    if ($_POST) {
    require_once './model/query.php';
    query::addEvent();
    //    header('location: postEvent2.php');

   }?>
?>
<div id="container">
    <?php
    require_once './view/header.php';
    require_once './view/navigation.php';
     ?>
    <section class="register row">
       
        
        <div class="btn-group">
            <div style="float: right">
                PAGE 1
                <br>
                <br>
         <?php       
             foreach ($array1 as $key=>$val)
             {
                 echo $key."  --------- ". $val.PHP_EOL;
             }          
    ?> 
                <br>
                <br>
                PAGE 2
                <br>
                <br>
                   <?php       
             foreach ($array2 as $key=>$val)
             {
                 echo $key."  --------- ". $val.PHP_EOL;
             }       
    ?>               
                <br>
                <br>
                PAGE 3
                <br>
                <br>
                      <?php       
             foreach ($array3 as $key=>$val)
             {
                 echo $key."  --------- ". $val.PHP_EOL;
             }       
    ?> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<!--                <a href="index.php"><button type="button" class="btn btn-primary">Confirm and Post</button></a>-->
<button type="submit" class="btn btn-primary">Confirm and Post</button>
            </div>
        </div>

        <br/><br/>
        <div class="progress">
            <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 95%">
                <span class="sr-only">95% Complete</span>
            </div>
        </div>
    </section>
</div>

<?php
require_once './view/footer.php';
