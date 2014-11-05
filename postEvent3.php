<?php require_once './view/useCSSJavascript.php'; 

if ($_POST) {
    require_once './model/query.php';
    query::tryEventsfinal();
        header('location: postEvent4.php');
   }?>
   
<div id="container">
    <?php
    require_once './view/header.php';
    require_once './view/navigation.php';
    ?>
    
    <section class="register row">
        <form class="form-horizontal" method="POST">         
            <div class="form-group">
                <label class="col-md-4 control-label" for="url">Event URL</label>  
                <div class="col-md-4">
                    <div class="input-group">
                        <div class="input-group-addon">www.</div>
                        <input class="form-control" type="text" name="url" placeholder="Enter URL" style="background-color: white">
                        <div class="input-group-addon">.com</div>
                    </div>
                </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label" for="contact">Contact Number</label>  
                <div class="col-md-4">
                    <input id="contact" name="contact" type="text" placeholder="Enter Contact Number" class="form-control input-md" required="" style="background-color: white">
                </div>
            </div>
            
            <!-- Text input-->
                <div class="form-group">
                    <label class="col-md-4 control-label" for="email">Contact E-Mail ID</label>  
                    <div class="col-md-4">
                        <div class="input-group">
                            <div class="input-group-addon">@</div>
                            <input class="form-control" name="email" type="text" placeholder="Enter email" style="background-color: white">
                        </div>
                    </div>
                </div>
            
            <div class="form-group">
                <label class="col-md-4 control-label" for="Cateogary">Event Cateogary</label>
                <div class="col-md-2">
                    <select id="cateogary" name="Cateogary" class="form-control">
                        <option value="Dance">Dance</option>
                        <option value="Food">Food</option>
                    </select>
                </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label" for="guest">Chief Guest</label>  
                <div class="col-md-4">
                    <input id="guest" name="guest" type="text" placeholder="Enter Chief Guest" class="form-control input-md">
                </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label" for="totalguest">Total Number of Guests:</label>  
                <div class="col-md-2">
                    <input id="totalguest" name="totalguest" type="text" placeholder="Total Guests" class="form-control input-md">
                </div>
            </div>

            <!-- Multiple Radios (inline) -->
            <div class="form-group">
                <label class="col-md-4 control-label" for="weekend">On Weekend ??</label>
                <div class="col-md-4"> 
                    <label class="radio-inline" for="weekend-0">
                        <input type="radio" name="weekend" id="weekend-0" value="Yes" checked="checked">
                        Yes
                    </label> 
                    <label class="radio-inline" for="weekend-1">
                        <input type="radio" name="weekend" id="weekend-1" value="NO">
                        No
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label" for="free">Is Free ??</label>
                <div class="col-md-4"> 
                    <label class="radio-inline" for="free-0">
                        <input type="radio" name="free" id="free-0" value="YES" checked="checked">
                        Yes
                    </label> 
                    <label class="radio-inline" for="free-1">
                        <input type="radio" name="free" id="free-1" value="NO">
                        No
                    </label>
                </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label" for="price">Event Price</label>  
                <div class="col-md-2">
                    <div class="input-group">
                        <div class="input-group-addon">$</div>
                        <input class="form-control" name="price" type="text" placeholder="Enter Price" style="background-color: white">
                    </div>
                </div>
            </div>
            
            <div class="btn-group">
                <div style="float: right">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="postEvent2.php"><button type="button" class="btn btn-primary">Previous</button></a>
                </div>
            </div>
            
            <div class="btn-group">
                <div style="float: right">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<!--                  <a href="postEvent4.php"><button type="button" class="btn btn-primary">Finalize</button></a>-->
                        <button type="submit" class="btn btn-primary">Finalize</button>
                </div>
            </div>

            <br/><br/>
            <div class="progress">
                <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 95%">
                    <span class="sr-only">95% Complete</span>
                </div>
            </div>
        </form>
    </section>
</div>

<?php
require_once './view/footer.php';
