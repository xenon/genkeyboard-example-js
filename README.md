# Genkeyboard example input method
This project uses the genkeyboard tool to assist in making custom input methods.
- It is intended to demo the problem that genkeyboard tool can assist with.

## Specifics
This is a static html page that allows one to type into a textbox, converting sequences of characters into
characters of a certain input method.

## Technical details
Using the genkeyboard tool one can generate a js object that represents a keyboard layout. The webpage
in this repository can load one of these objects and provide input method functionality along with
some information for the user to understand the layout.

# Usage
- Open index.html and click a button for the language you want to type in.
- It should show Current Language: (SELECTED LANGUAGE)
- Now you can type into the textbox and your characters will be mapped into the custom input method

# Description of the page
- Buttons: Select a language to use
- Current Language: The currently selected language
- Character: The current character that would be output if the sequence is terminated
- Current input sequence: The characters typed on the keyboard to produce this output
- Possible next character: Next typeable characters that eventually lead to some output character
- Textbox: Where you should type to see the input method

# Known issues
- Right now one can only type at the end of a textbox, editing in the middle is broken