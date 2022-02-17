 var height = 2;
         var width = 8;

         var col = 0;
         var row = 0;
         console.log("Starting Loop<br> ");

         while (row < height) {
            col = 0;

            while(col < width) {
               console.log("#");
               col++;
            }
            console.log("<br>");
            row++;
         }
         console.log("Loop stopped!");
