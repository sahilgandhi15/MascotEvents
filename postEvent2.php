<?php require_once './view/useCSSJavascript.php'; 

if ($_POST) {
    require_once './model/query.php';
    query::tryEvents();
        header('location: postEvent3.php');

   }?>
   

<div id="container">
    <?php
    require_once './view/header.php';
    require_once './view/navigation.php';
?>
    
    <section class="register row">
        <form class="form-horizontal" method="POST">
            <div class="form-group">
                <label class="col-md-4 control-label" for="parking">Parking Available ??</label>
                <div class="col-md-4"> 
                    <label class="radio-inline" for="parking-0">
                        <input type="radio" name="parking" id="parking-0" value="yes" checked="checked">
                        Yes
                    </label> 
                    <label class="radio-inline" for="parking-1">
                        <input type="radio" name="parking" id="parking-1" value="No">
                        No
                    </label>
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-4 control-label" for="washroom">Washroom Available ??</label>
                <div class="col-md-4"> 
                    <label class="radio-inline" for="washroom-0">
                        <input type="radio" name="washroom" id="washroom-0" value="Yes" checked="checked">
                        Yes
                    </label> 
                    <label class="radio-inline" for="washroom-1">
                        <input type="radio" name="washroom" id="washroom-1" value="No">
                        No
                    </label>
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-4 control-label" for="wheelchair">Wheelchair Facility</label>
                <div class="col-md-4"> 
                    <label class="radio-inline" for="wheelchair-0">
                        <input type="radio" name="wheelchair" id="wheelchair-0" value="Available" checked="checked">
                        Available
                    </label> 
                    <label class="radio-inline" for="wheelchair-1">
                        <input type="radio" name="wheelchair" id="wheelchair-1" value="Not_Available">
                        Not Available
                    </label>
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-4 control-label" for="food">Food and Beverages</label>
                <div class="col-md-4"> 
                    <label class="radio-inline" for="food-0">
                        <input type="radio" name="food" id="food-0" value="Available" checked="checked">
                        Available
                    </label> 
                    <label class="radio-inline" for="food-1">
                        <input type="radio" name="food" id="food-1" value="Not_Available">
                        Not Available
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label" for="liquor">Liquor</label>
                <div class="col-md-4"> 
                    <label class="radio-inline" for="liquor-0">
                        <input type="radio" name="liquor" id="liquor-0" value="Available" checked="checked">
                        Available
                    </label> 
                    <label class="radio-inline" for="liquor-1">
                        <input type="radio" name="liquor" id="liquor-1" value="Not_Available">
                        Not Available
                    </label>
                </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label" for="time">Event Time</label>  
                <div class="col-md-2">
          
                    <input id="stime" name="stime" type="text" placeholder="Start Time" class="form-control input-md" required="" style="background-color: white">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                &nbsp;&nbsp;TO
                <input id="etime" name="etime" type="text" placeholder="End Time" class="form-control input-md" required="" style="background-color: white">
                </div>
            </div>


            <!-- Textarea -->
            <div class="form-group">
                <label class="col-md-4 control-label" for="shortDesc">Events Short Description</label>
                <div class="col-md-4">                     
                    <textarea class="form-control" id="detailedDesc" name="shortDesc"></textarea>
                </div>
            </div>

            <!-- Textarea -->
            <div class="form-group">
                <label class="col-md-4 control-label" for="detailedDesc" >Events Detailed Description</label>
                <div class="col-md-4">                     
                    <textarea class="form-control" id="detailedDesc" name="detailedDesc" rows="4" cols="50"></textarea>
                </div>
            </div>


            <div class="btn-group">
                <div style="float: right">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="postEvent1.php"><button type="button" class="btn btn-primary">Previous</button></a>
                </div>
            </div>

            <div class="btn-group">
                <div style="float: right">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<!--                 <a href="postEvent3.php"><button type="button" class="btn btn-primary">Next</button></a>-->
                <button type="submit" class="btn btn-primary">Next</button>
                </div>
            </div>

            <br/><br/>
            <div class="progress">
                <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 55%">
                    <span class="sr-only">35% Complete</span>
                </div>
            </div>


        </form>
    </section>
</div>

<?php
require_once './view/footer.php';
