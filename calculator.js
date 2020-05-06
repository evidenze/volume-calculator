           function calculate(diameter, length, depth) {
           
            var res = 0;  //result

            //Convert inputs to numbers
            d = new Number(diameter);
            l = new Number(length);
            h = new Number(depth);
            r = d / 2;
            
            var segArea = r * r * Math.acos((r - h) / r) - (r - h) * Math.sqrt(2 * r * h - h * h);
            res = segArea * l
            
            //Convert to liters
            var finalResult = res / 1000;
            
            return finalResult
           }
