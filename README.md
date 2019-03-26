# WEB-DEVELOPMENT-TECHNIQUES
So, here I am gonna upload techniques for crazy developers and lazy gooses. I have seen that Javascript is really powerful when it comes to manipulation of HTML elements and what can be more better if I could just make libraries that would enable someone to deploy cool websites with least HTML knowledge.

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

# 3. lazy Attribute ~ Alpha Stage (Testing)
* ONE Attribute to create instant websites easily.
* This attribute "def" has 2 types:
  * navbar : instantly creates navbar (child elements need to be ordered using attribute "pos" numberred from "1").(refer example)
  * sidepane : instantly creates sidepane.

