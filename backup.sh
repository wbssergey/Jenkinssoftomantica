  

  523  mkdir joebstrn
  524  cd joebstrn
  526  ../mcopy.sh joebstrn
  528  mkdir 10
  529  mkdir 20
  530  mkdir 2
  577  cd 10
  581  ../../mcopy.sh joebstrn/10/
  582  cd ..
  583  cd 20
  585  ../../mcopy.sh joebstrn/20/
  587  cd ..
  591  cd ..
  597  mkdir pool.strn
  598  cd pool.strn
  599  ../mcopy.sh pool.strn/
  600  mkdir 1
  601  mkdir 2
  602  cd 1
  604  ../../mcopy.sh pool.strn/1/
  605  cd ..;cd 2;

  606  ../../mcopy.sh pool.strn/2/
  607  cd ../..
