<html>
    <head>
        <script src="js/bootstrap.js"></script>
        <script src="js/jquery.js"></script>
        <script src="js/jquery.numTick.js"></script>
        <link rel="stylesheet" href="css/bootstrap.css" />
        <script>
            $(function(){
                
                $('#myNumber').numTick({
                    speed : 2000
                });
                
                $('#myNumber2').numTick({
                    speed       : 1000,
                    numbersUrl  : 'http://superbia.kodingen.com/numTick/img/sprite2.png',
                    width       : 50,
                    height      : 50
                });
                
                $('#myNumber3').numTick({
                    speed       : 600,
                    numbersUrl  : 'http://superbia.kodingen.com/numTick/img/sprite3.png',
                    width       : 50,
                    height      : 50,
                    border      : 'none'
                });
                
            });
        </script>
    </head>
    <body>
        <div class="container">
            <div class="row well">
                <h1>jQuery Number Ticker Plugin - numTic by Onur Celik</h1>
                <br /><br />
                <div id="myNumber">1527340987654321</div> <br />          
                <div id="myNumber2">15273654321</div> <br />            
                <div id="myNumber3">5397048108</div>
            </div>
        </div>
        
        
    </body>
</html>