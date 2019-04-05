# WEB-DEVELOPMENT-TECHNIQUES

*'I have seen that Javascript is really powerful when it comes to manipulation of HTML elements and what can be more better if I could just make libraries that would enable someone to deploy cool websites with least HTML knowledge.'*
***-Author***


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

# 3. lazy Attribute ~ Alpha Stage (progress haulted)
* ONE Attribute to create instant websites easily.
* This attribute "def" has 2 types:
  * navbar : instantly creates navbar (child elements need to be ordered using attribute "pos" numberred from "1").(refer example)
  * sidepane : instantly creates sidepane.

# 4. Simplicity ~ Alpha Stage (outdated)
* (updated & continued as Instant Websites)

# 5. Instant Websites ~ Beta Stage (outdated)
* (restructerred & continued as HTML WEBcodes)

# 6. HTML WEBcodes ~ (under development)
* Webpage definition language.
* Syntax similar to **SQL**.
* Simplicity with improved Functionality.
* Currently unique tagnames required.
* Creativity via TAG based 'css' is fully functional.
* Keyword List :
  * make : 
    * creates div.
    * Syntax : make *element_name*
  * in :
    * appends div in chosen parent element.
    * by default all elements will be created in *box* tag under body if *in* keyword not used.
    * Syntax : make *child_element* in *parent_element_of_your_choice*
  * with :
    * adds child elements while parent creation.
    * Child element names are separated by space.
    * Syntax : make *element_name* with *child1* *child2* *child3*
  * where :
    * used to select an element/elements to define it further.
    * has following attributes :
        - **all** : *all* is used to select all *sibling elements* to define property.
        - **is/are clickable** is used to provide *elements* with _onclick_ functionality along with _dynamic function names_.
    * Syntax : make *element_name* with *child1* *child2* where *child1*,*child2* are clickable
    * Syntax : make *element_name* with *child1* *child2* where *all* are clickable
    * **ABOVE 2 Syntaxes show example that produce SAME RESULTS.**

