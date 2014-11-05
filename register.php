<?php
require_once './view/useCSSJavascript.php';

if ($_POST) {
    require_once './model/query.php';
    query::addMember();
    header('location: index.php');
}
?>

<div id="container">
    <?php
    require_once './view/header.php';
    require_once './view/navigation.php';
    ?>
    <section class="register row">
        <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;Member Registration</h1><br/>

        <form class="form-horizontal" method="POST">
            <center>
                <div class="form-group">
                    <label class="col-md-4 control-label" for="fname">First Name</label>  
                    <div class="col-md-3">
                        <input id="fname" name="fname" type="text" placeholder="Enter Your Name" class="form-control input-md" required="" style="background-color: white">
                    </div>
                </div>

                <!-- Text input-->
                <div class="form-group">
                    <label class="col-md-4 control-label" for="email">E-Mail ID</label>  
                    <div class="col-md-4">
                        <div class="input-group">
                            <div class="input-group-addon">@</div>
                            <input class="form-control" required="" id="email" name="email" type="email" placeholder="Enter email" style="background-color: white">
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-md-4 control-label" for="unm">User Name</label>  
                    <div class="col-md-3">
                        <input id="unm" name="unm" type="text" placeholder="Enter Your User Name" class="form-control input-md" required="" style="background-color: white">
                    </div>
                </div>

                <!-- Text input-->
                <div class="form-group">
                    <label class="col-md-4 control-label" for="pass1">Password</label>  
                    <div class="col-md-3">
                        <input id="pass1" name="pass1" type="text" placeholder="Enter Your Password" class="form-control input-md" required="" style="background-color: white">
                    </div>
                </div>

                <!-- Button (Double) -->
                <div class="form-group">
                    <label class="col-md-4 control-label" for="register"></label>
                    <div class="col-md-3">
                        <button id="register" name="cancel" class="btn btn-success">Register</button>
                        <button id="cancel" name="cancel" class="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </center>
        </form>
    </section>
</div>

<?php
require_once './view/footer.php';
