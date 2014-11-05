<?php require_once './view/useCSSJavascript.php'; ?>

<div id="container">
    <?php
    require_once './view/header.php';
    require_once './view/navigation.php';
    ?>
    <section class="register">
        <div class="row">
            <div class="col-lg-8">
                <form class="form-horizontal col-lg-12">
                    <!-- Form Name -->
                    <h1>Feedback</h1><br/>
                    <!-- Text input-->
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="eventnm">Name of the Event</label>  
                        <div class="col-md-4">
                            <input id="eventnm" name="eventnm" type="text" placeholder="Enter the Name of the Event" class="form-control input-md" required="" style="background-color: white">
                        </div>
                        <div class="col-md-4">
                            <button id="searchevent" name="submit" class="btn btn-primary">Search Event</button>
                        </div>
                    </div>

                    <!-- Text input-->
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="date">Date of the Event</label>  
                        <div class="col-md-4">
                            <input id="date" name="date" type="text" placeholder="" class="form-control input-md" readonly>

                        </div>
                    </div>

                    <!-- Text input-->
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="venue">Venue of the Event</label>  
                        <div class="col-md-4">
                            <input id="venue" name="venue" type="text" placeholder="" class="form-control input-md" readonly>

                        </div>
                    </div>

                    <!-- Textarea -->
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="feedback">Your Feedback</label>
                        <div class="col-md-4">                     
                            <textarea class="form-control" id="feedback" name="feedback"></textarea>
                        </div>
                    </div>

                    <!-- File Button --> 
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="filebutton">Upload a File</label>
                        <div class="col-md-4">
                            <input id="eventimg" name="eventimg" class="input-file" type="file" style="width: 280px">
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-md-4 control-label" for="filebutton">Upload a File</label>
                        <div class="col-md-4">
                            <input id="eventimg" name="eventimg" class="input-file" type="file" style="width: 280px">
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-md-4 control-label" for="filebutton">Upload a File</label>
                        <div class="col-md-4">
                            <input id="eventimg" name="eventimg" class="input-file" type="file" style="width: 280px">
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-md-4 control-label" for="filebutton">Upload a File</label>
                        <div class="col-md-4">
                            <input id="eventimg" name="eventimg" class="input-file" type="file" style="width: 280px">
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-md-4 control-label" for="filebutton">Upload a File</label>
                        <div class="col-md-4">
                            <input id="eventimg" name="eventimg" class="input-file" type="file" style="width: 280px">
                        </div>
                    </div>

                    <!-- Button -->
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="submit"></label>
                        <div class="col-md-4">
                            <button id="feedback" name="submit" class="btn btn-success">Submit</button>
                        </div>
                    </div>

                </form>
            </div>
            <div class="col-lg-4">
                <div class="thumbnail">
                    <img src="images/im2.jpg" alt="">
                    <div class="caption">
                        <h3>Thumbnail label</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. . It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<?php
require_once './view/footer.php';
