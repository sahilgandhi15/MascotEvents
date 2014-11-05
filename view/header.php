<header id="header">
            <div class="header-container">
                <div class="inner-container">
                    <div id="logo"> 
                        <a href="#" title="Event Manager Canada"> <img src="images/logo.png" alt="Event Manager" class="logo" /> </a>
                    </div>

                    <div class="search">
                        <form action="" id="search" method="post">
                            <p class="options-text"> <strong>Search: &nbsp; &nbsp; &nbsp;</strong></p>
                            <div id="radio-set-search">
                                <input type="radio" id="radio1" name="radio" value="1"/>
                                <label for="radio1">All</label>
                                <input type="radio" id="radio2" name="radio" value="2"/>
                                <label for="radio2">Free</label>
                                <input type="radio" id="radio3" name="radio" value="3"/>
                                <label for="radio3">This Weekend</label>
                                <input type="radio" id="radio4" name="radio" value="4"/>
                                <label for="radio4"> Dance Party</label>
                            </div>
                            <div class="form-group">
                                <div class="col-md-9">
                                    <input id="textinput" name="textinput" type="text" placeholder="Search Here" class="form-control input-s">
                                </div>
                                <div class="col-md-0">
                                    <button id="singlebutton" name="singlebutton" class="btn btn-primary">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="login-panel">
                        <p class="options-text"> <strong>Have an  account?</strong> Please click login below </p>
                        <div class="reg-login-panel"> 
                            <a href="register.php" class="reg-link"><span>REGISTER</span></a> 
                            <a href="" class="login-link"><span>LOGIN</span></a>
                            <div class="form-login-panel">
                                <form action="" class="js-signin signin" method="post">
                                    <fieldset class="textbox">
                                        <label class="username js-username"> <span>Username or E-mail</span> <span class="input-wrapper">
                                                <input class="js-username-field" type="text" value="" name="" autocomplete="on" />
                                        </label>
                                        <label class="password js-password"> <span>Password</span> <span class="input-wrapper"></span>
                                            <input class="js-password-field" type="password" value="" name="session[password]">
                                        </label>
                                    </fieldset>
                                    <button type="submit" class="btn submit candyblue">Sign in</button>
                                    <p><a class="forgot" href="forgotpassword.php">Forgot password?</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>