<?php

require ('database.php');

class query {

    public static function addMember() {

        $db = Database::getDB();
        
        $name = $_POST['fname'];
        $email = $_POST['email'];
        $unm = $_POST['unm'];
        $pwd = $_POST['pass1'];
        
        $query = "INSERT INTO Member (MemberName,EMail,UserName,Password) values ('$name','$email','$unm','$pwd')";

        $db->exec($query);
    }
    
    public static function tryEvent() {    
        $eventname = $_POST['eventname'];
        $eventimg = $_POST['eventimg'];
        $eventvenue = $_POST['venue'];
        $eventcity = $_POST['city'];
        $eventdate = $_POST['calen'];
        $eventintersection = $_POST['intersection1']." AND ".$_POST['intersection2'];
        $eventsubway = $_POST['subway'];
        $arr=array('nam'=>$eventname,'img'=>$eventimg,'ven'=>$eventvenue,'cit'=>$eventcity,'cal'=>$eventdate,'int'=>$eventintersection,'sub'=>$eventsubway);
        session_start();
        $_SESSION["pe1"]=$arr;
    }
    
    public static function tryEvents() {    
        $parking = $_POST['parking'];
        $washroom = $_POST['washroom'];
        $wheelchair = $_POST['wheelchair'];
        $food = $_POST['food'];
        $liquor = $_POST['liquor'];
        $start = $_POST['stime'];
        $end = $_POST['etime'];
        $short = $_POST['shortDesc'];
        $long = $_POST['detailedDesc'];
        
        $arr=array('park'=>$parking,'wash'=>$washroom,'wheel'=>$wheelchair,'food'=>$food,'liq'=>$liquor,'start'=>$start,'end'=>$end,'short'=>$short,'long'=>$long);
        session_start();
        $_SESSION["pe2"]=$arr;
    }
    
    
    public static function tryEventsfinal() {
        $url=$_POST['url'];
        $con=$_POST['contact'];
        $email=$_POST['email'];
        $cat=$_POST['Cateogary'];
        $guest=$_POST['guest'];
        $max=$_POST['totalguest'];
        $weekend=$_POST['weekend'];
        $free=$_POST['free'];
        $price=$_POST['price'];

        $arr=array('url'=>$url,'con'=>$con,'email'=>$email,'cat'=>$cat,'guest'=>$guest,'max'=>$max,'weekend'=>$weekend,'free'=>$free,'price'=>$price);
        session_start();
        $_SESSION["pe3"]=$arr;
        
    }
    
    public static function addEvent() {

        $db = Database::getDB();
        
        
         if( !isset( $_SESSION ) ) {
    session_start();
    }
    $array1 = $_SESSION['pe1'];
    $array2 = $_SESSION['pe2'];
    $array3 = $_SESSION['pe3'];
    
      
        $eventname = $array1['nam'];
        $eventimg = $array1['img'];
        $eventvenue = $array1['ven'];
        $eventcity = $array1['cit'];
        $eventdate = $array1['cal'];
        $eventintersection = $array1['int'];
        $eventsubway = $array1['sub'];
        $parking = $array2['park'];
        $washroom = $array2['wash'];
        $wheelchair = $array2['wheel'];
        $food = $array2['food'];
        $liquor = $array2['liq'];
        $start = $array2['start'];
        $end = $array2['end'];
        $short = $array2['short'];
        $long = $array2['long'];
        $url = $array3['url'];
        $con = $array3['con'];
        $email = $array3['email'];
        $cat = $array3['cat'];
        $guest = $array3['guest'];
        $max = $array3['max'];
        $book = "YES";
        $weekend = $array3['weekend'];
        $free = $array3['free'];
        $price = $array3['price'];
        $posted = 1;
        $member = "YES";

        $query = "INSERT INTO Events(EventName,EventImage,EventVenue,EventCity,EventDate,EventIntersection,EventSubwayStation, isParking,isWashroom,"
            ."isWheelchair,isFoodBeverages,isLiquor,EventStartTime,EventEndTime,EventShortDescription,EventLongDescription,EventURL,EventContactNumber,EventEMail,"
             ."EventCategory,EventGuest,EventMaxQuantity,EventBookedNumbers,isWeekend,isFree,EventPrice,
                isPosted,MemberID)"
                . "VALUES"
                . "('$eventname','$eventimg','$eventvenue','$eventcity','$eventdate','$eventintersection','$eventsubway',"
                . " '$parking','$washroom','$wheelchair','$food','$liquor','$start','$end',"
                . "'$short','$long','$url',$con,'$email',"
                . "'$cat','$guest',$max,$book,'$weekend','$free',$price,"
                . "'$posted',$member)";

        $db->exec($query);
    }

}
