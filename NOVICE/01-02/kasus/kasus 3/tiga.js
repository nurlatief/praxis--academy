var x= 0;
var y=-1;
var z= 4;
if (x>y && x>z)
{
        if (y>z)
        {
            document.write(x + ", " + y + ", " +z);
        }
        else
        {
            document.write(x + ", " + z + ", " +y);
        }
}
 else if (y>x && y >z)
 {
                if (x>z)
                {
                    document.write("hasil dari :" + y + "," + x + ", " +z);
                }
                else
                {
                    document.write(y + ", " + z + ", " +x);
                }
        }
 else if (z>x && z>y)
 {
                if (x>y)
                {
                    document.write(z + ", " + x + ", " +y);
                }
                else
                {
                    document.write(z + ", " + y + ", " +x);
                }
}        
else{
    alert('error');
}