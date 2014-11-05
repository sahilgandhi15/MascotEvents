<?php require_once './view/useCSSJavascript.php'; 

if ($_POST) {
    require_once './model/query.php';
    query::tryEvent();
        header('location: postEvent2.php');

   }?>

<div id="container">
    <?php
    require_once './view/header.php';
    require_once './view/navigation.php';
    
   
    ?>
    <section class="register row">
        <form class="form-horizontal" method="POST">
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Event's Major Information</h1><br/>
            <div class="form-group">
                <label class="col-md-4 control-label" for="eventname">Name of the Event</label>  
                <div class="col-md-4">
                    <input id="eventname" name="eventname" type="text" placeholder="Enter the Name of the Event" required="" class="form-control input-md" required="" style="background-color: white">
                </div>
            </div>

            <!-- File Button --> 
            <div class="form-group">
                <label class="col-md-4 control-label" for="eventimg">Event Image</label>
                <div class="col-md-4">
                    <input id="eventimg" name="eventimg" class="input-file" type="file" style="width: 280px">
                </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label" for="venue">Venue</label>  
                <div class="col-md-4">
                    <input id="venue" name="venue" type="text" placeholder="Enter the Venue" class="form-control input-md" required="" style="background-color: white">
                </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label" for="city">City</label>  
                <div class="col-md-4">
                    <input id="city" name="city" type="text" placeholder="Enter the City" class="form-control input-md" required="" style="background-color: white">
                </div>
            </div>

            <!-- Search input-->
            <div class="form-group">
                <label class="col-md-4 control-label" for=""></label>
                <div class="col-md-4">
                    <input id="calen" name="calen" type="search" placeholder="calender" class="form-control input-md" required="" style="background-color: white">
                </div>
            </div>

            <!-- Select Basic -->
            <div class="form-group">
                <label class="col-md-4 control-label" for="intersection">Major Intersection</label>
                <div class="col-md-2">
                    <select id="intersection" name="intersection1" class="form-control">
                        <option value="Albion Road">Albion Road</option>
                        <option value="Dixie Road">Dixie Road</option>
                    </select>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       AND
                    <select id="intersection" name="intersection2" class="form-control">
                        <option value="Martin Grove Road">Martin Grove Road</option>
                        <option value="Bloor West">Bloor West</option>
                    </select>
                </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label" for="subway">Nearest Subway Station</label>  
                <div class="col-md-4">
                    <input id="subway" name="subway" type="text" placeholder="Subway Station" class="form-control input-md" required="" style="background-color: white">
                </div>
            </div>

            <div class="btn-group">
                <div style="float: right">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<!--                    <a href="postEvent2.php"><button type="submit" class="btn btn-primary">Next</button></a>-->
                <button type="submit" class="btn btn-primary">Next</button>
                </div>
            </div>
            <br/><br/>
            <div class="progress">
                <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="50" style="width: 30%">
                    <span class="sr-only">35% Complete</span>
                </div>
            </div>
        </form>
    </section>
</div>

<?php
require_once './view/footer.php';
