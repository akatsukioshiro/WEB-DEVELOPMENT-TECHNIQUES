# WEB-DEVELOPMENT-TECHNIQUES
So, here I am gonna upload techniques for crazy developers and lazy gooses. Bootstrap is doing similar or same shit but I wanna call my shit "Lazy Strap".

# 1. lazyStrap Buttons : (outdated)
* (continued as lazyB)

# 2. lazyB Instant Buttons :
* ONE Tag for an array of buttons.
* Custom Attributes for functionality.
* Custom Attribute List :
  * beautify 
    * type1 : (rounded buttons with gradient background)
    * type2 : (rounded buttons with gradient background)
    * type3 : (rounded buttons with gradient background)
    * type4 : (rounded buttons with gradient background)
    * type5 : (rounded buttons with gradient background)
  * count : (Number of buttons required)
  * butnames : (Name of each button separated by "_")
  * accesstype :
    * inner : (to call javascript functions)
    * outer : (to use with hyperlinks)
  * access : (NULL is used for "inner" accesstype separated by "~" hyperlinks is used for "outer" accesstype)
* Can beautify further with custom CSS.
* Quick implementation.
* Tag is REUSABLE with different/same properties.
* Knowledge required for 90% Tag Usability :
  * Basic HTML.(Use beautify attribute for intant deployment).
* Knowledge required for 95% Tag Usability :
  * Basic HTML + Minimal CSS.
* Knowledge required for 100% Tag Usability :
  * Basic HTML + Minimal Javascript.
  
* Example Tag Used : 

\<lazyB class="obt1" count="2" beautify="type1" butnames="CONFIRM_CANCEL" accesstype="inner_outer" access="NULL~https://www.google.com/" \>
\</lazyB\>

![Output of above tag](https://github.com/akatsukioshiro/WEB-DEVELOPMENT-TECHNIQUES/blob/master/image/img.png)
