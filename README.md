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

# 6. HTML WEBcodes ~ (outdated)
* (renamed & continued for HTML5 as SML)

# 7. SML ~ (outdated with many elements redefined)
* Syntax similar to **SQL**.
* Simplicity with improved Functionality.
* Currently unique tagnames required.
* Creativity via TAG based 'css' is fully functional.
* __BASIC Necessary Instructions :__
  * No need to use <\html\>\</html>,\<head\>\</head\>,\<body\>\</body\>
  * __\<!DOCTYPE html\>__ is mandatory.
  * __\<data\>\</data\>__ if necessary, will be initialised after doctype.
  * Element definition is done after \<data\> tag is closed.
  * __Script.js__ is mandatory .js File to be added only after 'Element Definition' phase.
  * Add stylesheet at the end.
  * Each statement must end with a __full stop "."__, it is a special character so do not use it elsewhere.
* __Special Character List :__
  * __FULL STOP : .__ is used to end a statement.
  * __COMMA     : ,__ is used to separate child element names in where keyword.
  * __SEMICOLON : ;__ is used to separate id and class of child elements in with keyword.
  * __BRACKETS  :__ 
    * __()__ is used to enclose id and class of child elements in with keyword.
    * __()__ is used to enclose id of element to which content data needs to be added, within DATA TAG.
    * __{}__ is used to enclose element content data in DATA TAG.
* Keyword List :
  * make : 
    * creates div.
    * Syntax : make *element_name*
    * Additional attributes (if necessary either or both can be added) :
      - *__id__=idname*
      - *__class__=classname*
      - Syntax : __make__ *element_name* *__id__=idname* *__class__=classname*
  * in :
    * appends div in chosen parent element.
    * by default all elements will be created in *box* tag under body if *in* keyword not used.
    * Syntax : __make__ *child_element* __in__ *parent_element_of_your_choice*
  * with :
    * adds child elements while parent creation.
    * Child element names are separated by space.
    * Syntax : make *element_name* with *child1* *child2* *child3*
    * Additional child attributes (if necessary either or both can be added) :
      - *(__id__=idname;)*
      - *(__class__=classname;)*
      - Syntax : __make__ *element_name* __with__ *childelement(__id__=idname;__class__=classname;)*
  * where :
    * used to select an element/elements to define it further.
    * has following attributes :
      - **and** : *and* is used to define an *element* clickable as well as *editable to accept input*.
      - **all** : *all* is used to select all *sibling elements* to define property.
      - **is/are clickable** is used to provide *elements* with _onclick_ functionality along with _dynamic function names_.
      - **take/takes input** is used to make *elements* accept *text input*.
    * **SYNTAX EXAMPLES :**
      - **Type 1 :**  
        * Syntax : __make__ *element_name* __with__ *child1* *child2* __where__ *child1*,*child2* are clickable
        * Syntax : __make__ *element_name* __with__ *child1* *child2* __where__ *all* are clickable
        * **ABOVE 2 Syntaxes show example that produce SAME RESULTS.**
      - **Type 2 :**  
        * Syntax : __make__ *element_name* __with__ *child1* *child2* __where__ *child1*,*child2* take input
        * Syntax : __make__ *element_name* __with__ *child1* *child2* __where__ *all* take input
        * **ABOVE 2 Syntaxes show example that produce SAME RESULTS.**
      - **Type 3 :**
        * Syntax : __make__ *element_name* __with__ *child1* *child2* __where__ *child1*,*child2* take input __and__ *child1*,*child2* are clickable
        * Syntax : __make__ *element_name* __with__ *child1* *child2* __where__ *all* take input __and__ *all* are clickable
        * **ABOVE 2 Syntaxes show example that produce SAME RESULTS.**
* __\<data\>__ Tag :
  * used to add text or image content inside tags.
  * initialization Syntax : __\<data\>_tag specific content_\</data\>__
  * **Requirements** :
    * Tagname, Tag ID and Content required.
  * __Syntax__ of _tag specific content_ : _**tagname**_(_**id**=idname;_){_textContent (Paragraph also supported)_}
  * __Syntax__ of _image content_ : _**tagname**_(_**id**=idname;_){_**img**=imgname.imgformat_}

# 8. **condensed** :
* _**Exponentially**_ reduced _webpage generation time_. 
* _Utility script_ with _**Javascript parser**_.
* Script syntax is similar to _SQL_.
* Simplicity with improved Functionality.
* Currently unique _tagnames_ required.
* Creativity via TAG based 'css' is fully functional.
* __Development Phases :__
  * Simplicity _~ Alpha Stage_
  * Instant Websites _~ Beta Stage_
  * HTML WEBcodes _~ Gamma Stage_
  * SML _~ Lambda Stage_
* __BASIC Necessary Instructions :__
  * No need to use <\html\>\</html>,\<head\>\</head\>,\<body\>\</body\> in chrome browser.
  * Add <\html\>\</html>,\<head\>\</head\>,\<body\>\</body\> to support mostly all browsers.
  * \<body\>\</body\> is where all code is expected to be placed.
  * __\<!DOCTYPE html\>__ is mandatory.
  * __Script.js__ is mandatory .js File to be added only after 'Element Definition' phase.
  * Add stylesheet at the end.
  * Each statement must begin with a __dollar character "$"__, it is a special character so do not use it elsewhere.
* __Special Character List :__
  * __DOLLAR CHARACTER : $__ is used to end a statement.
  * __COMMA     : ,__ is used to separate child element names in _**where**_ keyword.
  * __SEMICOLON : ;__ is used to separate _id_ and _class_ of child elements in _**with**_ keyword.
  * __EQUALS + PIPE : =|__ is used in **remake** to separate _addingtype_ and _addingcontent_.
  * __BRACKETS  :__ 
    * __()__ is used to enclose _id_, _class_ and other attributes of child elements in _**with**_ keyword.
* **Keyword List :**
  * **make :** 
    * creates div.
    * Syntax : make *element_name*
    * Additional attributes (if necessary either or both can be added) :
      - *__id__=idname*
      - *__class__=classname*
      - Syntax : __make__ *element_name* *__id__=idname* *__class__=classname*
  * **in :**
    * appends div in chosen parent element.
    * by default all elements will be created in *box* tag under body if *in* keyword not used.
    * Syntax : __make__ *child_element* __in__ *parent_element_of_your_choice*
  * **with :**
    * adds child elements while parent creation.
    * Child element names are separated by space.
    * Syntax : make *element_name* with *child1* *child2* *child3*
    * Additional child attributes (if necessary either or both can be added) :
      - *(__id__=idname;)*
      - *(__class__=classname;)*
      - *(height-with-heaight-type \* width-with-widthtype;)*
      - Syntax : __make__ *element_name* __with__ *childelement(__id__=idname;__class__=classname;height-with-heaight-type \* width-with-widthtype)*
  * **where :**
    * used to select an element/elements to define it further.
    * has following attributes :
      - **and** : *and* is used to define an *element* clickable as well as *editable to accept input*.
      - **all** : *all* is used to select all *sibling elements* to define property.
      - **is/are clickable** is used to provide *elements* with _onclick_ functionality along with _dynamic function names_.
      - **take/takes input** is used to make *elements* accept *text input*.
      - **is/are draggable** is used to provide *elements* with _draggable_ functionality.
    * **SYNTAX EXAMPLES :**
      - **Type 1 :**  
        * Syntax : __make__ *element_name* __with__ *child1* *child2* __where__ *child1*,*child2* are clickable
        * Syntax : __make__ *element_name* __with__ *child1* *child2* __where__ *all* are clickable
        * **ABOVE 2 Syntaxes show example that produce SAME RESULTS.**
        * *draggable* attribute uses same syntax.
      - **Type 2 :**  
        * Syntax : __make__ *element_name* __with__ *child1* *child2* __where__ *child1*,*child2* take input
        * Syntax : __make__ *element_name* __with__ *child1* *child2* __where__ *all* take input
        * **ABOVE 2 Syntaxes show example that produce SAME RESULTS.**
  * **remake :**
    * selects div to add text, image etc.
    * Attribute list :
      * having : (compulsory)
        * used to select id of element. 
      * adding : (compulsory)
        * used to add text, image etc.
        * Supported types :
          * Text
          * Image
    * Syntax : **remake** *element_name* **having** id=_idname_ **adding** text=|_textcontent_
    * Syntax : **remake** *element_name* **having** id=_idname_ **adding** image=|_imageurl_
